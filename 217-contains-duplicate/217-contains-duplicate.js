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
 //---------------------   
    //  nums.sort();
    // for(let i=0 ;i<nums.length-1; i++){
    //     if(nums[i] == nums[i+1])    return true;
    // }
    // return false;
    //--------------
    return new Set(nums).size !== nums.length;
    //Returns a boolean if the size of the set is not equal to the length of the array thus there is a duplicate since sets only count unique entries once.
};