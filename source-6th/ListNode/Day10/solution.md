
## 题目地址(160. 相交链表)

https://leetcode-cn.com/problems/intersection-of-two-linked-lists/

## 题目描述

```
给你两个单链表的头节点 headA 和 headB ，请你找出并返回两个单链表相交的起始节点。如果两个链表不存在相交节点，返回 null 。

图示两个链表在节点 c1 开始相交：

题目数据 保证 整个链式结构中不存在环。

注意，函数返回结果后，链表必须 保持其原始结构 。

自定义评测：

评测系统 的输入如下（你设计的程序 不适用 此输入）：

intersectVal - 相交的起始节点的值。如果不存在相交节点，这一值为 0
listA - 第一个链表
listB - 第二个链表
skipA - 在 listA 中（从头节点开始）跳到交叉节点的节点数
skipB - 在 listB 中（从头节点开始）跳到交叉节点的节点数

评测系统将根据这些输入创建链式数据结构，并将两个头节点 headA 和 headB 传递给你的程序。如果程序能够正确返回相交节点，那么你的解决方案将被 视作正确答案 。

 

示例 1：

输入：intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3
输出：Intersected at '8'
解释：相交节点的值为 8 （注意，如果两个链表相交则不能为 0）。
从各自的表头开始算起，链表 A 为 [4,1,8,4,5]，链表 B 为 [5,6,1,8,4,5]。
在 A 中，相交节点前有 2 个节点；在 B 中，相交节点前有 3 个节点。


示例 2：

输入：intersectVal = 2, listA = [1,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1
输出：Intersected at '2'
解释：相交节点的值为 2 （注意，如果两个链表相交则不能为 0）。
从各自的表头开始算起，链表 A 为 [1,9,1,2,4]，链表 B 为 [3,2,4]。
在 A 中，相交节点前有 3 个节点；在 B 中，相交节点前有 1 个节点。


示例 3：

输入：intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2
输出：null
解释：从各自的表头开始算起，链表 A 为 [2,6,4]，链表 B 为 [1,5]。
由于这两个链表不相交，所以 intersectVal 必须为 0，而 skipA 和 skipB 可以是任意值。
这两个链表不相交，因此返回 null 。


 

提示：

listA 中节点数目为 m
listB 中节点数目为 n
1 <= m, n <= 3 * 104
1 <= Node.val <= 105
0 <= skipA <= m
0 <= skipB <= n
如果 listA 和 listB 没有交点，intersectVal 为 0
如果 listA 和 listB 有交点，intersectVal == listA[skipA] == listB[skipB]

 

进阶：你能否设计一个时间复杂度 O(m + n) 、仅用 O(1) 内存的解决方案？
```

## 前置知识

- 

## 公司

- 暂无

## 思路

### 方法1 哈希集合

- 有A、B两条链表，先创建一个哈希表，遍历A对象，存入这个海西表，
- 然后遍历B，然后检查B是否在这个哈希表中，存在于哈希表的那个节点就是相交节点


### 代码

- 语言支持：JavaScript

JavaScript Code:

```javascript

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  const visited = new Set();
  let temp = headA;
  while (temp) {
    visited.add(temp);
    temp = temp.next;
  }
  temp = headB;
  while (temp) {
    if (visited.has(temp)) return temp;
    temp = temp.next;
  }
  return null;
};

let C = new ListNode(8, new ListNode(4, new ListNode(5)));

let headA = new ListNode(2, C);

let headB = new ListNode(1, new ListNode(3, C));

console.log(getIntersectionNode(headA, headB));

```

**复杂度分析**


- 时间复杂度：$O(m+n)$， m是headA的长度，n是headB的长度 ，需要遍历两次，所以时间复杂度是O(m+n)
- 空间复杂度：$O(m)$,  是headA的长度



### 方法2 双指针

- 使用a、b两个指针分别指向于链表A、B，两个指针以相同的速度向右移动
- 如果a到达A链表的尾部的时候，使他重新指向链表B的头结点，
- 如果b到达B链表的尾部的时候，使他重新指向链表A的头结点，
- 两个指针相遇的时候，则相交的节点就是他们起始相交的节点，否则不存在相交节点

### 代码

- 语言支持：JavaScript

JavaScript Code:

``` javascript

var getIntersectionNode = function (headA, headB) {
  let a = headA,
    b = headB;
  while (a != b) {
    a = a === null ? headB : a.next;
    b = b === null ? headA : b.next;
  }
  return a;
};
```


**复杂度分析**


- 时间复杂度：$O(n)$， n应该是headA和headB长度最长的那个
- 空间复杂度：$O(1)$

