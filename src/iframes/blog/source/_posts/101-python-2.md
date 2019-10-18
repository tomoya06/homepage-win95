---
title: python learning notes 2
date: 2019-01-24 11:05:55
tags:
- Python
- 前端
---

> 高阶特性以后的笔记。
> 当然还有其他python的特性。也是挺有趣的。

<!-- more -->

## 函数式编程

> 函数式编程（英语：functional programming）或称函数程序设计，又称泛函编程，是一种编程典范，它将计算机运算视为数学上的函数计算，并且避免使用程序状态以及易变对象。函数编程语言最重要的基础是λ演算（lambda calculus）。而且λ演算的函数可以接受函数当作输入（引数）和输出（传出值）。来自[维基百科](https://zh.wikipedia.org/zh-cn/%E5%87%BD%E6%95%B8%E7%A8%8B%E5%BC%8F%E8%AA%9E%E8%A8%80)

### 高阶函数

* `map(func, Iterable): Iterator`
* `reduce(func, Iterable): Any`
* `filter(func, Iterable): Iterator`
* 匿名函数/lambda函数: `lambda x,y: x+y`
* `sorted(Iterable[, key=func[, reverse=False]])`

### 返回函数

* 将函数作为返回值
* 闭包
  * 一个例子：
  
返回函数不要引用任何循环变量，或者后续会发生变化的变量。

````
def count():
    fs = []
    for i in range(1, 4):
        def f():
             return i*i
        fs.append(f)
    return fs

f1, f2, f3 = count()
'''
>>> f1()
9
>>> f2()
9
>>> f3()
9
'''
````

如果一定要引用循环变量，方法是再创建一个函数，用该函数的参数绑定循环变量当前的值，无论该循环变量后续如何更改，已绑定到函数参数的值不变：

````
def count():
    def f(j):
        def g():
            return j*j
        return g
    fs = []
    for i in range(1, 4):
        fs.append(f(i)) # f(i)立刻被执行，因此i的当前值被传入f()
    return fs
````

### 可能很方便的函数

````
str.upper()
str.lower()
Iterable[::-1]
````

## 模块

### 标准文件模板

````
#!/usr/bin/env python3
# -*- coding: utf-8 -*-

' a test module '

__author__ = 'Michael Liao'
````

* 第1行和第2行是标准注释，第1行注释可以让这个hello.py文件直接在Unix/Linux/Mac上运行，第2行注释表示.py文件本身使用标准UTF-8编码；
* 第4行是一个字符串，表示模块的文档注释，任何模块代码的第一个字符串都被视为模块的文档注释；
* 第6行使用__author__变量把作者写进去，这样当你公开源代码后别人就可以瞻仰你的大名；

### 模块

* 作用域：
  * 有的函数和变量我们希望仅仅在模块内部使用，是非公开的（private）。在Python中，是通过`_`前缀来实现的。
  * 正常的函数和变量名是公开的（public），可以被直接引用，
  * 类似__xxx__这样的变量是特殊变量，可以被直接引用，但是有特殊用途，

## 枚举类

## 元类

> 以上两点按需查看