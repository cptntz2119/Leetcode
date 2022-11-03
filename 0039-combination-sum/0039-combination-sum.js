/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let result = []; 
    let temp = [];
   
    
    backtracking(0, target);
    return result;
    
    
    function backtracking(index, target){
        if (target === 0) return result.push(temp.slice());
        if (target < 0 ) return;
        if (candidates.length === index) return;
    
        temp.push(candidates[index]);
        backtracking(index, target - candidates[index]);
        temp.pop();
        backtracking(index+1, target);
    
        
    }
    
    
    
    
    

    
};