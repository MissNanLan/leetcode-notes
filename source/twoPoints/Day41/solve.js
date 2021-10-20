
// const findPairs = function (nums, mid) {

//     let n = nums.length;
//     let i = 0, ans = 0;
//     for (let j = 1; j < n; j++) {
//         while (nums[j] - nums[i] > mid) {
//             i += 1
//         }
//         ans += j - i - 1
//     }
//     // console.log('ans', ans)
//     return ans
// }


// const solve = function (nums, k) {
//     nums.sort();
//     let l = 0, r = nums[nums.length - 1] - nums[0] // 这里之前没想到，不过用笔画下就知道了。假设nums为[1,2,5,10],你想想r是不是nums[n-1]-nums[0]
//     while (l <= r) {
//         let mid = l + ((r - l) >> 1)  // 防止溢出
//         if (findPairs(nums, mid) >= k) {
//             r = mid - 1;
//         } else {
//             l = mid - 1
//         }
//     }
//     return l
// }

class Solution {
    solve(nums = [], k) {
        nums.sort()
        const n = nums.length
        k += 1
        let start = 0
        let end = nums[n - 1] - nums[0] // 这里之前没想到，不过用笔画下就知道了。假设nums为[1,2,5,10],你想想r是不是nums[n-1]-nums[0]
        while (start <= end) {
            let mid = start + (end - start) >> 1;
            if (this.findpairs(nums, mid) >= k) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }
        return start;
    }

    findpairs(nums, val) {
        const N = nums.length
        let count = 0;
        let i = 0, j = 0;
        while (i < N || j < N) {
            while (j < N && nums[j] - nums[i] <= val) {
                j++;
            }
            count += j - i - 1;
            i++;
        }
        return count;
    }

}