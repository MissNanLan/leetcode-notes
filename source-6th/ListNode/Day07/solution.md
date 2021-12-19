
## 题目地址(24. 两两交换链表中的节点)

https://leetcode-cn.com/problems/swap-nodes-in-pairs/

## 题目描述

```
给你一个链表，两两交换其中相邻的节点，并返回交换后链表的头节点。你必须在不修改节点内部的值的情况下完成本题（即，只能进行节点交换）。

 

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
```

## 前置知识

- 

## 公司

- 暂无

## 思路

解法1 递归


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
    if (!head || !head.next) return;
    const newHead = head.next; temp = A.next; A.next = temp; temp.next = A
    head.next = newHead.next;
    newHead.next = head;
    return newHead;
};


console.log(
    JSON.stringify(
      swapPairs(
        new ListNode(1, new ListNode(2))
      )
    )
  );
  

```


**复杂度分析**

令 n 为数组长度。

时间复杂度：O(n)，其中 n 是链表的节点数量。需要对每个节点进行更新指针的操作。

空间复杂度：O(n)，其中 是链表的节点数量。空间复杂度主要取决于递归调用的栈空间。

