## 题目地址(912. 排序数组)

https://leetcode-cn.com/problems/sort-an-array/

## 题目描述

```
给你一个整数数组 nums，请你将该数组升序排列。

 

示例 1：

输入：nums = [5,2,3,1]
输出：[1,2,3,5]


示例 2：

输入：nums = [5,1,1,2,0,0]
输出：[0,0,1,1,2,5]


 

提示：

1 <= nums.length <= 5 * 104
-5 * 104 <= nums[i] <= 5 * 104
```

## 前置知识

-

## 公司

- 暂无

## 思路

快速排序和归并排序都是分支思想来进行排序的算法， 并且二者都非常流行。 快速排序的核心点在于选择轴元素。

每次我们将数组分成两部分，一部分是比 pivot（轴元素）大的，另一部分是不比 pivot 大的。 我们不断重复这个过程， 直到问题的规模缩小的寻常（即只有一个元素的情况）。

快排的核心点在于如何选择轴元素，一般而言，选择轴元素有三种策略：

- 数组最左边的元素

- 数组最右边的元素

- 数组中间的元素（我采用的是这种，大家可以尝试下别的）

- 数组随机一项元素

## 代码

- 语言支持：JavaScript

JavaScript Code:

```javascript
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var swap = function (nums, a, b) {
  const temp = nums[a];
  nums[a] = nums[b];
  nums[b] = temp;
};

var helper = function (nums, start, end) {
  if (start >= end) return;

  const pivotIndex = start + ((end - start) >>> 1);
  const pivot = nums[pivotIndex];

  let i = start;
  let j = end;
  while (i <= j) {
    while (nums[i] < pivot) i++;
    while (nums[j] > pivot) j--;
    if (i <= j) {
      swap(nums, i, j);
      i++;
      j--;
    }
  }
  console.log("pivotIndex", pivotIndex);
  helper(nums, start, j);
  helper(nums, i, end);
};
var sortArray = function (nums) {
  helper(nums, 0, nums.length - 1);
  return nums;
};

console.log(sortArray([3, 4, 2, 1, 5, 3]));
```

**复杂度分析**

令 n 为数组长度。

- 时间复杂度：$O(n^2)$
- 空间复杂度为 O(logn)

## TODO

试着轴元素换成别的
