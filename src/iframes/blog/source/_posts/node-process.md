---
title: Node child_process
date: 2019-01-08 20:24:22
tags:
- 前端
- Node
---

> Nodejs进程相关

<!-- more -->

## 提示

child_process.exec() 和 child_process.execFile() 之间的区别会因平台而不同。 在类 Unix 操作系统（Unix、 Linux、 macOS）上，child_process.execFile() 效率更高，因为它不需要衍生 shell。 但在 Windows 上，.bat 和 .cmd 文件在没有终端的情况下是不可执行的，因此不能使用 child_process.execFile() 启动。 可以使用设置了 shell 选项的 child_process.spawn()、或使用 child_process.exec()、或衍生 cmd.exe 并将 .bat 或 .cmd 文件作为参数传入（也就是 shell 选项和 child_process.exec() 所做的工作）。 如果脚本文件名包含空格，则需要加上引号。

## 创建方法

child_process库中创建进程的方法有

### child_process.exec(command[, options][, callback])

衍生一个 shell 并在 shell 中执行 command，并缓冲产生的输出。 command 会被 shell 直接执行，所以 command 中的特殊字符（因shell而异）需要相应的处理。

### child_process.execFile(file[, args][, options][, callback])

与 child_process.exec() 类似，除了默认不衍生 shell。 可执行的 file 会被直接衍生为一个新进程，这使得它比 child_process.exec() 更高效。

因为没有衍生 shell，所以不支持 I/O 重定向或文件查找等功能。

### child_process.fork(modulePath[, args][, options])

child_process.fork() 是 child_process.spawn() 的一个特殊情况，用于专门衍生新的 Node.js 进程。 返回的 ChildProcess 有一个额外的内置通信通道，允许消息在父进程和子进程之间来回传递。

衍生的 Node.js 子进程与两者之间建立的 IPC 通信信道的异常是独立于父进程的。 每个进程都有自己的内存，使用自己的 V8 实例。 由于需要额外的资源分配，因此不建议衍生大量的 Node.js 进程。

默认情况下，child_process.fork() 会使用父进程中的 process.execPath 衍生新的 Node.js 实例。 options 的 execPath 可以指定要使用的可执行文件。

### child_process.spawn(command[, args][, options])

使用 command 和 args 衍生进程。

## 通信方式

详见[此博客](http://www.ayqy.net/blog/nodejs%E8%BF%9B%E7%A8%8B%E9%97%B4%E9%80%9A%E4%BF%A1/)

### 通过stdin/stdout传递json

进程不能完全独立，要能达到对方进程的ChildProcess实例。

### 原生IPC支持

如spawn()及fork()的例子，进程之间可以借助内置的IPC机制通信。

### sockets通信

### message queue

### Redis