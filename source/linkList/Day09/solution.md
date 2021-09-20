## 题目地址(109. 有序链表转换二叉搜索树)

https://leetcode-cn.com/problems/convert-sorted-list-to-binary-search-tree/

## 题目描述

```
给定一个单链表，其中的元素按升序排序，将其转换为高度平衡的二叉搜索树。

本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。

示例:

给定的有序链表： [-10, -3, 0, 5, 9],

一个可能的答案是：[0, -3, 9, -10, null, 5], 它可以表示下面这个高度平衡二叉搜索树：

      0
     / \
   -3   9
   /   /
 -10  5

```

## 前置知识

- 二叉树的知识
- 平衡二叉树

## 公司

- 暂无

## 思路

- 利用快慢指针

## 关键点

-

## 代码

- 语言支持：JavaScript

JavaScript Code:

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
  if (head == null) return null;
  let slow = head;
  let fast = head;
  let preShow;

  while (fast && fast.next) {
    preShow = slow; // 保存当前slow
    slow = slow.next; // slow走一步
    fast = fast.next.next; // fast 走两步，这不可以找出中节点
  }

  let root = new TreeNode(slow.val);

  if (preShow != null) {
    // preShow不为空的话，则说明有左子树
    preShow.next = null;
    root.left = sortedListToBST(head);
  }

  root.right = sortedListToBST(slow.next);

  return root;
};
```

**复杂度分析**

令 n 为数组长度。

- 时间复杂度： 不会分析
- 空间复杂度：不会分析

## 进阶

了解其它的解法： 分治 + 中序遍历优化
