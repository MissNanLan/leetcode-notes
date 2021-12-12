const minimumWindowSubstring = function (string, substring) {
    let answer = ""
    let map = {}
    substring.split("").forEach((character) => (map[character] = (map[character] || 0) + 1))

    //. count 用来
    let count = Object.keys(map).length
    let left = 0
    let right = -1
    while (right < string.length) {
        // 向左边滑动，可行窗口不覆盖t
        if (count === 0) {
            if (!answer || right - left + 1 < answer.length) {
                answer = string.slice(left, right + 1)
            }
            //  首先满足最小子串存在每个t的每个字符
            if (map[string[left]] !== undefined) {
                map[string[left]]++
            }
            if (map[string[left]] > 0) {
                count++
            }
            left++
        } else {
            //  向右边滑动，直到可行窗口全部覆盖t
            right++
            //  当count===0的时候，可行窗口全部覆盖t
            // 当可行窗口中包含t中的字符，则map中对应的字符计数减去1，
            if (map[string[right]] !== undefined) {
                map[string[right]]--
            }
            if (map[string[right]] === 0) {
                count--
            }

        }
    }

    return answer
}

console.log(minimumWindowSubstring('ABBCCDDEE', 'DE'))