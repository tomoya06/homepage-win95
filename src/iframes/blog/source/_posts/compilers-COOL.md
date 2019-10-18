---
title: 斯坦福 编译原理 - COOL语法要点
date: 2018-12-27 14:46:33
tags:
- 编译原理
- 上课
---

学斯坦福的编译原理，大作业是给COOL语言写编译器，所以先总结一下COOL的语法要点。

<!-- more -->

## 运行

* 使用官方的编译器编译运行：

````
coolc [ -o fileout ] file1.cl file2.cl ... filen.cl
spim [-file] file.s
````
## 语法

参见COOL MANUAL官方文档。

## Lexical Structure

### integers

[0-9]*

### type identifiers

[A-Z]letter*

### object identifiers

[a-z]letter*

### special notation

self, SELF_TYPE

### strings

\"(letter | \b | \t | \n | \f)*\"

* A string may not contain EOF. 
* A string may not contain the null (character\0). 

### comments

````
-- a single-line comment
* 
    multi-line 
    comment
* 
````

### keywords

class, else, false, ﬁ, if, in, inherits, isvoid, let, loop, pool, then, while, case, esac, new, of, not, true

* Except for the constants **true** and **false**, keywords are case insensitive. 
* To conform to the rules for other objects, the ﬁrst letter of true and false must be lowercase; the trailing letters may be upper or lower case.

### white space

* blank (ascii 32), 
* \n (newline, ascii 10), 
* \f (form feed, ascii 12), 
* \r (carriage return, ascii 13), 
* \t (tab, ascii 9), 
* \v (vertical tab, ascii 11).
