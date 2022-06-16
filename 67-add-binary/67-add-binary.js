/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
//     let size = Math.max(a.length, b.length);
//     let c = '';
//     for (let i = 0; i < size; i++){
//         c[i] =parseInt(a[i])+(parseInt(b[i])?parseInt(b[i]) : 0);
//         console.log(parseInt(a[i]),parseInt(b[i]));
//         if(c[i] ===2){
//             c[i+1] +=1;
//         }
//     }
    
//     return c;
    
    return (BigInt(`0b${a}`)+BigInt(`0b${b}`)).toString(2)
    
};