/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
 var findJudge = function (n, trust) {
    const G = new Array(n).fill(0);
  
    for (const [fr, to] of trust) {
  
      G[fr - 1]--;
      G[to - 1]++;
    }
    const target = G.indexOf(n - 1);
    console.log(G);
    console.log(target);
    return target !== -1 ? target + 1 : target;
  };
  

var G = [
  [1, 3],
  [2, 3],
];

findJudge(3, G);
