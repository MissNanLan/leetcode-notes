## 题目地址:（Kth-Pair-Distance）

https://binarysearch.com/problems/Kth-Pair-Distance

## 题目描述

```
Given a list of integers nums and an integer k, return the k-th (0-indexed) smallest abs(x - y) for every pair of elements (x, y) in nums. Note that (x, y) and (y, x) are considered the same pair.

Constraints

n ≤ 100,000 where n is the length of nums
Example 1
Input
nums = [1, 5, 3, 2]
k = 3
Output
2
Explanation
Here are all the pair distances:

abs(1 - 5) = 4
abs(1 - 3) = 2
abs(1 - 2) = 1
abs(5 - 3) = 2
abs(5 - 2) = 3
abs(3 - 2) = 1
Sorted in ascending order we have [1, 1, 2, 2, 3, 4].
```

## 前置知识

- 二分

## 思路

经过提点，我终于知道题目是个啥意思了。就是在返回的数组 abs(x-y)中找出 k 个小的元素。拿例子来说就是，k=3，那么 2 就是第三小的数

## 代码

- 语言： JavaScript

```

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
```

## 复杂度

- 时间复杂度： O(nlogn)
- 空间复杂度： O(1)

但是这里会超出时间限制
