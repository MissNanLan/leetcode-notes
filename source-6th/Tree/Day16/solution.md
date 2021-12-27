## 题目地址(513. 找树左下角的值)

https://leetcode-cn.com/problems/find-bottom-left-tree-value/

## 题目描述

```
给定一个二叉树的 根节点 root，请找出该二叉树的 最底层 最左边 节点的值。

假设二叉树中至少有一个节点。

 

示例 1:

输入: root = [2,1,3]
输出: 1


示例 2:

输入: [1,2,3,4,null,5,6,null,null,7]
输出: 7


 

提示:

二叉树的节点个数的范围是 [1,104]
-231 <= Node.val <= 231 - 1 
```

## 前置知识

- BFS 比较适合找「最短距离/路径」和「某一个距离的目标，比如这道题

## 思路

### 思路 1

BFS

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
var findBottomLeftValue = function (root) {
  let arr = [];
  let res = root.val;
  arr.push(root);
  while (arr.length) {
    let nextArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].left) {
        nextArr.push(arr[i].left);
      }
      if (arr[i].right) {
        nextArr.push(arr[i].right);
      }
    }
    res = arr[0].val;
    arr = nextArr;
  }
  return res;
};
```

**复杂度分析**

令 n 为数组长度。

- 时间复杂度：O(n)，其中 N 为树的节点数。
- 空间复杂度：O(q)，q 是队列的长度

## TODO

dfs
