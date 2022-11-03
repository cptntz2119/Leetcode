/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const result = [];
       
    function backtrcking(temp = [], sum = 0, index =0){
        if (sum > target) return;       
        if (sum === target) result.push(temp);
    
        for (let i = index; i< candidates.length; i++) {
            backtrcking([...temp, candidates[i]], sum+candidates[i], i); 
        }
    }
        backtrcking();
        return result;
   
    
//     function permute(arr=[], sum=0, idx=0) {
//         if(sum > target) return;
//         if(sum === target) result.push(arr);
        
//         for(let i = idx; i < candidates.length; i++) {
//             permute([...arr, candidates[i]], sum+candidates[i], i);
//         }
//     }
//     permute()
//     return result;
        
    
//-------------------------------    
//     let result = []; 
//     let temp = [];
   
    
//     backtracking(0, target);
//     return result;
    
    
//     function backtracking(index, target){
//         if (target === 0) return result.push(temp.slice());
//         if (target < 0 ) return;
//         if (candidates.length === index) return;
    
//         temp.push(candidates[index]);
//         backtracking(index, target - candidates[index]);
//         temp.pop();
//         backtracking(index+1, target);
    
        
//     }
    
    
    

    
};