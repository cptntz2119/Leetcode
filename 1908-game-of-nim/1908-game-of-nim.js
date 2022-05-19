/**
 * @param {number[]} piles
 * @return {boolean}
 */
var nimGame = function(piles) {
    let ans = 0;
        piles.forEach((ele)=>{
            ans ^= ele;
        })
        return ans !==0;
        
};