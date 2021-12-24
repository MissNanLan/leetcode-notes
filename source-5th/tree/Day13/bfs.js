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

var maxDepth = function (root) {
  if (root === null) return 0;
  let res = 0,
    tempArr = [];
    tempArr.push(root)

    for(var i =0;i<tempArr.length;i++){
        if(tempArr[i].left)
        if(tempArr[i].right)
    }
};

// const root = new TreeNode({
//   val: 3,
//   left: new TreeNode({ val: 9 }),
//   right: new TreeNode({
//     val: 20,
//     left: new TreeNode({ val: 15 }),
//     right: new TreeNode({ val: 7 }),
//   }),
// });

const root = new TreeNode(3,
  new TreeNode(9),
  new TreeNode(
      20, new TreeNode(15), new TreeNode(7))
);

console.log(maxDepth(root));
