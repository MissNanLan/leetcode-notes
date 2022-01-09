/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
// var findJudge = function (n, trust) {
//   const G = new Array(n).fill(0);

//   for (const [fr, to] of trust) {

//     G[fr - 1]--;
//     G[to - 1]++;
//   }
//   const target = G.indexOf(n - 1);
//   console.log(G);
//   console.log(target);
//   return target !== -1 ? target + 1 : target;
// };

var findJudge = function (n, trust) { 
  var in_degree = new Array(n+1).fill(0);
  var out_degree = new Array(n+1).fill(0);
  for (const [fr, to] of trust) {
    out_degree[fr]++
    in_degree[to]++;
    console.log(out_degree)
    console.log(in_degree)
  }


  for (let i = 1; i <=n; i++) { 
    if (in_degree[i] === n-1 && out_degree[i] === 0) { 
      return i
    }
  }

  return -1

}

var G = [
  [1, 3],
  [2, 3],
];

console.log(findJudge(3, G));
