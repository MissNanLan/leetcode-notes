
## 题目地址(1. 两数之和)

https://leetcode-cn.com/problems/two-sum/

## 题目描述

```
给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

你可以按任意顺序返回答案。

 

示例 1：

输入：nums = [2,7,11,15], target = 9
输出：[0,1]
解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。


示例 2：

输入：nums = [3,2,4], target = 6
输出：[1,2]


示例 3：

输入：nums = [3,3], target = 6
输出：[0,1]


 

提示：

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
只会存在一个有效答案

进阶：你可以想出一个时间复杂度小于 O(n2) 的算法吗？
```

## 前置知识

- 

## 公司

- 暂无

## 思路

哈希表
 

## 代码

- 语言支持：JavaScript

JavaScript Code:

```javascript

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

```


**复杂度分析**

- 时间复杂度：$O(n)$
- 空间复杂度：$O(n)$


