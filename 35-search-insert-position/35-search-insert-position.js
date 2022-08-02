/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length-1;
    
    while (left <= right){
        let middle = Math.floor((right+left)/2);
        
        if (nums[middle]===target){
            return middle;
        }else if (nums[middle] > target){
            
            right = middle -1;
        }else {
            left = middle +1;
        } 
        
    }
    
    return left;
    // if target is not found, loop will stop at the point where left finished updating.
    
//     while (low <= high) {
//         let mid = Math.floor((high + low) / 2);
//         if (nums[mid] == target) return mid;
//         else if (nums[mid] > target) {
//             high = mid - 1;
//         } else {
//             low = mid + 1;
//         }
//     }
//     return low;
    
};