/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// 利用快慢指针
var sortedListToBST = function (head) {
  if (head == null) return null;
  let slow = head;
  let fast = head;
  let preShow;

  while (fast && fast.next) {
    preShow = slow; // 保存当前slow
    slow = slow.next; // slow走一步
    fast = fast.next.next;
  }

  let root = new TreeNode(slow.val);

  if (preShow != null) {
    preShow.next = null;
    root.left = sortedListToBST(head);
  }

  root.right = sortedListToBST(slow.next);

  return root;
};

let linkList = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
);

console.log(sortedListToBST(linkList));
