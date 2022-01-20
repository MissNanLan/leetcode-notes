// function solve(nums) {
//     console.log(nums);
//     if (nums.length < 3) return 0
//     nums.sort((a, b) => a - b)
//     let l = 0, r = nums[nums.length - 1]
//     while (l <= r) {
//         const m = l + ((r - l) >>> 1)
//         if (find(m, nums)) r = m - 1
//         else l = m + 1
//     }
//     if (l > nums[nums.length - 1] || !find(l, nums)) return -1
//     return l / 2
// }

// function find(mid, nums) {
//     let range = nums[0] + mid, ligths = 0

//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] > range) {
//             ligths += 1
//             range = nums[i] + mid
//         }
//     }

//     return ligths <= 2
// }

class Solution {
  solve(nums) {
    if (nums.length < 3) return 0;
    nums.sort((a, b) => a - b);
    let l = 0,
      r = nums[nums.length - 1];
    while (l <= r) {
      const m = l + ((r - l) >>> 1);
      if (this.find(m, nums)) r = m - 1;
      else l = m + 1;
    }
    if (l > nums[nums.length - 1] || !this.find(l, nums)) return -1;
    return l / 2;
  }

  find(mid, nums) {
    let range = nums[0] + mid,
      ligths = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > range) {
        ligths += 1;
        range = nums[i] + mid;
      }
    }

    return ligths <= 2;
  }
}
const res = new Solution().solve([1, 2, 95, 96, 97, 100]);
console.log(res);
// console.log(solve([1,2,95,96,97,100]))
