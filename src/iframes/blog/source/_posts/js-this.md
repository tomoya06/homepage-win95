---
title: 【翻译】理解JS的函数调用和‘this’的指向 / Understanding JavaScript Function Invocation and "this"
date: 2019-01-28 00:22:35
tags:
- JavaScript
- 前端
---

> 原文出自Yehuda的[这篇博客](https://yehudakatz.com/2011/08/11/understanding-javascript-function-invocation-and-this/)，是在Typescript的中文教程里看到的。

<!-- more -->

JS的函数调用一直以来给不少人带来疑惑，其中`this`的语义是人们抱怨的最多的。

在我看来，首先理解了函数调用的原始核心语法，然后弄清楚其他调用函数的语法糖，这些疑惑就能解决了。实际上这正式ECMA规范所设计的思路。在某种程度上，这篇文章是ECMA规范的简化版，不过基本理念都是一样的。

## 核心源码

首先来看JS函数调用的核心，`Function`类的`call`方法【1】。`call`方法的逻辑很直白：

1. 把从第二个起的所有参数放进一个参数列表，如`argList`中
2. 把第一个参数定为`thisValue`
3. 执行`function`，把`this`指向`thisValue`，`argList`作为参数列表

例如：

````
function hello(thing) {
    console.log(this + " says hello " + thing);
}

hello.call("Yehuda", "world") //=> Yehuda says hello world
````

可以看到，在执行`hello`函数时我们把`this`指向`"Yehuda"`，传入单个参数`"world"`。这就是JS函数调用的核心源码。你可以把其他的函数调用的语法都看成是这个源码的语法糖。

> 【1】在[ES5规范](http://es5.github.io/#x15.3.4.4)中，`call`还是另一个更低层次的源码的语法糖，但包装得并不复杂，所以在这里直接简化了。文末有更多资料。

## 简单的函数调用

显然每次都用`call`来调用函数太累赘了。JS允许我们直接使用括号来调用函数，如`hello("world")`，这个就是一个语法糖了：

````
function hello(thing) {
  console.log("Hello " + thing);
}

// this:
hello("world")

// desugars to:
hello.call(window, "world");
````

在ES5的严格模式(strict mode)下，有一点小小的改动：【2】

````
// this:
hello("world")

// desugars to:
hello.call(undefined, "world");
````

所以简单来讲，通过括号的函数调用`fn(...args)`等价于`fn.call(window [ES5-strict: undefined], ...args)`。

要注意这对匿名函数来讲也是成立的：`(function() {})()`等价于`(function() {}).call(window [ES5-strict: undefined)`

> 【2】实际上原作者说他撒了个小谎。ES5规范说的是给`thisValue`所绑定的几乎都是`undefined`（The ECMAScript 5 spec says that undefined is (almost) always passed），但他认为不在严格模式时`thisValue`应该绑定到`global`对象。*This allows strict mode callers to avoid breaking existing non-strict-mode libraries.*

## 成员函数

另一个常见的场景是调用一个对象的成员函数，如`person.hello()`。这时候函数调用的语法糖分析如下：

````
var person = {
  name: "Brendan Eich",
  hello: function(thing) {
    console.log(this + " says hello " + thing);
  }
}

// this:
person.hello("world")

// desugars to this:
person.hello.call(person, "world");
````

要注意，无论`hello`函数是如何添加到这个对象的，效果都是一样的，记得事先声明一个独立的`hello`函数即可。现在来看下把`hello`函数动态添加到某个对象，调用起来是什么效果：

````
function hello(thing) {
  console.log(this + " says hello " + thing);
}

person = { name: "Brendan Eich" }
person.hello = hello;

person.hello("world") // still desugars to person.hello.call(person, "world")

hello("world") // "[object DOMWindow]world"
````

注意到函数对`this`的指向不是恒定不变的，每次都是根据调用函数方法的不同来执行不同的绑定。

## 使用`Function.prototype.bind`

有时候会想让一个函数始终保持相同的`this`指向，开发者会使用闭包来实现这个目的：

````
var person = {
  name: "Brendan Eich",
  hello: function(thing) {
    console.log(this.name + " says hello " + thing);
  }
}

var boundHello = function(thing) { 
    return person.hello.call(person, thing); 
}

boundHello("world");
````

尽管`boundHello("world")`最终会解析成`boundHello.call(window, "world")`，但之前的操作已经把`this`绑定回我们想要的对象了。

我们还可以把这样的转换封装成通用模块：

````
var bind = function(func, thisValue) {
  return function() {
    return func.apply(thisValue, arguments);
  }
}

var boundHello = bind(person.hello, person);
boundHello("world") // "Brendan Eich says hello world"
````

要理解这段代码，你只需直到另外两个信息：首先，`arguments`是一个类数组对象，表示所有传给这个函数的对象；其次，`apply`的作用和`call`类似，但前者一次接收一个类数组对象作为传参，后者接收多个参数。

这里的`bind`函数简单返回一个新的函数。在调用`bind()`时，它又会调用之前传参进去的函数，并且把后者的`this`绑定到第二个参数。

因为这种用法也很常见，所以ES5引入了一个新的方法`bind`，适用于所有`Function`类对象，效果如下：

````
var boundHello = person.hello.bind(person);
boundHello("world") // "Brendan Eich says hello world"
````

如果你需要写一个（带有`this`，但其指向有特定需要的）回调函数，这种写法就很有用：

````
var person = {
  name: "Alex Russell",
  hello: function() { console.log(this.name + " says hello world"); }
}

$("#some-div").click(person.hello.bind(person));

// when the div is clicked, "Alex Russell says hello world" is printed
````

当然这种写法还是有点拗手。TC39（ECMAScript标准制定委员会）还在努力寻找一种更优雅的解决方案。

## jQuery

> 本段不做翻译。

## 后记（编者作）

有好几处的描述我对原本的规范描述做了简化，其中最关键的一点是我把`func.call`称为源码（primitive）。实际上在规范里，`function.call`和`[obj.]func()`还有更深一层的原源码。

但来看一下ES5标准中`func.call`的声明（译者：即ES5标准里`Function.prototype.call (thisArg [ , arg1 [ , arg2, … ] ] ) `的描述）：

1. 如果`IsCallable(func)`为`false`，抛出`TypeError`错误
2. 将`argList`初始化为空数组
3. 如果这个函数传入了多个参数，将这些参数从左往右加入到`argList`，从`arg1`开始标记
4. 返回调用`func`内置方法`[[call]]`的结果，调用时把`thisArg`赋给`this`，传入`argList`作为参数队列

可以看到，这只是一段很简单的绑定到`[[call]]`操作的JS代码。

如果你去看调用函数的定义，头7步都是在初始化`thisValue`和`argList`，最后一步是“返回调用`func`内置方法`[[call]]`的结果，调用时把`thisArg`赋给`this`，传入`argList`作为参数队列（*Return the result of calling the [[Call]] internal method on func, providing thisValue as the this value and providing the list argList as the argument values.*）”

一旦`argList`和`thisValue`准备好之后，之后的工作原理都是一样的了。

所以我偷了个小懒，但我把ES5规范里的描述都拎出来了，他们的意义都是一样的。

还有一些其他用法，比如跟`with`相关的用法，在这里我没有涉及。