/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * 
 */

var isBadVersion = function (version) {
    if (version === 5) return true;
    return false;
};


/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (n) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        let left = 1, right = n;
        while (left < right) {
            const mid = Math.floor(left + (right - left) / 2);
            if (isBadVersion(mid)) {  //  如果是错误的版本
                right = mid
            } else {
                left = mid + 1
            }
        }
        return left;
    };
};

console.log(solution(5))

// for(let i =1;i<11;i++){
//     console.log(solution(i))
// }

