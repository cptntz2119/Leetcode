/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
   
  //   var idx = 0;
  //   for (var i = 0; i < nums.length; i++) {
  //       if (nums[i] !== 0) {
  //     nums[idx] = nums[i];
  //     nums[i] = idx === i ? nums[i] : 0;
  //     idx++;
  //       }
  //     //console.log(nums);
  // }
    
    for(var i = nums.length;i--;){
        if(nums[i]===0){
            nums.splice(i,1);//delete that 0, and then push 0 at the end
            console.log(nums)
            nums.push(0);
        }
    }
};