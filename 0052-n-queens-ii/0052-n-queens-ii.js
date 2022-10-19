/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    const cols = new Set();
    const posDiag = new Set();
    const negDiag = new Set();
    let count = 0;
    
    function computePosForRow(row) {
        if (row === n) {
            count++;
            
        }
        
        for (let col = 0; col < n; col++){
            //jump over current position if queens on same col or diagnals
            if (cols.has(col) || posDiag.has(row + col) || negDiag.has(row - col)){
                continue;
            }
            
            cols.add(col);
            //positive diagnal row+col=constant
            //negtive diagnals row-col=constant
            posDiag.add(row + col);
            negDiag.add(row - col);
            
            computePosForRow(row + 1);
            
            cols.delete(col);
            posDiag.delete(row + col);
            negDiag.delete(row - col);
        }  
        
    }
    
    computePosForRow(0);
    return count;
};