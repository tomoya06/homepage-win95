---
title: 因特网五层协议笔记
date: 2018-12-22 12:32:21
tags:
- 上课
- 前端
- 计算机网络
---

就是笔记了。主要参考《计算机网络：自顶向下方法》第六版中文版教材，结合计网课程考点总结。

<!-- more -->

## 概述

* 因特网(Internet)：又称互联网，指利用TCP/IP通讯协定所创建的世界范围的计算机网络，网络与网络之间所串联成的庞大网络。
  * vs 万维网(WWW)：后者是基于超文本相互连接而成的全球性网络，是互联网所能提供的服务之一。此外互联网还能提供的服务包括P2P网络、文件共享、IP电话服务等。
* 协议(protocol)：一个协议定义了在两个或多个通信实体之间交换的报文格式和次序，以及报文发送/接收一条报文或其他事件所采取的动作。
* 分组(packet)：将报文(message)划分成的小的数据块
* 分组交换网中的性能描述：
  * 丢包(loss)：分组等待队列已满，新分组无法保存
  * 时延(delay)：节点总时延(total nodal delay) = 结点处理时延(nodal processing delay) + 排队时延(queuing delay) + 传输时延(transmission delay) + 传播时延(propagation delay) 
    * 传输时延 vs 传播时延：前者是路由器将分组推出所需要的时间(可理解为处理完之后到送上高速公路前这段)，后者是一个比特从一台路由器向另一台路由器传播所需要的时间(就是在高速上飞驰到出口这段了)
  * 吞吐量(throughput)：接收数据的速度
* 分层协议：
  * 因特网的分层协议：物理层-链路层-网络层-传输层-应用层
  * 七层ISO OSI模型：物理层-链路层-网络层-传输层-会话层-表示层-应用层
  * 各层功能：
    * 应用层：网络应用程序及其应用层协议存留的地方
    * 传输层：在应用程序端点之间传送应用层报文
    * 网络层：将数据报从一台主机移动到另一台主机
    * 链路层：将链路帧从一个结点(主机或路由器)移动到路径上的下一个结点
    * 物理层：将帧中的每个比特从一个结点移动到下一个结点


## 应用层

* 数据单位：报文(message)

### 要点

* 应用程序体系结构：CS结构/P2P结构
* 进程通信：socket
* 服务分类：可靠数据传输，吞吐量，定时，安全性
  * 持续链接和非持续连接
  * 使用的运输层协议：TCP vs UDP
  * SSL

### 协议和应用

#### web 和 HTTP

* 带流水线的持续连接
  * 关键词：TCP，RTT，80端口，CS结构
* 报文格式
  * 关键词：请求行，首部行，实体体
  * 常用状态码：200 301 304 400 404 500 
* 无状态协议
  * cookie
* web缓存
  * 代理服务器(web缓存器)
  * 条件GET方法："If-Modified-Since""Last-Modified"首部行

#### DNS：因特网的目录服务

* 解决的问题：主机名到IP地址的转换
  * 关键字：UDP，53端口，CS结构
* 分布式设计
  * 层次：根/顶级域(TLD)/权威/本地DNS服务器
  * 递归查询 vs 迭代查询：前者发起查询主体逐步推移，后者同一主题发起查询
  * DNS缓存

#### P2P

* 文件分发
  * 分发时间及下界计算
    * C/S结构文件分发时间：$D_{cs}\geq max{\frac{NF}{u_{s}}, \frac{F}{d_{min}}}$
    * P2P结构文件分发时间：$D_{p2p}\geq max{\frac{F}{u_{s}}, \frac{F}{d_{min}}, \frac{NF}{u_{s}+\sum_{i=1}^{N}u_{i}}}$
    * 分布式散列表(P2P数据库)(DHT)
  * 关键字：散列函数，
  * 实现：环形DHT，具有捷径的环形DHT，

#### socket编程

教材用的python，自行用NodeJS。注意tcp socket在net库，udp socket在dgram库。

## 传输层

* 数据单位：报文段(segment)
* 为运行在不同主机的应用进程之间提供了逻辑通信
* 在端系统中实现而非在路由器
* 报文段格式：源端口号字段、目的端口号字段

### 协议

#### TCP

* 关键词：可靠数据传输协议，拥塞控制，面向连接
* 多路复用和多路分解
  * 多路分解：将运输层报文段中的数据交付到正确的socket
  * 多路复用：将不同socket的数据块封装好生成报文段，传播到网络层
* socket标识：四元组(源IP+源端口号+目的IP+目的端口号)
* socket分配：每个连接都建立一个新socket
* 报文段结构

##### 可靠数据传输原理

* 有限状态机(Finite-State Machine, FSM)
* 自动重传请求(ARQ)协议：差错检测+接收方反馈+重传
* 额外的问题与解决
  * ACK/NAK本身受损：添加分组序号
  * 丢包：倒计数计时器
  * 链路利用率低：流水线技术
  * 流水线技术差错恢复：回退N步(GO-Back-N, GBN)、选择重传(Selective Repeat, SR)
* 拥塞控制

##### TCP实现

* 连接管理
  * 建立连接：三次握手
  * 关闭连接
