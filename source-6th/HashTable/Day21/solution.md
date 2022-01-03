
## 题目地址(447. 回旋镖的数量)

https://leetcode-cn.com/problems/number-of-boomerangs/

## 题目描述

```
给定平面上 n 对 互不相同 的点 points ，其中 points[i] = [xi, yi] 。回旋镖 是由点 (i, j, k) 表示的元组 ，其中 i 和 j 之间的距离和 i 和 k 之间的欧式距离相等（需要考虑元组的顺序）。

返回平面上所有回旋镖的数量。

 

示例 1：

输入：points = [[0,0],[1,0],[2,0]]
输出：2
解释：两个回旋镖为 [[1,0],[0,0],[2,0]] 和 [[1,0],[2,0],[0,0]]


示例 2：

输入：points = [[1,1],[2,2],[3,3]]
输出：2


示例 3：

输入：points = [[1,1]]
输出：0


 

提示：

n == points.length
1 <= n <= 500
points[i].length == 2
-104 <= xi, yi <= 104
所有点都 互不相同
```

## 前置知识

-  哈希表
-  两点间的计算距离
    dis(x,y) = 
-  排列组合的知识


## 思路

使用哈希表

## 代码

- 语言支持：JavaScript

JavaScript Code:

```javascript

/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function (points) {
  let map = new Map();
  let res = 0;
  if (points === null) return;

  for (let i = 0; i < points.length; i++) {
    for (let j = 0; j < points.length; j++) {
      let distance = getDistance(points[i], points[j]);

      map.set(distance, (map.get(distance) ?? 0) + 1);
    }

    for (let count of map.values()) {
      res += count * (count - 1);
    }

    map.clear();
  }

  return res;
};

var getDistance = function (x, y) {
  let x1 = y[0] - x[0];
  let x2 = y[1] - x[1];
  return x1 * x1 + x2 * 2;
};

console.log(
  numberOfBoomerangs([
    [0, 0],
    [1, 0],
    [2, 0],
  ])
);


```

**复杂度分析**

- 时间复杂度: O(n^2)
    
- 空间复杂度：O(n)

