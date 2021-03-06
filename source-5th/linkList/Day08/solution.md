## 题目地址(61. 旋转链表)

https://leetcode-cn.com/problems/rotate-list/

## 题目描述

```
给你一个链表的头节点 head ，旋转链表，将链表每个节点向右移动 k 个位置。

 

示例 1：

输入：head = [1,2,3,4,5], k = 2
输出：[4,5,1,2,3]


示例 2：

输入：head = [0,1,2], k = 4
输出：[2,0,1]


 

提示：

链表中节点的数目在范围 [0, 500] 内
-100 <= Node.val <= 100
0 <= k <= 2 * 109
```

## 前置知识

- 链表

## 公司

- 暂无

## 思路

## 关键点

- js 怎么实现链表
- js 怎么构成环列表

## 代码

- 语言支持：JavaScript

JavaScript Code:

```javascript
var rotateRight = function (head, k) {
  if (!head || !head.next) {
    return head;
  }

  let n = 1;
  let cur = head;

  // 知道cur.next = null结束循环，这个时候cur是最后一个节点
  while (cur.next !== null) {
    cur = cur.next;
    n++;
  }

  //  找出断开节点的位置
  let add = n - (k % n);

  // 如果k等于n或者n的倍数，则不需要改变
  if (add === n) {
    return head;
  }

  // 指向head，形成环链表
  cur.next = head;

  // 真正移动了多少次
  while (add) {
    cur = cur.next;
    add--;
  }

  //  新的结点指向断开环的位置
  const ret = cur.next;
  cur.next = null;
  return ret;
};
```

**复杂度分析**

令 n 为数组长度。

- 时间复杂度：O(n)，最坏情况下，我们需要遍历该链表两次。

- 空间复杂度：O(1)，我们只需要常数的空间存储若干变量。

## TODO

快慢指针
