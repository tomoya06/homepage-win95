---
title: Linux Commands 
date: 2019-03-09 16:57:05
tags:
- 技巧
- Linux
---

> 记录近期常用的Linux命令

<!-- more -->

## 查看文件相关

````
// 查看/etc/profile的前10行内容，应该是：
head -n 10 /etc/profile
// 查看/etc/profile的最后5行内容，应该是：
tail  -n 5 /etc/profile
// 查看完整文件
cat /etc/profile
````

## 后台运行

### & 

* 在Linux中，当在前台运行某个作业时，终端被该作业占据；而在后台运行作业时，它不会占据终端。可以使用&命令把作业放到后台执行。实际上，这样是将命令放入到一个作业队列中了：

````
./test.sh &
````

* 需要用户交互的命令不要放在后台执行，因为这样你的机器就会在那里傻等。不过，作业在后台运行一样会将结果输出到屏幕上，干扰你的工作。如果放在后台运行的作业会产生大量的输出，最好使用下面的方法把它的输出重定向到某个文件中：

````
// 2>&1表示所有的标准输出和错误输出都将被重定向到一个叫做out.file 的文件中
<command> >out.file 2>&1 &
````

### nohup

* 如果你正在运行一个进程，而且你觉得在退出帐户时该进程还不会结束，那么可以使用nohup命令。该命令可以在你退出帐户之后继续运行相应的进程。

````
nohup conmmand &
````

* 如果使用nohup命令提交作业，那么在缺省情况下该作业的所有输出都被重定向到一个名为nohup.out的文件中，除非另外指定了输出文件：

````
nohup command > myout.file 2>&1 
````

### 后台进程查看

* jobs：查看当前有多少在后台运行的命令

````
jobs -l
````

* fg：将后台中的命令调至前台继续运行。如果后台中有多个命令，可以用 fg %jobnumber将选中的命令调出，%jobnumber是通过jobs命令查到的后台正在执行的命令的序号(不是pid)
* bg：将一个在后台暂停的命令，变成继续执行。如果后台中有多个命令，可以用bg %jobnumber将选中的命令调出，%jobnumber是通过jobs命令查到的后台正在执行的命令的序号(不是pid)

## 查找进程

* ps：更多参数及其含义参考[本文](https://linuxtools-rst.readthedocs.io/zh_CN/latest/tool/ps.html)

````
ps -aux | grep <filter>
````

## 查看端口占用

* netstat：更多参数及其含义参考[本文](https://www.cnblogs.com/ggjucheng/archive/2012/01/08/2316661.html)

````
netstat | grep <port number>
````