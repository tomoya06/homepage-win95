---
title: 基于PUF的IoT设备身份管理模型
date: 2019-02-26 20:13:16
tags:
- 毕业设计
- 密码学
---

> 来自论文 [Chatterjee U, Govindan V, Sadhukhan R, et al. Building PUF based Authentication and Key Exchange Protocol for IoT without Explicit CRPs in Verifier Database[J]. IEEE Transactions on Dependable and Secure Computing, 2018.](https://ieeexplore.ieee.org/abstract/document/8353301)

> 终端设备与区块链节点（拓展到任意节点好了）进行安全身份交互认证的方案参考：基于PUF的身份管理模型。
> 
> 流程和计算公式比较复杂。设备要求支持PUF，意味着原生树莓派不一定能用，有[方案](https://github.com/Tribler/tribler/issues/3064)说可以外接一个PUF芯片。

<!-- more -->

## PUF

* 实质是一个映射函数：$\{0, 1\}^n \rightarrow \{0, 1\}^m$，
* n位的输入(challenge)和系统的不可克隆性共同决定一个m位输出(response)

## 声明

1. 定义一个椭圆曲线，并从曲线上的点生成三组值$G_1,G_2,G_3$，用于定义加密函数
2. 定义一个双线性映射$e: G1 \times G2 \rightarrow G_3$满足
   1. 双线性：$\forall a, b \in F^*_q, \forall P \in G_1, Q \in G_1$: $e(aP, bQ)=e(P, Q)^{ab}$
   2. 非退化性：$e(P, Q) \neq 1$
   3. 可计算性：有高效算法来计算e
3. 定义三个哈希函数：
   1. H1: $\{ 0, 1\}^n \rightarrow G^*_1$, 
   2. H2: $\{0, 1\}^n \times \{0, 1\}^m \rightarrow G^*_2$, 
   3. H3: $G_2 \rightarrow \{0, 1\}^n$
4. 为了避免环境对BUF的干扰，需要另外设计BCH编码器和解码器
   1. BCH编码器电路可从BUF的输出结果另外生成一个辅助值
   2. BCH解码器可以将辅助值还原成BUF的输出结果
   3. 在论文的设计方案中，BCH编码解码器电路是使用Artix-7 FPGA实现的

## 系统架构

![](/images/PUF/PUF01.jpg)

## 流程

### Enrolment phase 注册阶段

1. Provisioning process：
   1. SCG随机生成一个m比特的密钥$K_s$，存到验证机的内存和KEYDB
   2. SCG给节点A发送一个随机生成的challenge $C_a$，节点A计算response $R_a = PUF(C_a)$，返回给SCG
   3. SCG生成辅助值$HLP_a=BCH_{Encoder}(R_a)$，组成元组<$C_a$, $R_a$, $HLP_a$>存到CRPDB，
2. Security Association Generation Process
   1. SCG随机生成一个n比特的challenge $C_s$，计算 $P_s=H2_{Ks}(C_s)$, $P_a=H1(R_a)$
   2. SCG随机从$Z^*_q$选择一个元素$a$并计算：<br>$B=P_a-a \cdot P_s$, <br>$d_1=H3(H1(C_a||C_s||HLP_a||a||H3(P_s))+B)$，<br>组成元组<$C_a$, $C_s$, $HLP_a$, $a$, $B$, $d_1$>存到SAP的MAPDB，这样对节点A的注册就完成了
3. 经过上述步骤，验证机只存有密钥$K_s$，其他数据都存到数据库，数据库是离线的

### Authentication & key exchange phase 认证和交换密钥阶段

假设节点A和节点B想要交互：

1. 节点A初始化一个请求<$ID_a$, $ID_b$>，发给验证机，后者转发请求给SAP
2. SAP从MAPDB查询得到<$C_a$, $C_s$, $HLP_a$, $a$, $B$, $d_1$>发给验证机
3. 验证机进行计算：$P_s = H2_{Ka}(C_s)$
4. 如果$d1==H3(H1(C_a||C_s||HLP_a||a||H3(P_s))+B)$，计算：$P_a=a \cdot P_s + B$
5. 验证机随机选择一个值$x \in _RZ^*_q$，并计算<br>$Q_a=P_a+x \cdot P_s +H1(ID_a||ID_b)$，<br>$V_a=e(P_a, x \cdot P_s)$，<br>组成元组<$C_a$, $HLP_a$, $Q_a$>发给节点A。
6. 节点A收到之后，
   1. PUF计算：$R_{actural}=PUF_a(C_a)$
   2. BCH解码器计算：$BCH_{Decoder}(HLP_a)=R_{corrected}$，应满足$R_{corrected}=R_{actural}$
   3. 进行计算：<br>$P^\prime_a=H1(R_{corrected})$ <br>$P^\prime_s=Q_a-P^\prime_a-H1(ID_a||ID_b)$ <br>$V^\prime_a=e(P^\prime_a, P^\prime_s)$
   4. 节点A随机选择: $t \in _RZ^*_q$, $Y_a \in _RG^*_1$, 计算密钥对：$KA_{PUB}=t \cdot Q_a, KA_{PRV}=t \cdot Y_a$, 组成元组<$V^\prime_a$, $KA_{PUB}$, $Y_a$, $H3(P^\prime_s+KA_{PUB})||H3(Y_a)$>发给验证机
7. 验证机收到之后，如果$V_a=V^\prime_a$，$H3(P_s+KA_{PUB})||H3(Y_a)=H3(P^\prime_s+KA_{PUB})||H3(Y_a)$，验证机就认为节点A是已授权设备，并接受他的公钥$KA_{PUB}$
8.  类似地，验证机验证节点B，最后给节点A发送元组<$KB_{PUB}, Q_b, Y_b, H3(H1(P_a)||H1(KB_{PUB})||H1(Q_b)||H1(Y_b))$>
9.  节点A收到之后，若$H3(H1(P_a)||H1(KB_{PUB})||H1(Q_b)||H1(Y_b))=H3(H1(P^\prime_a)||H1(KB_{PUB})||H1(Q_b)||H1(Y_b))$，说明验证机是已授权的，因为只有验证机能使用$P_s$来解析出$P_a$，并接受节点B的公钥

## 分析
