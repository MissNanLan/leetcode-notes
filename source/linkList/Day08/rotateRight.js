/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

let linkList = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
);

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

console.log(JSON.stringify(rotateRight(linkList, 2)));
