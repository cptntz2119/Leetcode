/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
//    	// initialize current & max values equal to the value of the first number in nums
//     let current = nums[0];
//     let max = nums[0];   
	
// 	// iterate through nums, starting at the second value
//     for(let i=1; i<nums.length; i++){      
		
// 		// keep track of the current subArray, discarding and resetting if current is negative
//         current = Math.max(nums[i], current + nums[i]);
		
// 		// keep track of max subarray by checking to see if current subarray is greater than max
//         max = Math.max(current, max);
//     }
	
//     return max;
    let currentSum = nums[0], maxSum = nums[0]
    
	// Start from the second element 
    for(let i = 1; i < nums.length; i ++){
		// Check if the current sum is less than 0 to avoid negative sums
		// If it is grater than 0 add it to the sum;
        if(currentSum < 0) 
            currentSum = nums[i];
        else 
            currentSum += nums[i];
		// Always check for the max sum, if the current sum is greater, then replace the maxSum
        if (currentSum > maxSum)
            maxSum = currentSum;
    }
    return maxSum
};