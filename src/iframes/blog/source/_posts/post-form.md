---
title: 常见POST提交数据方式
date: 2019-03-06 14:02:10
tags:
- 前端
- HTML
- JavaScript
---

> 原文来自于[本篇博客](https://imququ.com/post/four-ways-to-post-data-in-http.html)

比较几种常见POST提交数据的方式

## application/x-www-form-urlencoded

最常见，浏览器的原生 `<form>` 表单，如果不设置 `enctype` 属性，那么最终就会以 application/x-www-form-urlencoded 方式提交数据；另外，用 Ajax 提交数据时，也是使用这种方式。例如 JQuery 和 QWrap 的 Ajax，Content-Type 默认值都是「application/x-www-form-urlencoded;charset=utf-8」。

## multipart/form-data

也很常见。使用表单上传文件时，必须让 `<form>` 表单的 `enctype` 等于 multipart/form-data。一般用来上传文件.

> 上面提到的这两种 POST 数据的方式，都是浏览器原生支持的，而且现阶段标准中原生 `<form>` 表单也只支持这两种方式（通过 `<form>` 元素的 `enctype` 属性指定，默认为 application/x-www-form-urlencoded。其实 enctype 还支持 text/plain，不过用得非常少）。