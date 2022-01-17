
## 题目地址(69. Sqrt(x))

https://leetcode-cn.com/problems/sqrtx/

## 题目描述

```
给你一个非负整数 x ，计算并返回 x 的 算术平方根 。

由于返回类型是整数，结果只保留 整数部分 ，小数部分将被 舍去 。

注意：不允许使用任何内置指数函数和算符，例如 pow(x, 0.5) 或者 x ** 0.5 。

 

示例 1：

输入：x = 4
输出：2


示例 2：

输入：x = 8
输出：2
解释：8 的算术平方根是 2.82842..., 由于返回类型是整数，小数部分将被舍去。


 

提示：

0 <= x <= 231 - 1
```

## 前置知识

- 

## 公司

- 暂无

## 思路

## 关键点

-  

## 代码

- 语言支持：JavaScript

JavaScript Code:

```javascript

var mySqrt = function (x) {
  let l = 0,
    r = x,
    ans = -1;
  while (l <= r) {
    const mid = Math.floor((l+r)/2)

    if (mid * mid <= x) {
      ans = mid;
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return ans;
};

```


**复杂度分析**

令 n 为数组长度。

- 时间复杂度：O(logn)
- 空间复杂度：O(1)


