
/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function (s, c) {
     
   // 定义左边界,右边界
    let l = s[0] === c ? 0 : Infinity, r = s.indexOf(c, 1);
    let res = Array(s.length);

    for (let i = 0; i < s.length; i++) {
        res[i] = Math.min(Math.abs(i - l), Math.abs(r - i));
        // 如果滑动到边界，则继续向右滑动
        if (i === r) {
            l = r;
            r = s.indexOf(c,l)
        } 
    }
  
};


console.log(shortestToChar('loveleetcode','e'))