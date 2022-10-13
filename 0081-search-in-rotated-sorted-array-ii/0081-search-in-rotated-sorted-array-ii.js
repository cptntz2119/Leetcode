/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    // const s = new Set(nums); s is object
    // let set = [... s]; make s to be array
    const set = [... new Set(nums)];
    
    let left = 0;
    let right = set.length - 1;
    console.log(set);
    
    while(left <= right) {
        let pivot = Math.floor((left+right)/2);
        
        if (set[pivot] === target) return true;
        
        if (set[left] <= set[pivot]){
            if (set[left] <= target && target <= set[pivot]){
                right = pivot -1;
            }else{
                left = pivot +1;
            }
        }else{
            if(set[pivot] <= target && target <= set[right]){
                left = pivot + 1;
            }else{
                right = pivot -1;
            }
        }
    }
    return false;
};