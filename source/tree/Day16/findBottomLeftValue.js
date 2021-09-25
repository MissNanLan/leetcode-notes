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
var findBottomLeftValue = function (root) {
  let maxPath = 0,
    resNode = null;

  const depsTree = function (node, curdepth) {
    //  结束递归的条件
    if (node.left === null && node.right === null) {
      if (curdepth > maxPath) {
        curdepth = maxPath;
        resNode = node.val;
      }
    }
    node.left && depsTree(node.left, curdepth + 1);
    node.rigt && depsTree(node.right, curdepth + 1);
  };

  depsTree(root, 1);
  return resNode;
};

const p = findBottomLeftValue(
  new TreeNode(2, new TreeNode(1), new TreeNode(3))
);
console.log(p);
