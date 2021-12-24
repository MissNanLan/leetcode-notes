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


- 树的深度

   高度和深度是相反的，高度是从下往上数，深度是从上往下。
   因此根节点的深度和叶子节点的高度是 0；


## 思路

### 思路1 dfs

先计算出左子树和右子树的高度，然后取最大值，然后加1

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
 * @return {number}
 */
var maxDepth = function (root) {
    if (root === null) {
        return 0;
    }
    return Math.max(maxDepth(root.left),maxDepth(root.right))+1
};


let tree = new TreeNode(
    new TreeNode(9),
    new TreeNode(20,new TreeNode(25),new TreeNode(7))

    console.log(maxDepth(tree))

```

**复杂度分析**

令 n 为数组长度。

- 时间复杂度：O(N)，其中 N 为节点数。

- 空间复杂度：O(h)，其中 h 为树的深度
