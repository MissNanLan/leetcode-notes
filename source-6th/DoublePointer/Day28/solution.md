
## 题目地址(239. 滑动窗口最大值)

https://leetcode-cn.com/problems/sliding-window-maximum/

## 题目描述

```
给你一个整数数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。

返回滑动窗口中的最大值。

 

示例 1：

输入：nums = [1,3,-1,-3,5,3,6,7], k = 3
输出：[3,3,5,5,6,7]
解释：
滑动窗口的位置                最大值
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7


示例 2：

输入：nums = [1], k = 1
输出：[1]


示例 3：

输入：nums = [1,-1], k = 1
输出：[1,-1]


示例 4：

输入：nums = [9,11], k = 2
输出：[11]


示例 5：

输入：nums = [4,-2], k = 2
输出：[4]

 

提示：

1 <= nums.length <= 105
-104 <= nums[i] <= 104
1 <= k <= nums.length
```


## 思路
 
 1、 暴力


## 代码

- 语言支持：JavaScript

JavaScript Code:

```javascript

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

var solution = function (nums, k) {
    let res = []
    for (let i = 0; i < nums.length - k; i++) { 
        let maxValue = maxSlidingWidnow(nums,i,i+k)
        res.push(maxValue)
    }

    return res
}; 

var maxSlidingWidnow = function (nums, left, right) { 
    let max = 0
    for (let i = left; i < right; i++) { 
          max = Math.max(nums[i],max)
    }
    return max
}


- 时间复杂度: O(n * k)

- 空间复杂度: O(1)

```


**复杂度分析**

令 n 为数组长度。

- 时间复杂度: O(n * k)
- 空间复杂度: O(1)


## 思路2

## 代码

- 语言支持：JavaScript

JavaScript Code:

```javascript

双端队列

// "单调" 指的是元素的的 "规律"——递增（或递减）

// ”双端队列“ 插入和删除操作限定在队列的两边进行

// 这里应该是递增

var maxSlidingWindow = function (nums, k) {
    const dequeue = [];
    const ans = [];
    for (let i = 0; i < nums.length; i++) {
        // 如果小于当前元素出队列
        while (dequeue.length && nums[i] >= nums[dequeue[dequeue.length - 1]]) {
            dequeue.pop();
        }
        dequeue.push(i);
        while (dequeue[0] <= i - k) {
            dequeue.shift();
        }
        if (i >= k - 1) ans.push(nums[dequeue[0]]);
    }
    return ans;
};

// 说实话上面的代码不太好理解，以上是用数组实现的队列，时间复杂度是O(k)么


```