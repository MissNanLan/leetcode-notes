## 题目地址(3. 无重复字符的最长子串)

https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/

## 题目描述

```
给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。

 

示例 1:

输入: s = "abcabcbb"
输出: 3
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。


示例 2:

输入: s = "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。


示例 3:

输入: s = "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。


示例 4:

输入: s = ""
输出: 0


 

提示：

0 <= s.length <= 5 * 104
s 由英文字母、数字、符号和空格组成
```

## 前置知识

-

## 公司

- 暂无

## 思路

- hashMap

## 关键点

-

## 代码

- 语言支持：JavaScript

JavaScript Code:

```javascript
/**
 * @param {string} s
 * @return {number}
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (str) {
  let myMap = new Map();
  let maxLen = 0,
    len = str.length;

  for (let i = 0, j = 0; j < len; j++) {
    if (myMap.has(str.charAt(j))) {
      i = Math.max(myMap.get(str.charAt(j)), i);
    }
    maxLen = Math.max(maxLen, j - i + 1);
    myMap.set(str.charAt(j), j + 1);
  }
  return maxLen;
};
```

**复杂度分析**

令 n 为数组长度。

- 时间复杂度：$O(n)$
- 空间复杂度：$O(n)$
