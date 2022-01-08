/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// var solution = function (nums, k) {
//     let res = []
//     for (let i = 0; i < nums.length - k; i++) { 
//         let maxValue = maxSlidingWidnow(nums,i,i+k)
//         res.push(maxValue)
//     }

//     return res
// }; 

// var maxSlidingWidnow = function (nums, left, right) { 
//     let max = 0
//     for (let i = left; i < right; i++) { 
//           max = Math.max(nums[i],max)
//     }
//     return max
// }

// "单调" 指的是元素的的 "规律"——递增（或递减）

// "队列" 指的是元素只能从队头和队尾进行操作

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

// 说实话上面的代码不太好理解，以上是用数组实现的，时间复杂度是O(k)么


console.log(solution([1,3,-1,4,0],2))