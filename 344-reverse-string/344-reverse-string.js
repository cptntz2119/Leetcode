/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
//     let left=0;
//     let right= s.length-1;
    
//     while(left<right){
//         let temp=s[left];
//         s[left]=s[right];
//         s[right]=temp;
//         left++;
//         right--;
//     }
    //--------------
  //    let i = 0, j = s.length - 1;
  // while (i < j) {
  //   // ES6 destructuring assignment
  //   [s[i], s[j]] = [s[j], s[i]];
  //   i++;
  //   j--;
  // }
    //recursing ------
    const n = s.length;
    const mid = Math.ceil(s.length / 2) - 1;
    
    const helper = (index) => {
        if(index > mid) return s;
        [s[index], s[n - index - 1]] = [s[n - index - 1], s[index]]
        helper(index + 1);
    };
    
    helper(0);
};