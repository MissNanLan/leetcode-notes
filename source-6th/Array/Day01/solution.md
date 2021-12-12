## 题目地址(989. 数组形式的整数加法)

https://leetcode-cn.com/problems/add-to-array-form-of-integer/

## 题目描述

```
对于非负整数 X 而言，X 的数组形式是每位数字按从左到右的顺序形成的数组。例如，如果 X = 1231，那么其数组形式为 [1,2,3,1]。

给定非负整数 X 的数组形式 A，返回整数 X+K 的数组形式。

 

示例 1：

输入：A = [1,2,0,0], K = 34
输出：[1,2,3,4]
解释：1200 + 34 = 1234


示例 2：

输入：A = [2,7,4], K = 181
输出：[4,5,5]
解释：274 + 181 = 455


示例 3：

输入：A = [2,1,5], K = 806
输出：[1,0,2,1]
解释：215 + 806 = 1021


示例 4：

输入：A = [9,9,9,9,9,9,9,9,9,9], K = 1
输出：[1,0,0,0,0,0,0,0,0,0,0]
解释：9999999999 + 1 = 10000000000


 

提示：

1 <= A.length <= 10000
0 <= A[i] <= 9
0 <= K <= 10000
如果 A.length > 1，那么 A[0] != 0
```

## 前置知识

- 数组

## 思路

1、逐位相加法，逐位数字相加在一起，遇到相加等于 10 的时候要进位，把进位的 1 加入到下一位计算中

2、将整个加数 k 加数加入数组表示数的最低位(简单点)

## 关键点

- 要考虑进位的情况， 比如 num=[3,6,9]，n=45
- 要考虑 n>num 的长度 的情况，比如 num=[3,6]，n=789

## 代码

- 语言支持：JavaScript

JavaScript Code:

### 解法 1 逐位相加法

```javascript
/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */

var addToArrayForm = function (n, k) {
  var res = [];
  for (var i = n.length - 1; i >= 0; --i) {
    var sum = n[i] + (k % 10);
    k = Math.floor(k / 10);
    // 如果相加大于10，则进位，把进位的1加入到下一位计算中
    if (sum >= 10) {
      k++;
      sum = sum % 10;
    }
    res.push(sum);
  }
  // 如果n>num的长度
  for (; k > 0; k = Math.floor(k / 10)) {
    res.push(k % 10);
  }

  return res.reverse();
};
```

### 解法 2 将整个加数 k 加数加入数组表示数的最低位

```javascript
/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function (num, k) {
  const res = [];
  const n = num.length;
  for (let i = n - 1; i >= 0 || k > 0; --i, k = Math.floor(k / 10)) {
    if (i >= 0) {
      k += num[i];
    }
    res.push(k % 10);
  }
  res.reverse();
  return res;
};
```

**复杂度分析**

令 n 为数组长度。

- 时间复杂度：$O(max(n,logk))$
- 空间复杂度：$O(n)$
