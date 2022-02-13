var change = function (amount, coins) {
    const dp = Array.from({ length: amount + 1 }).fill(0);
    dp[0] = 1;
    for (let coin of coins) {
        for (let i = coin; i <= amount; i++) {
            dp[i] += dp[i - coin];
        }
    }
    console.log('dp', dp)
    return dp[amount];
};

// 这个题关键在于能写出状态转移方程吧

console.log(change(5, [1, 2, 4]))