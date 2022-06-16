/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    // const map = {};
    // for (const ele of nums){
    //     if (!map[ele]){
    //         map[ele] = 0;
    //     }
    //     map[ele]++;
    // }
    // for (const item in map){
    //     if (map[item]>= nums.length/2){
    //         return item
    //     }
    // }
    
    nums.sort((a,b)=>a-b)
     return nums[Math.floor(nums.length/2)]
};