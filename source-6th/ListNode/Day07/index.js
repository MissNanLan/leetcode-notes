
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
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
  