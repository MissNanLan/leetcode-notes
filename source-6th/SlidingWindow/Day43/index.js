var maxVowels = function (s, k) {
    const dict = new Set(["a", "e", "i", "o", "u"]);
    let ret = 0;
    for (let i = 0; i < k; i++) {
        if (dict.has(s[i])) ret++;
    }

    let temp = ret;
    console.log('temp', temp)

    for (let i = k, j = 0; i < s.length; i++, j++) {
        if (dict.has(s[i])) temp++;  // 若添加的字符是元音则计数器+1（更新步）
        if (dict.has(s[j])) temp--;

        ret = Math.max(temp, ret);
    }

    return ret;
};

console.log(maxVowels('abciiidef', 3))