/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
     if (nums.length === 0) return 0;
     let slow = 1, fast = 1;

     while (fast < nums.length) { 
         if (nums[fast] !== nums[fast - 1]) {
             nums[slow] = nums[fast]
             slow++
         }
        //  else { 
            // nums.splice(f,1)
         // }
         fast++
     }
     console.log('nums',nums)
     return slow;
 };

 console.log(removeDuplicates([1,1,2,2,3,3,4,4]))