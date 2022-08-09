/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
//     let sortedArr = nums.sort((a,b)=>a-b);
//     console.log(sortedArr);
    
//     for (let i=0; i< nums.length; i++){
//         if (sortedArr[i]===0){
//             sortedArr.push(sortedArr.shift(sortedArr[i]))
//         }
//     }
//     return sortedArr;
    // failed at input [0,1]
    
     var idx = 0;
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[idx] = nums[i];
      nums[i] = idx === i ? nums[i] : 0;
      idx++;
    }
  }
};