/**
 * @param {number[]} cost
 * @return {number}
 */
// var minCostClimbingStairs = function (cost) {
//     var dp = new Array(cost.length + 1)
//     dp[0] = 0, dp[1] = 0
//     for (let i = 2; i <= cost.length; i++) {
//         dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2])
//     }
//     return dp[cost.length]
// };

const minCostClimbingStairs = function (cost) {
    let twoStepBefore = cost[0];
    let oneStepBefore = cost[1];
    let curr = 0;
    for (let i = 2; i < cost.length; i++) {
        curr = Math.min(twoStepBefore, oneStepBefore) + cost[i];
        twoStepBefore = oneStepBefore;
        oneStepBefore = curr;

    }
    return Math.min(twoStepBefore, oneStepBefore);
};



console.log(minCostClimbingStairs([10, 15]))