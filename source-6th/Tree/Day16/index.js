function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// var findBottomLeftValue = function (root) {
//     let arr = [];
//     let res = root.val;
//     arr.push(root);
//     while (arr.length) {
//       let nextArr = [];
//       for (let i = 0; i < arr.length; i++) {
//         if (arr[i].left) {
//           nextArr.push(arr[i].left);
//         }
//         if (arr[i].right) {
//           nextArr.push(arr[i].right);
//         }
//       }
//       res = arr[0].val;
//       arr = nextArr;
//     }
//     return res;
//   };

var findBottomLeftValue = function (root) {
  if (!root) return;

  findBottomLeftValue(root.left);
};

// let tree = new TreeNode(
//     new TreeNode(1),
//     new TreeNode(2, new TreeNode(4)),
//     new TreeNode(3, new TreeNode(5,new TreeNode(7)),new TreeNode(6))
// );

let tree = new TreeNode(2, new TreeNode(1), new TreeNode(3));

console.log(findBottomLeftValue(tree));
