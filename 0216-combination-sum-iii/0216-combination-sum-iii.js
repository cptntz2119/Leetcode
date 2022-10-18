/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
//     let temp = [];
//     let result = [];
//     let sum = 0;
//     let index = 1;
    
//     backtracking(temp, sum, index);
//     return result;
    
//     function backtracking(temp, sum, index) {
//         if (sum > n || temp.length > k) return;
//         if (sum === n && temp.length === k) {
//             result.push([... temp]);
//         }
        
//         for (let i = index; i <= 9; i++){
//             temp.push(i);
//             console.log(temp,i,index)
//             backtracking(temp, sum + i, i + 1);
            
//             temp.pop();
//         }
//     }
    
    let max = n >= 9 ? 9 : n;	// we don't need digits larger than the number
	let result = [];
	// sum is the remaining sum to be matched
	// count is the remaining count of numbers we need to include
	// start is the least number higher than the last added number
	function recursive(sum, count, start, arr){
		if(sum === 0 && count === 0){ // complete sum has been matched and all count has been exhausted
			result.push([...arr]);
			return
		}
		if(count === 0 || start > sum) // count has been exhausted but sum couldn't be matched OR all remaining numbers are larger than remaining sum
			return
		for(let i = start; i <= max; i++){
			if(i <= sum)
				recursive(sum-i, count-1, i+1, [...arr, i])
			else
				break;	// no need of checking numbers larger than remainig sum
		}
	}
	recursive(n, k, 1, []);
	return result;
    
};