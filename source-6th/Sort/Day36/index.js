
var swap = function (nums, a, b) {
    const temp = nums[a];
    nums[a] = nums[b];
    nums[b] = temp;
}

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
            swap(nums, i, j)
            i++;
            j--;
        }
    }
    console.log('pivotIndex', pivotIndex)
    helper(nums, start, j)
    helper(nums, i, end)

}
var sortArray = function (nums) {
    helper(nums, 0, nums.length - 1)
    return nums;
}

console.log(sortArray([3, 4, 2, 1, 5, 3]))