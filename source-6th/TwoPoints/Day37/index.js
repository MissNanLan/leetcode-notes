/**
 * @param {number} x
 * @return {number}
 */

var mySqrt = function (x) {
  let l = 0,
    r = x,
    ans = -1;
  while (l <= r) {
      const mid = Math.floor((l + r) / 2)
    if (mid * mid <= x) {
      ans = mid;
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return ans;
};

console.log(mySqrt(8));
