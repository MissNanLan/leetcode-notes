/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  if (root === null) {
    return "X";
  }
  const left = serialize(root.left);
  const right = serialize(root.right);

  return root.val + "," + left + "," + right;
};

const deserialize = (data) => {
  const list = data.split(","); // split成数组

  const buildTree = (list) => {
    // 基于list构建当前子树
    const rootVal = list.shift(); // 弹出首项，获取它的“数据”
    if (rootVal == "X") {
      // 是X，返回null节点
      return null;
    }
    const root = new TreeNode(rootVal); // 不是X，则创建节点
    root.left = buildTree(list); // 递归构建左子树
    root.right = buildTree(list); // 递归构建右子树
    return root; // 返回当前构建好的root
  };

  return buildTree(list); // 构建的入口
};

const p = serialize(new TreeNode(2, new TreeNode(1), new TreeNode(3)));
console.log(p);
