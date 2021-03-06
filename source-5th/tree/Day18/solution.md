## 题目地址(987. 二叉树的垂序遍历)

https://leetcode-cn.com/problems/vertical-order-traversal-of-a-binary-tree/

## 题目描述

```
给你二叉树的根结点 root ，请你设计算法计算二叉树的 垂序遍历 序列。

对位于 (row, col) 的每个结点而言，其左右子结点分别位于 (row + 1, col - 1) 和 (row + 1, col + 1) 。树的根结点位于 (0, 0) 。

二叉树的 垂序遍历 从最左边的列开始直到最右边的列结束，按列索引每一列上的所有结点，形成一个按出现位置从上到下排序的有序列表。如果同行同列上有多个结点，则按结点的值从小到大进行排序。

返回二叉树的 垂序遍历 序列。

 

示例 1：

输入：root = [3,9,20,null,null,15,7]
输出：[[9],[3,15],[20],[7]]
解释：
列 -1 ：只有结点 9 在此列中。
列  0 ：只有结点 3 和 15 在此列中，按从上到下顺序。
列  1 ：只有结点 20 在此列中。
列  2 ：只有结点 7 在此列中。

示例 2：

输入：root = [1,2,3,4,5,6,7]
输出：[[4],[2],[1,5,6],[3],[7]]
解释：
列 -2 ：只有结点 4 在此列中。
列 -1 ：只有结点 2 在此列中。
列  0 ：结点 1 、5 和 6 都在此列中。
          1 在上面，所以它出现在前面。
          5 和 6 位置都是 (2, 0) ，所以按值从小到大排序，5 在 6 的前面。
列  1 ：只有结点 3 在此列中。
列  2 ：只有结点 7 在此列中。


示例 3：

输入：root = [1,2,3,4,6,5,7]
输出：[[4],[2],[1,5,6],[3],[7]]
解释：
这个示例实际上与示例 2 完全相同，只是结点 5 和 6 在树中的位置发生了交换。
因为 5 和 6 的位置仍然相同，所以答案保持不变，仍然按值从小到大排序。

 

提示：

树中结点数目总数在范围 [1, 1000] 内
0 <= Node.val <= 1000
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
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
 var verticalTraversal = function (root) {
    if (!root) return [];
  
    // 坐标集合以 x 坐标分组
    const pos = {};
    // dfs 遍历节点并记录每个节点的坐标
    dfs(root, 0, 0);
  
    // 得到所有节点坐标后，先按 x 坐标升序排序
    let sorted = Object.keys(pos)
      .sort((a, b) => +a - +b)
      .map((key) => pos[key]);
  
    // 再给 x 坐标相同的每组节点坐标分别排序
    sorted = sorted.map((g) => {
      g.sort((a, b) => {
        // y 坐标相同的，按节点值升序排
        if (a[0] === b[0]) return a[1] - b[1];
        // 否则，按 y 坐标降序排
        else return b[0] - a[0];
      });
      // 把 y 坐标去掉，返回节点值
      return g.map((el) => el[1]);
    });
  
    return sorted;
  
    // *********************************
    function dfs(root, x, y) {
      if (!root) return;
  
      x in pos || (pos[x] = []);
      // 保存坐标数据，格式是: [y, val]
      pos[x].push([y, root.val]);
  
      dfs(root.left, x - 1, y - 1);
      dfs(root.right, x + 1, y - 1);
    }
  };

```

**复杂度分析**

令 n 为数组长度。

- 时间复杂度：$O(n)$
- 空间复杂度：$O(n)$
