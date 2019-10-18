---
title: TypeScript学习笔记
date: 2018-12-27 14:11:36
tags:
- TypeScript
- 前端
---

还是面向对象舒服。

按照[TypeScript中文网](https://www.tslang.cn/docs/handbook/basic-types.html)的手册指南来看的。下面的笔记也按照指南目录的顺序。

<!-- more -->

## 基础类型

基本数据类型和js差不多。补充几点：

* 布尔值boolean
* 浮点数number。TS里面所有数字都是浮点数。
* 字符串string
* 数组type[]或`Array<type>`
* 元组tuple：`let x: [string, number]; x = ['good', 120]; `，类似于Python的dict
* 枚举enum：`enum Color {Red, Green, Blue}; let c: Color = Color.Green; `
  * 默认从0编号。手动编号：`enum Color {Red=1, Green, Blue}` or `enum Color {Red=1, Green=3, Blue=4}`
* 任意类型Any：`let notSure: any = 4; notSure = false; // can change 'notSure' to any other types`
* Void Never
* Null Undefined
* Object
* Symbol
* 类型断言：强制类型转换，`let strLength: number = (<string>someValue).length;` or `let strLength: number = (someValue as string).length;`

## 变量声明

`var let const`的区别。鼓励使用`let const`

* `let const`的作用域：词法作用域或块作用域，
* 解构

## 接口

> TypeScript的核心原则之一是对值所具有的结构进行类型检查<-你也是鸭子辨型法

````
interface Animal() {
    name: string;  // 常规定义
    color?: string;  // 可选属性
    readonly feet: number;  // 只读属性
}
````

* readonly vs const: 最简单判断该用readonly还是const的方法是看要把它做为变量使用还是做为一个属性。 做为变量使用的话用const，若做为属性则使用readonly。
* 只读属性赋值给其他变量：`a = ro as number[];`
* 接口继承接口：`interface Square extends Shape, OtherInterface`
* 混合类型
* 接口继承类

## 类

````
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter("world");
````

* 类继承类：`class Dog extends Animal`
* 修饰符：`public private protected` `readonly` 
* getter/setter
* 静态属性：`static`，在类本身的属性。
* 抽象类：`abstract`，有抽象类和抽象方法。

````
class Employee {
    private _fullName: string;

    get fullName(): string {
        return this._fullName;
    }

    set fullName(newName: string) {
        if (passcode && passcode == "secret passcode") {
            this._fullName = newName;
        }
        else {
            console.log("Error: Unauthorized update of employee!");
        }
    }
}
````

## 函数

* 函数类型/参数类型/(省略)推断类型
* 可选参数/默认参数/剩余参数
* 重载

````
function pickCard(x: {suit: string; card: number; }[]): number;
function pickCard(x: number): {suit: string; card: number; };
function pickCard(x): any {
    // ...
}
````

## 泛型

## 高级类型

* 交叉类型：`let a: T & U`
* 链和类型：`let a: T | U`

## 迭代器和生成器

````
let list = [4, 5, 6];

for (let i in list) {
    console.log(i); // "0", "1", "2",
}

for (let i of list) {
    console.log(i); // "4", "5", "6"
}
````

## 模块和命名空间

直接看原文吧