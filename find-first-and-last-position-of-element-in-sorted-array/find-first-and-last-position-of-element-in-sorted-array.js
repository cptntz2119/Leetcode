/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    
    let start = 0;
    let end = nums.length-1;
    const result = [-1, -1];
    
    while (start <= end){
        let mid = Math.floor((start+end)/2);
    
        if(nums[mid]<target){
            start = mid+1;
        }else if ((nums[mid])>target){
            end = mid-1;
        }else {
            let left = mid;
            let right =mid;
            
            while (nums[left] === target && left >=0){
                left -= 1;
               
            }
             result[0]=left+1;
            while (nums[right] === target && right <= nums.length-1){
                right += 1;
            }
            result[1]=right-1;
            return result;
        }
    }
    
    
    
    
    return result;
};