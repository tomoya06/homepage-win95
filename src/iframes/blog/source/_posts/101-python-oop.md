---
title: python learning notes - oop
date: 2019-01-24 09:42:18
tags:
- Python
- 前端
---

> 面向对象之类的。重点。

<!-- more -->

## 面向对象编程

* 面向过程：面向过程的程序设计把计算机程序视为一系列的命令集合，即一组函数的顺序执行。为了简化程序设计，面向过程把函数继续切分为子函数，即把大块函数通过切割成小块函数来降低系统的复杂度。
* 面向对象：面向对象的程序设计把计算机程序视为一组对象的集合，而每个对象都可以接收其他对象发过来的消息，并处理这些消息，计算机程序的执行就是一系列消息在各个对象之间传递。

e.g.
````
class Student(object):
    def _is_init__(self, name, score):
        self.name = name
        self.score = score

    def print_score(self):
        print('%s: %s' % (self.name, self.score))
````
## 类和实例

> 面向对象最重要的概念：类（Class）和实例（Instance）

````
class Student(object):
    pass
bart = Student()
# 可以自由地给一个实例变量绑定属性
bart.name = 'Bart Simpson'
````
* 带构造函数的类声明

````
class Student(object):
    def __init__(self, name, score):
        self.name = name
        self.score = score
````

注意到__init__方法的第一个参数永远是`self`，但创建实例时不需要为self赋值

* 声明其他方法

````
# Follow last code block
    def print_score(self):
        print('%s: %s' % (self.name, self.score))
````

注意到第一个参数还是`self`

> 为什么在每个类方法定义中都要带第一个`self`参数的讨论：在实际运行时，解释器会把`obj.func(arg1, arg2)`转换为`Cla.func(obj, arg1, arg2)`。当然python也可以像其他语言的`this`那样把`self`当作内置属性，但这与python的设计理念不符，即*"Explicit is better than implicit."* (笑

## 访问限制

* 通过给属性名添加双下划线的方式，可以将该属性变成私有属性。如：

````
class Student:
    def __init__(self, name, gender):
        self.__name = name
        self.__gender = gender
    def get_gender(self):
        return self.__gender
````

> 注意，私有化的原理是把`__gender`属性对外改成了`_Student__gender`属性，所以实际上还是可以直接通过后者来读写这个属性。当然这是不建议的。
> 若外部直接读写`__gender`属性，将会给该实例新添一个`__gender`属性，与类声明的`__gender`不是同一个指向。
> 私有化全靠自觉= =

## 继承

类声明时，类名后括号引用父类

````
class Animal(Object):
    # ...
````

## 多态

一个实例同时属于多个类。类继承可以引起多态出现。

> Python是动态语言，类型检测采用**鸭子类型**检测。JS也是。

## 获取对象信息

* 类型检查：`type()`和`isinstance()`。后者检查继承类型时比较方便
* 获得对象的所有属性和方法：`dir(obj)` 
* `hasattr(obj, namestr)`
* `setattr(obj, namestr, val)`
* `getattr(obj, namestr)`

## 类属性

````
class Student:
    number = 0
    # ...
    def a_func():
        Student.number += 1 # 读写类属性
# ...

print(Student.number) # 读写类属性
````

注意同名属性时，实例属性会屏蔽类属性。

## 特殊属性/双下划线开头属性

### __slots__

用于限制该类属性数量。

````
class Student:
    __slots__ = ('prop1', 'prop2')
````

### __str__ __repr__

`__str__()`返回用户看到的字符串，而__repr__()返回程序开发者看到的字符串，也就是说，`__repr__()`是为调试服务的。可以在定义完`__str__`之后简单定义：`__repr__ = __str__`

### __iter__ __next__

如果一个类想被用于`for ... in`循环，类似list或tuple那样，就必须实现一个`__iter__()`方法，该方法**返回一个迭代对象**，然后，Python的`for`循环就会不断**调用该迭代对象**的`__next__()`方法拿到循环的下一个值，直到遇到StopIteration错误时退出循环。

````
class Fib(object):
    def __init__(self):
        self.a, self.b = 0, 1 # 初始化两个计数器a，b

    def __iter__(self):
        return self # 实例本身就是迭代对象，故返回自己

    def __next__(self):
        self.a, self.b = self.b, self.a + self.b # 计算下一个值
        if self.a > 100000: # 退出循环的条件
            raise StopIteration()
        return self.a # 返回下一个值

for n in Fib():
    print(n)
        
````

`for … in… `这个语句其实做了两件事。第一件事是获得一个可迭代器，即调用了`__iter__()`函数。 第二件事是循环的过程，循环调用`__next__()`函数。

### __getitem__

### __getattr__

e.g. 一个动态调用API的方法

````
class Chain(object):

    def __init__(self, path=''):
        self._path = path

    def __getattr__(self, path):
        return Chain('%s/%s' % (self._path, path))

    def __str__(self):
        return self._path

    __repr__ = __str__

# >>> Chain().status.user.timeline.list
# '/status/user/timeline/list'
# >>> Chain().users('michael').repos
# '/users/michael/repos'
````

### __call__

直接把实例当作方法来调用

## getter / setter 优化：使用装饰器@property

````
class Student(object):

    # read-write property with @score.setter
    @property
    def score(self):
        return self._score

    @score.setter
    def score(self, value):
        if not isinstance(value, int):
            raise ValueError('score must be an integer!')
        if value < 0 or value > 100:
            raise ValueError('score must between 0 ~ 100!')
        self._score = value

    # read-only property
    @property
    def age(self):
        return 2015 - self._birth
````

之后可以直接通过`student1.score` `student1.score = 1` 的方式来读写属性

## 多重继承

Python支持多重继承。通过继承多个Mixin类来给某个类添加功能，方便有效。

````
class Dog(Mammal, RunnableMixIn, CarnivorousMixIn):
    pass
````

> 多重继承在遇到多个父类有同名属性/方法时，选择优先级按照拓扑排序顺序选择。可参考[这篇博客](https://kevinguo.me/2018/01/19/python-topological-sorting/)