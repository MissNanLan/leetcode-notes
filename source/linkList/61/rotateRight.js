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

var rotateRight = function (head, k) {
  if (k === 0 || !head || !head.next) {
    return head;
  }

  let n = 1;
  let cur = head;

  while (cur.next) {
    console.log();
    cur = cur.next;
    n++;
  }

  let add = n - (k % n);
  if (add === n) {
    return head;
  }
  cur.next = head;

  while (add) {
    cur = cur.next;
    add--;
  }
  const ret = cur.next;
  cur.next = null;
  return ret;
};

[1, 2, 3, 4, 5].map((it) => {
  console.log(rotateRight(new ListNode(it), 2));
});
