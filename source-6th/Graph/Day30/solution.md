
## 题目地址(886. 可能的二分法)

https://leetcode-cn.com/problems/possible-bipartition/

## 题目描述

```
给定一组 N 人（编号为 1, 2, ..., N）， 我们想把每个人分进任意大小的两组。

每个人都可能不喜欢其他人，那么他们不应该属于同一组。

形式上，如果 dislikes[i] = [a, b]，表示不允许将编号为 a 和 b 的人归入同一组。

当可以用这种方法将所有人分进两组时，返回 true；否则返回 false。

 

示例 1：

输入：N = 4, dislikes = [[1,2],[1,3],[2,4]]
输出：true
解释：group1 [1,4], group2 [2,3]


示例 2：

输入：N = 3, dislikes = [[1,2],[1,3],[2,3]]
输出：false


示例 3：

输入：N = 5, dislikes = [[1,2],[2,3],[3,4],[4,5],[1,5]]
输出：false


 

提示：

1 <= N <= 2000
0 <= dislikes.length <= 10000
dislikes[i].length == 2
1 <= dislikes[i][j] <= N
dislikes[i][0] < dislikes[i][1]
对于 dislikes[i] == dislikes[j] 不存在 i != j
```

## 前置知识

- 

## 公司

- 暂无

## 思路

## 关键点

- 二分图

- 染色法

- 图的建立和遍历

- colors 数组


## 代码

- 语言支持：JavaScript

JavaScript Code:

```javascript

/**
 * @param {number} n
 * @param {number[][]} dislikes
 * @return {boolean}
 */
 var possibleBipartition = function(n, dislikes) {
    
    const graph = [...new Array(n)].map(() => new Array())
    const colors = new Array(n).fill(0)
  
    // build dislikes graph
    for (const d of dislikes) {
      const [a, b] = d
      graph[a - 1][b - 1] = 1
      graph[b - 1][a - 1] = 1
    }
  
    // colors 存储 N 个人的分组情况
     for (let i = 0; i < n; i++) {
        // 0 表示未分组
      if (colors[i] === 0 && !dfs(i, 1)) {
        return false
      }
    }
    console.log('colors',colors)
  
    return true
  
  // dfs的功能就是根据colors和graph分配组，true表示可以分，false表示不可以
    function dfs(i, targetColor) {
      colors[i] = targetColor
      for (let j = 0; j < n; j++) {
        if (graph[i][j] === 1) {
          if (colors[j] === targetColor) {
            return false
          }
            // 其中j 表示当前是第几个人
          if (colors[j] === 0 && !dfs(j, -targetColor)) {
            return false
          }
        }
      }
      return true
    }
 };
  
// 0 表示未分组

// 1 表示分组 1

// -1 表示分组 2
 console.log(possibleBipartition(4,[[1,2],[1,3],[2,4]]))
```


**复杂度分析**

另外 V 和 E 分别为图中的点和边的数目

- 时间复杂度：$O(V+E)$
- 空间复杂度：$O(V^2)$


### TODO: 染色法还是有点不太明白



