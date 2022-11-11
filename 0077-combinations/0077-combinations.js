/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    if (n === 1 && k === 1) return [[1]];
    const result = [];
    
    
    function backtrack  (currentSolution, startNum, result) {
        if (currentSolution.length === k) {
            result.push([...currentSolution]);
        }
        for (let i = startNum; i<=n; i++){
            currentSolution.push(i);
             // console.log(currentSolution)
            backtrack(currentSolution, i+1, result);
            currentSolution.pop();
             // console.log("pop",currentSolution)
        }
        
    }
    
    backtrack([],1,result);
    return result;
};