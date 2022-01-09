## 题目地址(997. 找到小镇的法官)

https://leetcode-cn.com/problems/find-the-town-judge/

## 题目描述

```
在一个小镇里，按从 1 到 n 为 n 个人进行编号。传言称，这些人中有一个是小镇上的秘密法官。

如果小镇的法官真的存在，那么：

小镇的法官不相信任何人。
每个人（除了小镇法官外）都信任小镇的法官。
只有一个人同时满足条件 1 和条件 2 。

给定数组 trust，该数组由信任对 trust[i] = [a, b] 组成，表示编号为 a 的人信任编号为 b 的人。

如果小镇存在秘密法官并且可以确定他的身份，请返回该法官的编号。否则，返回 -1。

 

示例 1：

输入：n = 2, trust = [[1,2]]
输出：2


示例 2：

输入：n = 3, trust = [[1,3],[2,3]]
输出：3


示例 3：

输入：n = 3, trust = [[1,3],[2,3],[3,1]]
输出：-1


示例 4：

输入：n = 3, trust = [[1,2],[2,3]]
输出：-1


示例 5：

输入：n = 4, trust = [[1,3],[1,4],[2,3],[2,4],[4,3]]
输出：3

 

提示：

1 <= n <= 1000
0 <= trust.length <= 104
trust[i].length == 2
trust[i] 互不相同
trust[i][0] != trust[i][1]
1 <= trust[i][0], trust[i][1] <= n
```

## 前置知识

- 图

## 公司

- 暂无

## 思路

 <!-- 此题可以转换为   求图中入度（或出度）为 n - 1 并且出度（或入度）为 0 -->

## 代码

- 语言支持：JavaScript

JavaScript Code:

```javascript
/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
  const G = new Array(n).fill(0);

  for (const [fr, to] of trust) {
    G[fr - 1]--;
    G[to - 1]++;
  }
  console.log(G);
  const target = G.indexOf(n - 1);
  console.log(target);
  return target !== -1 ? target + 1 : target;
};
```

**复杂度分析**

令 n 为数组长度。

- 时间复杂度：O(n)
- 空间复杂度：O(n)
