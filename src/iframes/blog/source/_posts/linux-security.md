---
title: Linux Server Security
date: 2019-03-09 00:57:05
tags:
- 技巧
- Linux
---

> 记录一些Linux服务器安全设置方法。基于Ubuntu 16.04.

> 参考[原文](https://linuxstory.org/four-ways-to-make-your-linux-server-more-security/)。不过网上一大堆啦。

<!-- more -->

## 添加用户

````
adduser <username>
// 之后会提示输入各类信息，例如密码、电话什么的就不必要了。
// 会把该用户加入同名的组，为了让该用户拥有sudo权限：
gpasswd -a <username> sudo
````

## 禁止root登录

````
nano /etc/ssh/sshd_config
// 找到PermitRootLogin ，设为no
// 保存文件退出，重启服务：
service ssh restart
// OR：
systemctl restart sshd
````                   