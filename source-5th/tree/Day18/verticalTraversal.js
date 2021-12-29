/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
 var verticalTraversal = function (root) {
  if (!root) return [];

  // 坐标集合以 x 坐标分组
  const pos = {};
  // dfs 遍历节点并记录每个节点的坐标
  dfs(root, 0, 0);

  // 得到所有节点坐标后，先按 x 坐标升序排序
  let sorted = Object.keys(pos)
    .sort((a, b) => +a - +b)
    .map((key) => pos[key]);

  // 再给 x 坐标相同的每组节点坐标分别排序
  sorted = sorted.map((g) => {
    g.sort((a, b) => {
      // y 坐标相同的，按节点值升序排
      if (a[0] === b[0]) return a[1] - b[1];
      // 否则，按 y 坐标降序排
      else return b[0] - a[0];
    });
    // 把 y 坐标去掉，返回节点值
    return g.map((el) => el[1]);
  });

  return sorted;

  // *********************************
  function dfs(root, x, y) {
    if (!root) return;

    x in pos || (pos[x] = []);
    // 保存坐标数据，格式是: [y, val]
    pos[x].push([y, root.val]);

    dfs(root.left, x - 1, y - 1);
    dfs(root.right, x + 1, y - 1);
  }
};
