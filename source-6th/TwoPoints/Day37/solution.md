## 题目地址(Triple Inversion)

https://binarysearch.com/problems/Triple-Inversion

## 题目描述

```
Given a list of integers nums, return the number of pairs i < j such that nums[i] > nums[j] * 3.

Constraints

n ≤ 100,000 where n is the length of nums
Example 1
Input
nums = [7, 1, 2]
Output
2
Explanation
We have the pairs (7, 1) and (7, 2)
```

## 前置知识

- 归并排序

  归并排序的本质是分治法，分而治之。该算法是采用分治法（Divide and Conquer）的一个非常典型的应用。将已有序的子序列合并，得到完全有序的序列；即先使每个子序列有序，再使子序列段间有序。若将两个有序表合并成一个有序表，称为二路归并。

## 思路

## 代码

- 语言支持：JavaScript

JavaScript Code:

```javascript
var reversePairs = function (nums) {
  let res = 0;
  function merge(nums, start, mid, end) {
    let i = start;
    let j = mid + 1;
    let temp = [];
    while (i <= mid && j <= end) {
      if (nums[i] <= nums[j]) {
        temp.push(nums[i]);
        i++;
      } else {
        temp.push(nums[j]);
        j++;
      }
    }
    let ti = start;
    let tj = mid + 1;
    while (ti <= mid && tj <= end) {
      if (nums[ti] <= 3 * nums[tj]) {
        ti++;
      } else {
        res += mid - ti + 1;
        tj++;
      }
    }
    while (i <= mid) {
      temp.push(nums[i]);
      i++;
    }
    while (j <= end) {
      temp.push(nums[j]);
      j++;
    }
    for (let index = 0; index < temp.length; index++) {
      nums[start + index] = temp[index];
    }
  }
  function mergeSort(nums, start, end) {
    if (start >= end) return;
    let mid = (start + end) >> 1;
    mergeSort(nums, start, mid);
    mergeSort(nums, mid + 1, end);
    merge(nums, start, mid, end);
  }
  mergeSort(nums, 0, nums.length - 1);
  return res;
};
```

**复杂度分析**

令 n 为数组长度。

- 时间复杂度：O(logn))
- 空间复杂度：O(n)

## TODO

https://leetcode-cn.com/problems/merge-sorted-array/description/

补归并排序
