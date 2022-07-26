/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
    let sum=0;
    sortedArr = costs.sort((a,b)=>a[0]-a[1]-(b[0]-b[1]));
    mid = Math.floor(costs.length/2);
    for (let i =0; i<costs.length;i++){
        if(i<mid){
            sum+= sortedArr[i][0]
        }else{
            sum+=sortedArr[i][1]
        }
        
    }
    return sum;
    
//     Sort the persons in the ascending order by price_A - price_B parameter, which indicates the company additional costs.

// To minimise the costs, send n persons with the smallest price_A - price_B to the city A, and the others to the city B.


    
};