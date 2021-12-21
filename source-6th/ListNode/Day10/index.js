/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

// 哈希表
// var getIntersectionNode = function (headA, headB) {
//   const visited = new Set();
//   let temp = headA;
//   while (temp) {
//     visited.add(temp);
//     temp = temp.next;
//   }
//   temp = headB;

//   while (temp) {
//     if (visited.has(temp)) { return temp; }
//     temp = temp.next;
//   }
//   return null;
// };

// 双指针

var getIntersectionNode = function (headA, headB) {
  let a = headA,
    b = headB;
  while (a != b) {
    a = a === null ? headB : a.next;
    b = b === null ? headA : b.next;
  }
  return a;
};

let C = new ListNode(8, new ListNode(4, new ListNode(5)));

let headA = new ListNode(2, C);

let headB = new ListNode(1, new ListNode(3, C));

console.log(getIntersectionNode(headA, headB));
