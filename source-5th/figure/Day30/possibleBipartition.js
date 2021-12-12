var possibleBipartition = function(n, dislikes) {
    const graph = [...new Array(n)].map(() => new Array())
    const colors = new Array(n).fill(0)

  // 构建邻接矩阵（a与b不能分在同一组，b与a也是不能在同一组，1表示互相不喜欢）
    for (const d of dislikes) {
      const [a, b] = d
      graph[a - 1][b - 1] = 1
      graph[b - 1][a - 1] = 1
    }
    console.log(graph)
    // colors 中的0表示没有分组
    // 1表示分组1
    // -1表示分组2
    for (let i = 0; i < n; i++) {
      if (colors[i] === 0 && !dfs(i, 1)) {
        return false
      }
    }
    console.log(colors)
    return true

   // 
    function dfs(i, targetColor) {
      colors[i] = targetColor
      for (let j = 0; j < n; j++) {
        if (graph[i][j] === 1) {
          if (colors[j] === targetColor) {
            return false
          }
          if (colors[j] === 0 && !dfs(j, -targetColor)) {
            return false
          }
        }
      }
      return true
    }
};

console.log(possibleBipartition(4,[[1,2],[1,3],[2,4]]))