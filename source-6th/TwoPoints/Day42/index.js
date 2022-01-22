/**
 * @param {number[][]} grid
 * @return {number}
 */
var d = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

function swimInWater(grid) {
  var N = grid.length;
  // var row = grid[0].length;
    var visited = [];
  for (var i = 0; i < N; i++) {
    visited[i] = new Array();
    for (var j = 0; j < N; j++) {
      visited[i][j] = 0;
    }
  }

  var low = grid[0][0];
  var high = 2500;
  while (low < high) {
    var mid = (low + high) / 2;
    //如果说按当前时间可以直接游到右下角，那么就缩小时间
    if (dfs(0, 0, visited, mid, grid)) {
      high = mid;
      //如果说按当前设定时间游不到右下角，那么就增加时间
    } else {
      low = mid + 1;
    }
  }
  return low;
}

/**
 * 使用深度优先遍历得到从 (x, y) 开始向四个方向的所有小于等于 grid 且与 (x, y) 连通的结点
 *
 * @param x
 * @param y
 * @param visited
 * @param grid
 * @param grid
 * @return
 */

function dfs(x, y, visited, target, grid) {
  if (x == grid.length - 1 && y == grid[0].length - 1) {
    return true;
  }
  for (var i = 0; i < 4; i++) {
    var newx = x + d[i][0];
    var newy = y + d[i][1];
    if (
      newx >= 0 &&
      newx <= grid.length - 1 &&
      newy >= 0 &&
      newy <= grid[0].length - 1 &&
      !visited[newx][newy] &&
      grid[newx][newy] <= target
    ) {
      visited[newx][newy] = true;
      if (dfs(newx, newy, visited, target, grid)) {
        return true;
      }
    }
  }
  return false;
}

console.log(
  swimInWater([
    [0, 2],
    [1, 3],
  ])
);
