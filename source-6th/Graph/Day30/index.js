/**
 * @param {number} n
 * @param {number[][]} dislikes
 * @return {boolean}
 */
 var possibleBipartition = function(n, dislikes) {
    
    const graph = [...new Array(n)].map(() => new Array())
    const colors = new Array(n).fill(0)
  
    // build dislikes graph
    for (const d of dislikes) {
      const [a, b] = d
      graph[a - 1][b - 1] = 1
      graph[b - 1][a - 1] = 1
    }
  
    // colors 存储 N 个人的分组情况
     for (let i = 0; i < n; i++) {
        // 0 表示未分组
      if (colors[i] === 0 && !dfs(i, 1)) {
        return false
      }
    }
    console.log('colors',colors)
  
    return true
  
  // dfs的功能就是根据colors和graph分配组，true表示可以分，false表示不可以
    function dfs(i, targetColor) {
      colors[i] = targetColor
      for (let j = 0; j < n; j++) {
        if (graph[i][j] === 1) {
          if (colors[j] === targetColor) {
            return false
          }
            // 其中j 表示当前是第几个人
          if (colors[j] === 0 && !dfs(j, -targetColor)) {
            return false
          }
        }
      }
      return true
    }
 };
  
// 0 表示未分组

// 1 表示分组 1

// -1 表示分组 2
 console.log(possibleBipartition(4,[[1,2],[1,3],[2,4]]))