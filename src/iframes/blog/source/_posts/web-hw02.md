---
title: 计算机网络作业2
date: 2018-12-09 19:43:13
tags:
- 上课
- 前端
- 计算机网络
---

<style>
.imgdiv {
    text-align: center;
}
.imgdiv img {
    display: inline-block;
    width: 60%;
}

.imgdiv span {
    display: block;
    font-size: 12px;
    opacity: 80%;
}
</style>

# 计算机网络作业2

<!--more-->

## 一、双包发送协议设计

同样是停等协议，但一个包带有两个分组。此处暂不考虑包裹出错的问题。在本协议中，发送方将维护一个可容纳两个分组的待机数据包，在数据包满的时候发送；接收方收到数据包后从包中解析出有序的两个分组，依次递交给下层协议。

### 1. 协议流程

#### 前言

成对发送分组可能存在存在的问题是，当分组数为奇数，最后一个包裹会一直处于等待的状态。此处作补充说明：发送方在本次传输开始，即收到第一个分组的时候，开始维护一个计时器，在超过一定时间仍未收到上层传来新的分组时，认定为分组发送完毕。在将缓存区的分组也都发送完毕时，若待发送包裹未满未空，则额外添加一个null的分组，并把包裹发送出去。

当然，若上一层是一次性把需要发送的分组全都交给本层的话，只需在最后一个包裹中直接添加一个null分组即可，不用维护计时器。

#### 发送方：

* 初始化：

````
windowSize = 2
windowUsed = 0
dataArr[]
watingACK = 0
````

* 事件处理

1. 上层调用rdt_send(data)，或等待上层调用rdt_send()超时：比较windowUsed和windowSize：

    1. 等于：缓存data。超时的话data为null，下同。
    2. 不等于：将data存入`dataArr[windowUsed]`，windowUsed自加，再次比较windowUsed
        
        1. 等于：打包发送dataArr[] + waitingACK + chksum
        2. 不等于：等待下次调用`rdt_send()`。

2. 收到ACK：清空dataArr，windowUsed归零，执行 `waitingACK = (waitingACK+1) mod 2`

3. 等待ACK超时：重新发送pkgToSend

#### 接收方

* 初始化

````
expectedACK = 0
````
* 事件处理

1. 收到包裹：检查包裹完整性和ACK匹配：

    1. 不完整或不匹配：发送NAK
    2. 完整：解包，得到`data[0] data[1] waitingACK`，依次调用`deliver_data(data[i])`，发送`ACK = waitingACK`，`expectedACK = (expectedACK+1) mod 2`

### 2. FSM

#### 发送方

<div class="imgdiv">
<img src="https://i.loli.net/2018/12/09/5c0cd41029caf.jpg"/>
<span>发送方FMS</span>
</div>

#### 接收方

<div class="imgdiv">
<img src="https://i.loli.net/2018/12/09/5c0cd410cc753.jpg"/>
<span>接收方FMS</span>
</div>

### 3. 时序图

等待成对数据满足并组装打包的流程将不在时序图中体现。

<div class="imgdiv">
<img src="https://i.loli.net/2018/12/09/5c0cd4eb757d0.jpg"/>
<span>时间流</span>
</div>

## 二、新TCP协议窗口分析

### 分析

1. 慢启动周期为RTT：指数增长阶段
2. 拥塞避免周期为10RTT
3. 16轮后是出现了冗余ACK，
4. 22轮后是出现了超时，cwnd设置为1
5. 第一轮传递的ssthresh为32MSS
6. 18轮的ssthresh为16轮的cwnd的一半，为 `42/2=21 MSS`
7. 24轮的ssthresh为22轮的cwnd的一半，为 `29/2=14.5 MSS`
8. 第70个报文段发送于：`1+2+4+8+16+32+7 ==>  第8轮`
9. 26轮时的cwnd为8，此时出现ACK冗余，ssthresh将设为 `cwnd/2 = 4 MSS`，下一个cwnd设为1MSS

## 三、数学题

### 解答

#### 1. 证明

由于在一个周期内，吞吐量成线性增长逐次+1，

周期内发包总数

$$P = \frac{1}{2}(\frac{W}{2}+ W)(\frac{W}{2} + 1)=\frac{3}{8} W^2 + \frac{3}{4}W \tag{1}$$

丢包率

$$L = \frac{1}{P} = \frac{1}{\frac{3}{8} W^2 + \frac{3}{4}W} \tag{2}$$

#### 2. 证明

由1，平均吞吐量为

$$R = \frac{1}{2} \times (\frac{W}{2} + W) \div RTT = \frac{3W}{4RTT} \tag{3}$$

由(2)，得到

$$W \approx \sqrt{\frac{8}{3L}} \tag{4}$$

将(4)代入(3)，则有

$$L \approx \frac{1.22 \cdot MSS}{RTT \sqrt{L}} \tag{5}$$

