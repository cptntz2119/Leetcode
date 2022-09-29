/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    //find the boundary 'O' first and then marked as visited in dfs
    for (let row = 0; row < board.length; row++){
        for (let col = 0; col < board[row].length; col++){
            if (board[row][col] === 'O' && (row === 0 || col === 0 || row === board.length-1 || col === board[row].length - 1)){
                
                dfs(row, col, board);
            }
        }
    }
    
    //change the board to expected result
    for (let row = 0; row < board.length; row++){
        for (let col = 0; col < board[row].length; col++){
            if (board[row][col] === 'visited'){
                board[row][col] = 'O';
            }else {
                board[row][col] = 'X';
            }
        }
    }
    
    function dfs(x, y) {
        if (x < 0 || y < 0 || x >= board.length || y >= board[x].length || board[x][y] === 'X' || board[x][y] === 'visited'){
            return;
        }
        
        board[x][y] = 'visited';
        
        dfs(x+1, y);
        dfs(x-1, y);
        dfs(x, y+1);
        dfs(x, y-1);
        
        
    }
    
    
    
};