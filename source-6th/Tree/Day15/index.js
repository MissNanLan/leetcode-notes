function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// var sumNumbers = function (root) {
//     let sum =0
//    // 前序遍历
//     function dfs(root, cur) {
//       if (!root) return null;
//        let curSum = cur * 10 + root.val;
//         if (!root.left && !root.right) {
//             sum += curSum;
//             return
//         }
//         dfs(root.left, curSum)
//         dfs(root.right,curSum)
//     }
//     dfs(root, 0);
//     return sum
// };

var sumNumbers = function (root) {
  let sum = 0;
  let curLevel = [];
  // 初始状态
  if (root) {
    curLevel.push(root);
  }
  console.log('root',root)
  while (curLevel.length) {
    let nextLevel = [];
    for (let i = 0; i < curLevel.length; i++) {
      let cur = curLevel[i];

      if (cur.left) {
        cur.left.val = cur.val * 10 + cur.left.val;
        nextLevel.push(cur.left);
      }

      if (cur.right) {
        cur.right.val = cur.val * 10 + cur.right.val;
        nextLevel.push(cur.right);
      }

      if (!cur.left && !cur.right) {
        sum += cur.val;
      }
      curLevel = nextLevel;
    }
  }
  return sum;
};

let tree = new TreeNode(1, new TreeNode(2), new TreeNode(3));

console.log(sumNumbers(tree));
