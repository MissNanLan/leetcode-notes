/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  var n = nums.length,
    left = 0,
    right = n - 1;
  mid = 0;
  while (left <= right) {
    mid = left + Math.floor((right - left) / 2);
    if (target <= nums[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return left;
};

console.log(searchInsert([1, 3, 5, 6], 7));
