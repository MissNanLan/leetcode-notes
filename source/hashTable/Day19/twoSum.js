/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const numMap = new Map();

  for (var i = 0; i < nums.length - 1; i++) {
    const diff = target - nums[i];
    if (numMap.has(diff)) {
      console.log(numMap.get(diff));
      console.log(i);
    } else {
      numMap.set(nums[i], i);
    }
  }
  return [];
};

console.log(twoSum([3, 2, 4], 6));
