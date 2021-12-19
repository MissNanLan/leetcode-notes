
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

- 

## 公司

- 暂无

## 思路

1、 链表的长度怎么求出来，如果是数组那直接是arr.length，链表呢 
2、 k>n的话，我们这次用m来表示 (m是将尾部向前数第K个元素作为头，原来的头接到原来的尾上)
3、 环的产生 p.next = head
4、 移动完之后需要断开链表


## 关键点

## 代码

- 语言支持：JavaScript

JavaScript Code:

```javascript

function ListNode(val, next) {
    val === undefined ? 0 : val;
    next === undefined ? null :val
}


var rotateRight = function (head, k) {
    
    if (!head || !head.next) return;

    const p = head, n = 1;
  // 求出链表的长度
    while (p.next) {
        p = p.next
        n++;
    }

    let m = k- k % n;
    p.next = head;

    while (m) {
        p = p.next
        m--;
    }

    const ret = cur.next;
    cur.next = null;

    return ret;
                                         
}


```


**复杂度分析**

令 n 为数组长度。

- 时间复杂度：O(n)，最坏情况下，我们需要遍历该链表两次。

- 空间复杂度：O(1)，我们只需要常数的空间存储若干变量。

