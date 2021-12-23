
## 题目地址(142. 环形链表 II)

https://leetcode-cn.com/problems/linked-list-cycle-ii/

## 题目描述

```
给定一个链表，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。

如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，评测系统内部使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。如果 pos 是 -1，则在该链表中没有环。注意：pos 不作为参数进行传递，仅仅是为了标识链表的实际情况。

不允许修改 链表。

 

示例 1：

输入：head = [3,2,0,-4], pos = 1
输出：返回索引为 1 的链表节点
解释：链表中有一个环，其尾部连接到第二个节点。


示例 2：

输入：head = [1,2], pos = 0
输出：返回索引为 0 的链表节点
解释：链表中有一个环，其尾部连接到第一个节点。


示例 3：

输入：head = [1], pos = -1
输出：返回 null
解释：链表中没有环。


 

提示：

链表中节点的数目范围在范围 [0, 104] 内
-105 <= Node.val <= 105
pos 的值为 -1 或者链表中的一个有效索引

 

进阶：你是否可以使用 O(1) 空间解决此题？
```

## 前置知识

- 

## 公司

- 暂无

## 思路

### 方法1 哈希集合


- 创建一个哈希表，然后遍历这个链表
- 如果链表在这个哈希表出现，说明当前节点就是环的入口
- 如果不存在的话，则无环


## 代码

- 语言支持：JavaScript

JavaScript Code:

```javascript
var detectCycle = function (head) {
    const visited = new Set();
    while (head) {
        if (visited.has(head)) return head;
        visited.add(head)
        head = head.next
    }
    return null
};

```

**复杂度分析**


- 时间复杂度： O(n), n是链表的长度

- 空间复杂度：O(n)，n是链表的长度，我们需要把链表的每个节点都保存在哈希表中

### 方法2 双指针

## 代码

- 语言支持：JavaScript

JavaScript Code:

```javascript
function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
    if (head == null || head.next == null) return null;
    let slow = head,
        fast = head;
    do {
        if (fast != null && fast.next != null) {
            fast = fast.next.next;
        } else {
            fast = null;
        }
        slow = slow.next;
    } while (slow != fast)
    
    if (slow === null) return null;
    // 走到这里的时候说明有两个指针第一次相遇
    fast = head;
    while (slow != fast) {
        fast = fast.next;
        slow = slow.next;
    }
    return fast;
};

const l1 = new ListNode(3);
const l2 = new ListNode(2);
const l3 = new ListNode(0);
const l4 = new ListNode(-4);

l1.next = l2;
l2.next = l3;
l3.next = l4;
l4.next = l2;

```


**复杂度分析**


- 时间复杂度：$O(n)$,O(N)，其中 N 为链表中节点的数目。在最初判断快慢指针是否相遇时，slow 指针走过的距离不会超过链表的总长度；随后寻找入环点时，走过的距离也不会超过链表的总长度。因此，总的执行时间为 O(N)+O(N)=O(N)。

- 空间复杂度：$O(1)$


## TODO

https://leetcode-cn.com/problems/linked-list-cycle/