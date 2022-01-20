

## 题目描述
```
You are given a list of integers nums representing coordinates of houses on a 1-dimensional line. You have 3 street lights that you can put anywhere on the coordinate line and a light at coordinate x lights up houses in [x - r, x + r], inclusive. Return the smallest r required such that we can place the 3 lights and all the houses are lit up.

Constraints

n ≤ 100,000 where n is the length of nums
Example 1
Input
nums = [3, 4, 5, 6]
Output
0.5
Explanation
If we place the lamps on 3.5, 4.5 and 5.5 then with r = 0.5 we can light up all 4 houses.

```
## 前置知识

能力检测 + 最左二分的典型题目

```javascript

function solve(nums) {
    console.log(nums);
    if (nums.length < 3) return 0
    nums.sort((a, b) => a - b)
    let l = 0, r = nums[nums.length - 1]
    while (l <= r) {
        const m = l + ((r - l) >>> 1)
        if (find(m, nums)) r = m - 1
        else l = m + 1
    }
    if (l > nums[nums.length - 1] || !find(l, nums)) return -1
    return l / 2
}

function find(mid, nums) {
    let range = nums[0] + mid, ligths = 0

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > range) {
            ligths += 1
            range = nums[i] + mid
        }
    }

    return ligths <= 2
}

console.log(solve([1,2,95,96,97,100]))
```

## TODO

https://leetcode-solution.cn/solutionDetail?type=3&id=40&max_id=2