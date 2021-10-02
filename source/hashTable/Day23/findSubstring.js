/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
 var findSubstring = function (s, words) {
    const len = words[0].length
    const res = []
    for (let i = 0; i <= s.length - words.length * len; i++) {
      const wordsCopy = [...words]
      dfs(wordsCopy, s.substring(i), i)
    }
    return res
    function dfs(arr, s, start) {
      if (arr.length === 0) return res.push(start)
      const str = s.substr(0, len)
      const index = arr.findIndex((item) => item === str)
      if (index > -1) {
        arr.splice(index, 1)
        dfs(arr, s.substring(len), start) 
      }
    }
  }