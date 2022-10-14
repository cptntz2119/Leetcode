/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    let temp = [];
    let result = [];
    let sum = 0;
    let index = 1;
    
    backtracking(temp, sum, index);
    return result;
    
    function backtracking(temp, sum, index) {
        if (sum > n || temp.length > k) return;
        if (sum === n && temp.length === k) {
            result.push([... temp]);
        }
        
        for (let i = index; i <= 9; i++){
            temp.push(i);
            backtracking(temp, sum + i, i + 1);
            temp.pop();
        }
    }
    
};