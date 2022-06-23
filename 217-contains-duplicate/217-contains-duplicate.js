/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let map = {};
    for (const item of nums){
        if(map[item]){
           return true;
           }else{
             map[item]=true;  
           }
        
        
        
    }
    return false;
};