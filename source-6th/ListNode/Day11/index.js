function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// var detectCycle = function (head) {
// if (head == null || head.next == null) return null;
//     const visited = new Set();
//     while (head) {
//         if (visited.has(head)) return head;
//         visited.add(head)
//         head = head.next
//     }
//     return null
// };

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

console.log(detectCycle(l1));
