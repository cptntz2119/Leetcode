/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.original = [...nums];
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    return this.original;
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    const shuffled = [...this.original];
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