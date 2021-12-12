## 题目地址(100. 相同的树)

https://leetcode-cn.com/problems/same-tree/

## 题目描述

```
给你两棵二叉树的根节点 p 和 q ，编写一个函数来检验这两棵树是否相同。

如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。

 

示例 1：

输入：p = [1,2,3], q = [1,2,3]
输出：true


示例 2：

输入：p = [1,2], q = [1,null,2]
输出：false


示例 3：

输入：p = [1,2,1], q = [1,1,2]
输出：false


 

提示：

两棵树上的节点数目都在范围 [0, 100] 内
-104 <= Node.val <= 104
```

## 思路

- 运用 dfs 的思路，怎么感觉 dfs 的代码好些点

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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  if (p === null && q === null) return true;
  if (p === null || q === null) return false;
  if (p.val !== q.val) return false;
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
  // 测试
  //   const p = new TreeNode(1, new TreeNode(2));
  //   const q = new TreeNode(1, new TreeNode(2));
  //   console.log(isSameTree(p, q));
};
```

**复杂度分析**

令 n 为数组长度。

- 时间复杂度：O(min(m,n))
- 空间复杂度：O(min(m,n))
