/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let count = 0;
    
    for (let i = 0; i < grid.length; i++){
        for (let j = 0; j < grid[i].length; j++){
            if(grid[i][j] === '1'){
                count++;
                dfs(i, j, grid);
            }
        }
    }
      
    return count;
    
   function dfs(x, y, grid) {
        
        if (x < 0 || y < 0 || x >= grid.length  
         || y >= grid[x].length || grid[x][y] === '0')  {
        return
    }
        
        grid[x][y] = '0';
        
        dfs(x+1,y,grid);
        dfs(x-1,y,grid);
        dfs(x,y+1,grid);
        dfs(x,y-1,grid);
    }
    

    
   
    
};