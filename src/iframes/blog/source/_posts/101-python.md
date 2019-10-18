---
title: python learning notes
date: 2019-01-24 09:42:18
tags:
- Python
- 前端
---

> 廖雪峰python教程学习笔记

<!-- more -->

## 基础

### 数据类型

* 整数
* 浮点数
* 字符串
* 布尔值 `True False` `and or not`
* 空值 `None`

### 计算操作

* 变量/常量：都是直接`a=??`来声明，常量习惯大写，但其实还是变量。
* 除法：
  * `10 / 3 = 3.3333333333333335` 
  * `10 // 3 = 3` 
  * `10 % 3 = 1`

### 字符串

* 字符<->编码：`ord('a')` `chr(97)`
* 字符串格式化：`'Hello, {0}, 成绩提升了 {1:.1f}%'.format('小明', 17.125)` 或 `'Hi, %s, you have $%d.' % ('Michael', 1000000)`
  * 占位符：%d %f %s %x

### 容器结构

#### list / tuple

* list：`classmates = ['Mike', 'John']`
  * length: `len(classmates)`
  * index: `classmates[0] = 'Mike` `classmates[-1] = John`
  * append: `classmates.append('adam')`
  * pop: `classmates.pop()` `classmates.pop(-1)`
  * insert: `list.insert(i, x)`
* tuple: unchangable list `classmates = ('mike', 'john')`

#### dict set

* dict: `d = {'Mike': 10, 'bob': 20, ...}`
  * 获得值：`d['Mike']`
  * 检查key：`key in d`
  * api：`d.keys() d.values() d.items()`
* set: non-repeat list `s = set([1, 1, 2, 3, 4])`

#### 操作

* 【list / tuple】切片：`list[0:2] list[0:-1] list[0::2]`
* 【list / tuple / dict】迭代：`for x in list` `for value in d.values()` `for k, v in d.items()`
  * 判断一个对象是可迭代对象：通过collections模块的Iterable类型判断
  * 对list实现下标循环：`for i, value in enumerate(['A', 'B', 'C']):`
* 【list】列表生成器：`['%d x %d' % (x, x) for x in range(1, 11)]`

### 条件 循环

* if

````
if_stmt ::=  "if" expression ":" suite
             ("elif" expression ":" suite)*
             ["else" ":" suite]
````

* for loop

````
for_stmt ::=  "for" target_list "in" expression_list ":" suite
              ["else" ":" suite]
````

* while loop

````
while_stmt ::=  "while" expression ":" suite
                ["else" ":" suite]
````

### 类型检查

* type: `type(param)` 得到该对象的类型
* isinstance: `isinstance(target, type)` 判断该对象是否是某种类的实例

## 函数

### 定义函数

* 定义

````
def my_abs(x):
    if x >= 0:
        return x
    else:
        return -x
````

* 语法

````
funcdef                 ::=  [decorators] "def" funcname "(" [parameter_list] ")"
                             ["->" expression] ":" suite
decorators              ::=  decorator+
decorator               ::=  "@" dotted_name ["(" [argument_list [","]] ")"] NEWLINE
dotted_name             ::=  identifier ("." identifier)*
parameter_list          ::=  defparameter ("," defparameter)* ["," [parameter_list_starargs]]
                             | parameter_list_starargs
parameter_list_starargs ::=  "*" [parameter] ("," defparameter)* ["," ["**" parameter [","]]]
                             | "**" parameter [","]
parameter               ::=  identifier [":" expression]
defparameter            ::=  parameter ["=" expression]
funcname                ::=  identifier
````

* 空函数：`pass`

### 函数参数

* 位置参数：`def power(a, n)`
* 默认参数：`def power(a, n=2)`
* 可变参数：`def calc(*numbers)` 调用 `calc(1, 2, 3)`
  * 在函数内部，参数numbers接收到的是一个tuple
  * 如果已经有一个list或者tuple，要调用一个可变参数，允许你在list或tuple前面加一个*号，把list或tuple的元素变成可变参数传进去
* 关键字参数：`def person(**kw)` `person('Adam', 45, gender='M', job='Engineer')`
  * 允许你传入0个或任意个含参数名的参数，这些关键字参数在函数内部自动组装为一个dict。
* 命名关键字参数：`def person(name, age, *, city, job)` `person('Jack', 24, city='Beijing', job='Engineer')`
  * 特殊分隔符`*`后面的参数被视为命名关键字参数。
  * 命名关键字参数必须传入参数名，这和位置参数不同。
* 参数组合：参数定义的顺序必须是：位置参数、默认参数、可变参数、命名关键字参数和关键字参数。

### 递归函数

* 递归
* 尾递归优化

### 高级特性

#### 生成器 (generator)
  
* 生成方式：
  * `(x*x for x in range(10))`
  * 包含`yield`的函数

````
def fib(max):
    n, a, b = 0, 0, 1
    while n < max:
        yield b
        a, b = b, a + b
        n = n + 1
    return 'done'
````

* 特性：生成器也是一个可迭代类，可通过调用`next(g)`或在`for n in g`使用来不断得到下一步结果。
* JS中也有generator的实现，即`function* yield`。详见[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*)

#### 迭代器 (Iterator)

* 凡是可作用于for循环的对象都是Iterable类型；
* 集合数据类型如list、dict、str等是Iterable但不是Iterator
* 可以通过`iter()`获得一个Iterator对象。
* 可以通过`list()`将Iterator 转换成 Iterable