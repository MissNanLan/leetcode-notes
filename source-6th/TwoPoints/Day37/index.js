
var reversePairs = function (nums) {
    let res = 0
    function merge(nums, start, mid, end) {
        let i = start
        let j = mid + 1
        let temp = []
        while (i <= mid && j <= end) {
            if (nums[i] <= nums[j]) {
                temp.push(nums[i])
                i++
            } else {
                temp.push(nums[j])
                j++
            }
        }
        let ti = start
        let tj = mid + 1
        while (ti <= mid && tj <= end) {
            if (nums[ti] <= 3 * nums[tj]) {
                ti++
            } else {
                res += mid - ti + 1
                tj++
            }
        }
        while (i <= mid) {
            temp.push(nums[i])
            i++
        }
        while (j <= end) {
            temp.push(nums[j])
            j++
        }
        for (let index = 0; index < temp.length; index++) {
            nums[start + index] = temp[index]
        }
    }
    function mergeSort(nums, start, end) {
        if (start >= end) return
        let mid = (start + end) >> 1
        mergeSort(nums, start, mid)
        mergeSort(nums, mid + 1, end)
        merge(nums, start, mid, end)
    }
    mergeSort(nums, 0, nums.length - 1)
    return res
}
console.log(reversePairs([7, 1, 2]))