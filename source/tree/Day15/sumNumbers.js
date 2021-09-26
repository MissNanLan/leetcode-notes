/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function (root) {
  return dfs(root, 0);
};

var dfs = function (root, prevSum) {
  if (root === null) return 0;
  let sum = 0;
  //  如何算一条路径上所有节点的值,巧妙得很
  sum = prevSum * 10 + root.val;
  if (root.left === null && root.right === null) {
    return sum;
  } else {
    return dfs(root.left, sum) + dfs(root.right, sum);
  }
};

const p = sumNumbers(new TreeNode(1, new TreeNode(2), new TreeNode(3)));
console.log(p);
