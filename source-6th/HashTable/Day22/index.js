var lengthOfLongestSubstring = function (s) {
    let res = 0;
    for (let i = 0; i < s.length; i++) {
      let map = {};
      for (let j = i; j < s.length; j++) {
        if (map[s[j]] !== undefined) {
          break;
        }
        map[s[j]] = true;
        res = Math.max(res, j - i + 1);
      }
    }
    return res;
  };
  


console.log(lengthOfLongestSubstring("abcabcbb"))