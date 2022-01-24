var new21Game = function (n, k, maxPts) {
    const dp = new Array(k + maxPts + 2).fill(0);

    let windowSum = 0;
    for (let i = k; i < k + maxPts; i++) {
        if (i <= n) dp[i] = 1;
        windowSum += dp[i];
    }

    for (let i = k - 1; i >= 0; i--) {
        dp[i] = windowSum / maxPts;
        windowSum -= dp[i + maxPts];
        windowSum += dp[i];
    }

    return dp[0];
};