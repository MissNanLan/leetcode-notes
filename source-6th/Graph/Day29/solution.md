
## 题目地址(997. 找到小镇的法官)

https://leetcode-cn.com/problems/find-the-town-judge/

## 题目描述

```
小镇里有 n 个人，按从 1 到 n 的顺序编号。传言称，这些人中有一个暗地里是小镇法官。

如果小镇法官真的存在，那么：

小镇法官不会信任任何人。
每个人（除了小镇法官）都信任这位小镇法官。
只有一个人同时满足属性 1 和属性 2 。

给你一个数组 trust ，其中 trust[i] = [ai, bi] 表示编号为 ai 的人信任编号为 bi 的人。

如果小镇法官存在并且可以确定他的身份，请返回该法官的编号；否则，返回 -1 。

 

示例 1：

输入：n = 2, trust = [[1,2]]
输出：2


示例 2：

输入：n = 3, trust = [[1,3],[2,3]]
输出：3


示例 3：

输入：n = 3, trust = [[1,3],[2,3],[3,1]]
输出：-1

 

提示：

1 <= n <= 1000
0 <= trust.length <= 104
trust[i].length == 2
trust 中的所有trust[i] = [ai, bi] 互不相同
ai != bi
1 <= ai, bi <= n
```

## 前置知识

- 



## 思路

 此题可以转换为   求图中入度（或出度）为 n - 1 并且出度（或入度）为 0

## 关键点

-  

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
  var in_degree = new Array(n+1).fill(0);
  var out_degree = new Array(n+1).fill(0);
  for (const [fr, to] of trust) {
    out_degree[fr]++
    in_degree[to]++;
    console.log(out_degree)
    console.log(in_degree)
  }


  for (let i = 1; i <=n; i++) { 
    if (in_degree[i] === n-1 && out_degree[i] === 0) { 
      return i
    }
  }

  return -1

}


```


**复杂度分析**

令 n 为数组长度。

- 时间复杂度：$O(n)$
- 空间复杂度：$O(n)$


