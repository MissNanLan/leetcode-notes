/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  if (!head || !head.next) return head;

  const newHead = head.next; // 2
  head.next = swapPairs(newHead.next); // null
  newHead.next = head; // 1
  return newHead;
};

console.log(
  JSON.stringify(
    swapPairs(
      new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))))
    )
  )
);
