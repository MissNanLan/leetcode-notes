## 题目地址(24. 两两交换链表中的节点)

https://leetcode-cn.com/problems/swap-nodes-in-pairs/

## 题目描述

```
给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。

你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。

 

示例 1：

输入：head = [1,2,3,4]
输出：[2,1,4,3]


示例 2：

输入：head = []
输出：[]


示例 3：

输入：head = [1]
输出：[1]


 

提示：

链表中节点的数目在范围 [0, 100] 内
0 <= Node.val <= 100

 

进阶：你能在不修改链表节点值的情况下解决这个问题吗?（也就是说，仅修改节点本身。）
```

## 前置知识

-

## 公司

- 暂无

## 思路

- 利用递归。 如果递归不是那么好理解的话，可以给一个简单的列子。如[1,2],借用一个中间变量 newHead

```
newHead = head.next = 2,
head.next = newHead.next = null,
newHead.next = head =1
```

返回 newHead 就可以得出我们想要的答案

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
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  if (!head || !head.next) return head;
  const newHead = head.next;
  head.next = swapPairs(newHead.next);
  newHead.next = head;
  return newHead;
};
```

**复杂度分析**

令 n 为数组长度。

- 时间复杂度：O(n), n 是链表的长度
- 空间复杂度：O(n), n 是链表的长度，空间复杂度取决于链表的长度

## 进阶

寻找其它的解法
