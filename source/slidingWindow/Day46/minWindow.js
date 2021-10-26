/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    const map = {}
    const tLen = t.length
    // 统计t的字符个数
    for (let i = 0; i < tLen; i++) {
        const char = t[i];
        map[char] = map[char] || 0
        map[char]--
    }

    let len = Infinity
    let match = 0
    let resLeft = 0
    let resRight = 0

    let left = 0
    let right = 0

    while (right < s.length) {
        const char = s[right]
        // 当前窗口出现t中的字符时
        if (char in map) {
            map[char]++
            // 有可能出现多个，只有跟t的个数相同才是匹配的部分
            if (map[char] <= 0) {
                match++
            }
        }

        // 当相等时，说明当前窗口已经出现t的字符了
        while (match === tLen) {
            // 判断当时窗口是否小于上次窗口
            if (right - left + 1 < len) {
                len = right - left + 1
                resLeft = left
                resRight = right
            }

            // 此时需要滑动窗口了，将左指针出窗口
            const ch = s[left]
            if (ch in map) {
                map[ch]--
                // 小于说明当前窗口中该字符的个数不符合了
                // 则不匹配计数要减一
                if (map[ch] < 0) {
                    match--
                }
            }
            // 移动左指针，收缩窗口
            left++
        }

        // 扩大窗口
        right++
    }

    // 有可能找不到，需要判断是否返回空字符串
    return len === Infinity ? '' : s.substring(resLeft, resRight + 1);
};

console.log(minWindow('ABAACBAB', 'ABC'))