* TCP拥塞算法：加性增、乘性减(Additive-Increase Multiplicative-Decrease, AIMD)
  * 参数：cwnd/ssthresh
  * 慢启动：`cwnd**2`，直到出现了：
    1. 超时：$ssthresh=cwnd_{t}\div 2, cwnd=1$，然后重新开始慢启动
    2. $cwnd=ssthreash$：进入拥塞避免模式
    3. 检测到3个ACK：执行快速重传并进入快速恢复模式$$
  * 拥塞避免：`cwnd++`，直到出现了：
    1. 超时：同上
    2. 3个ACK：$cwnd=cwnd_{t}\div 2(+3MSS), ssthresh=cwnd_{t}\div 2$
  * 快速恢复(非必须)：`cwnd++`

#### UDP

* 关键词：不可靠，无连接
* socket标识：二元组(目的IP地址+目的端口号)
* socket分配：到达同IP和端口的报文段共用同一个socket
* 传输准备：无需准备即可进行数据传输
* 检验和：差错检测功能

## 网络层

* 主要功能：
  * 转发(单一路由器的出入选择)，
  * 路由选择(多个路由器间的路径选择)，
  * 建立连接
* 数据单位：数据报(datagram)

### 路由器工作原理

* 转发表：前缀-链路接口，最长前缀匹配规则
* 结构：输入端口(使用转发表)，交换结构，输出端口，路由选择处理器
* 分组队列，排队
  * 线路前部阻塞(Head-Of-the-Line, HOL)
* 数据报格式
* 因特网网络层的主要组件：IP协议，因特网路由选择协议，因特网控制报文协议(ICMP)

### IP协议

* 关键词：尽力而为交付服务，不可靠服务
* IPv4
  * 编址：32比特/4字节
  * 子网，子网掩码，
    * 无类别域间路由选择(Classless Interdomain Routing, CIDR)：a.b.c.d/x
  * 动态主机配置协议(Dynamic Host Configuration, DHCP)：自动分配新IP地址的过程
  * 网络地址转换(Network Address Translation. NAT)：管理IP地址的典型方法 
* IPv6
  * 编址：128比特
  * v4迁移到v6：双站，建隧道

### ICMP

* ping：ICMP类型0

### 路由选择算法

* 解决问题：从源路由器到目的路由器的路由选择问题
* 分类：
  * 全局式路由选择算法/链路状态算法(Link State, LS)：
    * 网络拓扑和链路费用均已知
    * eg：Dijkstra算法
  * 分散式路由选择算法/距离向量算法(Distance Vector, DV)：
    * 迭代、异步、分布式算法
    * 原理：Bellman-Ford方程：$d_{x}(y)=min_{v}{c(x, v)+d_{v}(y)}$_，其中v是y的邻居之一
    * 链路费用发生变化、链路故障引起的距离向量变化过程：”好消息传得快，坏消息传得慢“
  * 层次路由选择：自治系统(Autonomous System, AS) + 自治系统内部路由选择协议(intra-autonomous system routing protocol) + 自治系统间路由选择协议(inter-autonomous system routing protocol)
    * 因特网中的自治系统内部的路由选择：路由选择信息协议(Routing Information Protocol, RIP)，开放最短路优先(Open Shortest Path First, OSPF)
    * 自治间的路由选择：边界网关协议(Border Gateway Protocol, BGP) <-- "绝对至关重要的协议！"“将所有的东西粘合在一起了”

## 链路层

* 数据单位：帧(frame)
* 基本服务：将数据报通过单一通信链路从一个结点移动到相邻结点
  * 成帧
  * 链路接入
  * 可靠交付
  * (比特级)差错检测和纠正
    * 奇偶校检/二维奇偶校检(two-dimensional parity)，
    * 检验和方法(checksum)
    * 循环冗余检测(Cyclic Redundancy Check, CRC)

### 协议

* 点对点链路(point-to-point link)和协议
  * 点对点协议(point-to-point protocol, PPP)
  * 高级数据链路控制(high-level data link control, HDLC)
* 广播链路(broadcast link)/多路访问链路和协议(multiple access protocol)
  * 信道划分协议(channel partitioning protocol)
    * 时分多路复用(TDM)
    * 频分多路复用(FDM)
    * 码分多址(Code Division Multiple Access, CDMA)：每个结点编码，用编码给数据报编码发送
  * 随机接入协议(random access protocol)
    * 时隙ALOHA：所有节点同步，在每个时隙开始时开始传输
    * 纯ALOHA
    * 载波侦听多路访问(Carrier Sense Multiple Access, CSMA)和具有碰撞检测的CSMA(CSMA with Collision Detection, CSMA/CD)
  * 轮流协议(taking-turns protocol)
* 局域网
  * MAC地址：链路层地址，设备的网络适配器所有
    * 6字节，$2^{6 \times 8}=2^{48}$种可能，16进制表示
  * 地址解析协议(Address Resolution Protocol, ARP)：IP地址和MAC地址间的转换
    * vs DNS：前者只为一个子网下的主机和路由器接口解析IP地址，后者为因特网中任何主机解析主机名

### 交换机工作原理

* 过滤，转发：交换机表
* 自学习特性
* 即插即用
* vs 路由器：
  * 前者用MAC地址转发分组，后者用IP地址
  * 前者在链路层，后者在网络层

## 无线移动网络

### Wifi：802.11无线LAN

* 基本构建模块：极本服务集(Basic Service Set, BSS) = 中央基站(Base Station，作为接入点(Access Point, AP)) + 多个无线站点
* MAC协议：带碰撞避免的CSMA(CSMA with collision avoidance, CSMA/CA)