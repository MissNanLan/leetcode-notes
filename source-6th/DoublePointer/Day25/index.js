

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  let   slow = fast = head;
    while (fast && fast.next) { 
        slow = slow.next;
        fast = fast.next.next
    }
    return slow
};

const l1 = new ListNode(1);
const l2 = new ListNode(2);
const l3 = new ListNode(3);
const l4 = new ListNode(4);
const l5 = new ListNode(5);
const l6 = new ListNode(6);

l1.next = l2;
l2.next = l3;
l3.next = l4;
l4.next = l5;
l5.next = l6;

console.log(middleNode(l1))
