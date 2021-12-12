/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const numMap = new Map();

  for (var i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (numMap.has(diff)) {
      return numMap[numMap.get(diff),i]
    } else {
      numMap.set(nums[i], i);
    }
  }
  return [];
};

console.log(twoSum([3, 2, 4], 6));
