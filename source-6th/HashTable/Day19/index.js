/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    console.log(diff);
    // 16
    // 11
    // 7
    if (map.has(diff)) {
      return [map.get(diff), i]; // [1,2]
    } else {
      map.set(nums[i], i);
      // 2,0
      // 7,1
    }
  }
};

var nums = [2, 7, 11, 15];
twoSum(nums, 18);

console.log(twoSum(nums, 18));
