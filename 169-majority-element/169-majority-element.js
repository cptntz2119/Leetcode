/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const map = {};
    for (const ele of nums){
        if (!map[ele]){
            map[ele] = 0;
        }
        map[ele]++;
        if (map[ele]>= nums.length/2){
            return ele;
        }
    
    }
    
        
   //------------------- 
    // nums.sort((a,b)=>a-b)
    //  return nums[Math.floor(nums.length/2)]
};