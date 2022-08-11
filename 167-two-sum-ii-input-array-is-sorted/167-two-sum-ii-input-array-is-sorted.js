/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    
  // for(let start = 0, end = numbers.length-1; start < end;){
  //       let sum = numbers[start] + numbers[end]
  //       if(sum === target)return [++start, ++end]
  //       else sum > target ? end-- : start++
  //   }
   //---------------------- 
//     let left = 0;
//     let right = numbers.length - 1;

//     while (left < right) {
//         let sum = numbers[left] + numbers[right];
//         if (sum === target) {
//             return [left + 1, right + 1];
//         } else if (sum > target) {
//             right--;
//         } else {
//             left++;
//         }
//     }
    
    //---------------------
    const map = {};
    for (let i=0; i< numbers.length;i++){
        const seen = map[target-numbers[i]]
        if(seen !== undefined){
            return [seen+1, i+1]
        }
        
        map[numbers[i]]=i;
    }
};