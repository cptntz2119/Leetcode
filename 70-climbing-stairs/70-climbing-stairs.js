/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    //fibonacci
    if (n === 1) return 1;
    if (n === 2) return 2;
    let f1 = 1, f2 = 2;
    for (let i = 3; i <= n; i++) {
        let tmp = f2 + f1;
        f1 = f2;
        f2 = tmp;
    }
    return f2;
    // if (n <= 2) return n;
    // return climbStairs(n - 2) + climbStairs(n - 1);
    

};