/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    
    let numFresh = 0;
    let minutes = 0;
    let rottenQ = [];
    //find all fresh and rotten, and put rotten in queue
    for (let row = 0 ; row < grid.length; row++){
        for (let col = 0; col < grid[row].length; col++){
            if (grid[row][col] === 1){
                numFresh++;
            };
            if(grid[row][col] === 2){
                rottenQ.push([row, col]);
            };


        }

    }

    const m = [[0,-1], [0, 1], [-1, 0], [1,0]];
    
    // keep spreading if there still fresh oranges left 
	// and there still rotten orages left to be spread
    while(rottenQ.length && numFresh){

        let rottingQ =[]; //find the fresh ones near rotten

        while(rottenQ.length){
            let [x, y] = rottenQ.shift();
            for (let i = 0; i < m.length; i++){
                let [x2, y2] = [x + m[i][0], y+m[i][1]];
                // if adjacency grid is fresh orange:
				// make it rotten, decrease total fresh oranges
				// and push it into stack that will be used for
				// next round of speading.
                if (grid[x2] && grid[x2][y2] === 1){
                    grid[x2][y2] = 2;
                    numFresh--;

                    rottingQ.push([x2, y2]);
                }
            }
        }

        // rotting oranges now became rotten oranges, 
		// it will continue to spread until nothing left!
        rottenQ = rottingQ;
        minutes++;
    }


    
    // if there is any fresh oranges left, return -1, otherwise, return minute;
    return numFresh === 0 ? minutes : -1;
}