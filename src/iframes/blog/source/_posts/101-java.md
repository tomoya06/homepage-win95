---
title: 101-java
date: 2019-02-19 11:45:26
tags:
- Java
- 前端
- OOP
---

> 还是Java吧。CPP太操蛋了。

<!-- more -->

## 数据类型

### 基本数据类型

| 类型 | 占位 | 默认值|
|----|-----| ---|
| byte      | 8  | 0  
| short     | 16 | 0
| char      | 16 | 
| int       | 32 | 0
| long      | 64 | 0L
| float     | 32 | 0.0f
| double    | 64 | 0.0d
| boolean   | 1  | false

* 常量：`final double PI = 3.14159`
* 类型转换：上表从byte ~ double等级从低到高。
  * 低转高不损失精度，浮点转整数直接舍弃小数，直接`long1 = int1`
  * 高转低要强制类型转换，`byte1 = (byte)int1`
  * boolean不能类型转换

### 变量类型

* 类变量/静态变量
  * 在类中以static关键字声明，但必须在方法构造方法和语句块之外
  * 无论一个类创建了多少个对象，类只拥有类变量的一份拷贝。
  * 静态变量除了被声明为常量外很少使用。常量是指声明为public/private，final和static类型的变量。常量初始化后不可改变。
* 实例变量
  * 声明在一个类中，但在方法、构造方法和语句块之外；
  * 实例变量具有默认值
  * 实例变量可以直接通过变量名访问。但在静态方法以及其他类中，就应该使用完全限定名：`ObejectReference.VariableName`。
* 局部变量
  * 声明在方法、构造方法或者语句块中；
  * 局部变量没有默认值，所以局部变量被声明后，必须经过初始化，才可以使用。

````
public class Employee{
   // 这个实例变量对子类可见
   public String name;
   // 私有变量，仅在该类可见
   private double salary;
   //在构造器中对name赋值
   public Employee (String empName){
      // 局部变量age
      // int age; 会报错
      int age = 10
      age = age + 7;
      name = empName;
   }
}
````

### 修饰符

* 访问修饰符：public / private / (default) / private
* 继承规则
  * 父类中声明为 public 的方法在子类中也必须为 public。
  * 父类中声明为 protected 的方法在子类中要么声明为 protected，要么声明为 public，不能声明为 private。
  * 父类中声明为 private 的方法，不能够被继承。
* 非访问修饰符
  * static 修饰符，用来修饰类方法和类变量。
  * final 修饰符，用来修饰类、方法和变量，final 修饰的类不能够被继承，修饰的方法不能被继承类重新定义，修饰的变量为常量，是不可修改的。
  * abstract 修饰符，用来创建抽象类和抽象方法。
  * synchronized 和 volatile 修饰符，主要用于线程的编程。

## 基本语法

都差不多的

* 增强for：

````
public class Test {
   public static void main(String args[]){
      int [] numbers = {10, 20, 30, 40, 50};
 
      for(int x : numbers ){
         System.out.print( x );
         System.out.print(",");
      }
````

* switch：必须break

