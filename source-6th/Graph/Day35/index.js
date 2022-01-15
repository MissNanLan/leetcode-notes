var minCharacters = function (a, b) {
    const m = a.length,
      n = b.length;
  
    let aa = new Array(26).fill(0);
    let bb = new Array(26).fill(0);
  
    for (let i = 0; i < m; i++) aa[a.charCodeAt(i) - 97]++;
    for (let j = 0; j < n; j++) bb[b.charCodeAt(j) - 97]++;

    console.log(aa)
    console.log(bb)
  
    let ans = m + n;
    let asum = 0,
      bsum = 0;
  
    for (let i = 0; i < 25; i++) {
      asum += aa[i];
      bsum += bb[i];
      ans = Math.min(
        Math.min(ans, m + n - aa[i] - bb[i]), //  我们只需要将 A 和 B 改为同一个字母，并计算出操作数，取最小值即可。我们可能修改成的字母一共只有 26 种可能，因此直接枚举即可。
        Math.min(m - asum + bsum, n - bsum + asum)
      );
    }

    console.log(asum)
    console.log(bsum)
    return Math.min(ans, m + n - aa[25] - bb[25]);
};
  
console.log(minCharacters('add','bcc'))