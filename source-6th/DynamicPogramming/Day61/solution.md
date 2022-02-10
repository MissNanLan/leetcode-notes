## 题目地址(416. 分割等和子集)

https://leetcode-cn.com/problems/partition-equal-subset-sum/

## 题目描述

```
给你一个 只包含正整数 的 非空 数组 nums 。请你判断是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。

 

示例 1：

输入：nums = [1,5,11,5]
输出：true
解释：数组可以分割成 [1, 5, 5] 和 [11] 。

示例 2：

输入：nums = [1,2,3,5]
输出：false
解释：数组不能分割成两个元素和相等的子集。


 

提示：

1 <= nums.length <= 200
1 <= nums[i] <= 100
```

## 前置知识

-

## 公司

- 暂无

## 思路

## 关键点

-

## 代码

- 语言支持：JavaScript

JavaScript Code:

```javascript
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  let sum = nums.reduce((acc, num) => acc + num, 0);
  if (sum % 2) {
    return false;
  }
  sum = sum / 2;
  const dp = Array.from({ length: sum + 1 }).fill(false);
  dp[0] = true;

  for (let i = 0; i < nums.length; i++) {
    for (let j = sum; j > 0; j--) {
      dp[j] = dp[j] || (j - nums[i] >= 0 && dp[j - nums[i]]);
    }
  }

  return dp[sum];
};
```

**复杂度分析**

令 n 为数组长度。

- 时间复杂度：$O(n∗m)$
- 空间复杂度：$O(n)$
