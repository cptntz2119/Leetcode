/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.nums = nums;
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    return this.nums;
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    const shuffled = this.nums.slice();
    const length = shuffled.length;
    const swap = (arr, i, j) =>{
        let temp = arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
    }
   for (let i = 0; i < length; i++) 
        swap(shuffled, i, Math.floor(Math.random() * length));
    
    return shuffled;
    
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */