/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const absRevs = Math.abs(x).toString().split('').reverse().join('');
    if (absRevs > 2**31) return 0;
    return absRevs*Math.sign(x);
    
    
};