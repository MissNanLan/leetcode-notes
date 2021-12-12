## 题目地址(821. 字符的最短距离)

https://leetcode-cn.com/problems/shortest-distance-to-a-character/

## 题目描述

```
给你一个字符串 s 和一个字符 c ，且 c 是 s 中出现过的字符。

返回一个整数数组 answer ，其中 answer.length == s.length 且 answer[i] 是 s 中从下标 i 到离它 最近 的字符 c 的 距离 。

两个下标 i 和 j 之间的 距离 为 abs(i - j) ，其中 abs 是绝对值函数。

 

示例 1：

输入：s = "loveleetcode", c = "e"
输出：[3,2,1,0,1,0,0,1,2,2,1,0]
解释：字符 'e' 出现在下标 3、5、6 和 11 处（下标从 0 开始计数）。
距下标 0 最近的 'e' 出现在下标 3 ，所以距离为 abs(0 - 3) = 3 。
距下标 1 最近的 'e' 出现在下标 3 ，所以距离为 abs(1 - 3) = 2 。
对于下标 4 ，出现在下标 3 和下标 5 处的 'e' 都离它最近，但距离是一样的 abs(4 - 3) == abs(4 - 5) = 1 。
距下标 8 最近的 'e' 出现在下标 6 ，所以距离为 abs(8 - 6) = 2 。


示例 2：

输入：s = "aaab", c = "b"
输出：[3,2,1,0]


 

提示：
1 <= s.length <= 104
s[i] 和 c 均为小写英文字母
题目数据保证 c 在 s 中至少出现一次
```

## 前置知识

- charAt()函数

## 公司

- 暂无

## 思路

- 找出 c 的下标的位置，放入到一个数组 tempArr 里面
- 用 tempArr 与 i 相减得到绝对值，与 tempArr 下一个元素作比较，前一个元素比较大，则 tempArr 向后移动一个位置
- 前一个元素小，则不需要动
- 以上思路是参照别人的解法，感觉用两个循环不是很优雅，希望以后还是有自己的想法

## 关键点

- 如何求出两个下标之间的距离（两个下标相减的绝对值）

## 代码

- 语言支持：JavaScript

JavaScript Code:

```javascript
/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function (str, c) {
  var answer = [];
  var tempArr = [];
  var k = 0;
  // 找出 c的下标的位置，放入到一个数组tempArr里面
  for (var i = 0; i < str.length; i++) {
    var s = str.charAt(i);
    if (s === c) tempArr.push(i);
  }
  //  用tempArr与i相减得到绝对值，与tempArr下一个元素作比较，前一个元素比较大，则tempArr向后移动一个位置
  // 前一个元素小，则不需要动
  for (var i = 0; i < str.length; i++) {
    if (
      k < tempArr.length - 1 &&
      Math.abs(tempArr[k] - i) > Math.abs(tempArr[k + 1] - i)
    )
      k++;
    answer.push(Math.abs(tempArr[k] - i));
  }
  return answer;
};
```

**复杂度分析**

令 n 为数组长度。

- 时间复杂度：O(n)
- 空间复杂度：O(n)
