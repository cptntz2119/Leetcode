/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
//     let map = {};
//     for (const item of nums){
//         if(map[item]){
//            return true;
//            }else{
//              map[item]=true;  
//            }    
        
//     }
//     return false;
    
     nums.sort();
    for(let i=0 ;i<nums.length-1; i++){
        if(nums[i] == nums[i+1])    return true;
    }
    return false;
};