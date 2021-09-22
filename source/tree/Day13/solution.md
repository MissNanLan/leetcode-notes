## 题目地址(104. 二叉树的最大深度)

https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/

## 题目描述

```
给定一个二叉树，找出其最大深度。

二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。

说明: 叶子节点是指没有子节点的节点。

示例：
给定二叉树 [3,9,20,null,null,15,7]，

    3
   / \
  9  20
    /  \
   15   7

返回它的最大深度 3 。
```

## 前置知识

- DFS(深度优先搜索)

## 公司

- 暂无

## 思路

## 关键点

-

## 代码

- 语言支持：JavaScript

JavaScript Code:

```javascript
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) return 0;
  const left = maxDepth(roo.left);
  const right = maxDepth(roo.right);
  return Math.max(left, right) + 1;
};

// const root = new TreeNode(
//   3,
//   new TreeNode(9),
//   new TreeNode(20, new TreeNode(15), new TreeNode(7))
//);
// console.log(maxDepth(root));
```

**复杂度分析**

令 n 为数组长度。

- 时间复杂度：$O(n)$
- 空间复杂度：$O(n)$
