## 题目地址(1737. 满足三条件之一需改变的最少字符数)

https://leetcode-cn.com/problems/change-minimum-characters-to-satisfy-one-of-three-conditions/

## 题目描述

```
给你两个字符串 a 和 b ，二者均由小写字母组成。一步操作中，你可以将 a 或 b 中的 任一字符 改变为 任一小写字母 。

操作的最终目标是满足下列三个条件 之一 ：

a 中的 每个字母 在字母表中 严格小于 b 中的 每个字母 。
b 中的 每个字母 在字母表中 严格小于 a 中的 每个字母 。
a 和 b 都 由 同一个 字母组成。

返回达成目标所需的 最少 操作数。

 

示例 1：

输入：a = "aba", b = "caa"
输出：2
解释：满足每个条件的最佳方案分别是：
1) 将 b 变为 "ccc"，2 次操作，满足 a 中的每个字母都小于 b 中的每个字母；
2) 将 a 变为 "bbb" 并将 b 变为 "aaa"，3 次操作，满足 b 中的每个字母都小于 a 中的每个字母；
3) 将 a 变为 "aaa" 并将 b 变为 "aaa"，2 次操作，满足 a 和 b 由同一个字母组成。
最佳的方案只需要 2 次操作（满足条件 1 或者条件 3）。


示例 2：

输入：a = "dabadd", b = "cda"
输出：3
解释：满足条件 1 的最佳方案是将 b 变为 "eee" 。


 

提示：

1 <= a.length, b.length <= 105
a 和 b 只由小写字母组成
```

## 思路

三个条件中， 条件1和条件2其实是一样的， 比如A 中的 每个字母 在字母表中 严格小于 B 中的 每个字母，交换下A和B的位置就可以了。
我们要做的就是枚举所有可能的 A 的最大字母 和 B 的最小字母（其中 A 的最大字母保证严格小于 B 的最大字母），并计算操作数，最后取最小值即可。


## 代码

- 语言支持：JavaScript

JavaScript Code:

```javascript
/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var minCharacters = function (a, b) {
  const m = a.length,
    n = b.length;

  let aa = new Array(26).fill(0);
  let bb = new Array(26).fill(0);

  for (let i = 0; i < m; i++) aa[a.charCodeAt(i) - 97]++;    // 统计a字符串中每个字符出现的次数
  for (let j = 0; j < n; j++) bb[b.charCodeAt(j) - 97]++; // 统计b字符串中每个字符出现的次数

  let ans = m + n;
  let asum = 0,
    bsum = 0;

  for (let i = 0; i < 25; i++) {
    asum += aa[i];
    bsum += bb[i];
    ans = Math.min(
      Math.min(ans, m + n - aa[i] - bb[i]), // 我们只需要将 A 和 B 改为同一个字母，并计算出操作数，取最小值即可
      Math.min(m - asum + bsum, n - bsum + asum)
    );
  }

  console.log(asum)


  return Math.min(ans, m + n - aa[25] - bb[25]);
};
```

**复杂度分析**

令 m, n 分别为数组 A 和数组 B 的长度。

- 时间复杂度：O(m+n)
- 空间复杂度：O(26)
