---
title: Solidity 语法学习笔记
date: 2018-12-13 00:54:52
tags:
- 课外
- 毕业设计
- 区块链
---

<!-- more -->

## 基本语法

1. `[type] [prop] [var name]` : 声明变量
 * 常用变量类型：
   * `struct`
   * `address`
   * `uint bool bytes32`
2. `mapping([var] => [type]) [prop] [var name];`：映射声明。注意不管如何操作，每个地址都是有他的映射值的，
3. `constructor([type] [args]) [prop] {}`：构造函数
4. `function [constract name]() public {}`：构造函数
5. `event [event name]([type] [args])`：事件注册。轻客户端可以通过事件针对变化作出高效的反应。`emit [event name]([args]);`触发事件。
6. `require([condition], [error msg string]);`：条件检查。condition为false时函数终止执行并返回error msg。