/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    const map = {};
    let longest = 0;
    let flag = 0;
    for(let ch of s){
        if(!(ch in map))
            map[ch] = 0;
        map[ch]++;
    }
    for (let item in map){
        if (map[item] % 2 ===0){
            longest += map[item]
        }else{
            longest += map[item]-1;
            flag = 1;
        }
    }
    
    return longest + flag;
    
    
    
};