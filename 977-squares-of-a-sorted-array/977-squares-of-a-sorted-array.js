/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    // return nums
    //              .map(ele => Math.pow(ele,2))
    //              .sort((a,b)=>a-b)
        let left = 0;
        let right = nums.length-1;
    
        const result = [];
    
       for (let i= nums.length-1; i>=0; i--){
            if (Math.pow(nums[left],2) < Math.pow(nums[right], 2)){
                result[i] = Math.pow(nums[right],2);
                right--;
            }else{
                result[i] = Math.pow(nums[left],2);
                left++;
            }
        }
    
          return result;           
                     
};