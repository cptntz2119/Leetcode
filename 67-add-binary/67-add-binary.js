/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
// // i and j are the indices of the digits in the strings //
//     let i = a.length - 1; 
//     let j = b.length - 1;  
    
//     let carry = 0;    // carry bit for addition of two digits //
//     let result = '';  // string to hold the result of the addition of a and b in binary form //
//     while (i >= 0 || j >= 0) {  // while there are still digits to process //
//         let sum = carry; // add the carry // 
//         if (i >= 0) {
//             sum += a[i--] - '0'; // add in the next digit of a //
//         }
//         if (j >= 0) {
//             sum += b[j--] - '0'; // add in the next digit of b // 
//         }
//         result = (sum % 2) + result; // store the next digit // 
//         carry = Math.floor(sum / 2); // calculate the next carry //
//     }
//     return carry ? carry + result : result; // return the result //
 //--------------------------
    // We use 0b prefix to show that the given string should be treated as a binary number
  // this is parsed as BigInt, the constraints provided show that the numbers could be outside the range
  // of 32 bit integers (unless used BigInt on both sides, bitwise operators treat their operands as 32 bit integers)
  
    // return (BigInt(`0b${a}`)+BigInt(`0b${b}`)).toString(2)
    
    
    //---------
     
    let index1 = a.length - 1;
    let index2 = b.length - 1;
    let carry = 0;
    let result = '';
    
    while(index1 >= 0 || index2 >= 0) {
        
        let value1 = a[index1] || 0;
        let value2 = b[index2] || 0;
        
        let sum = +value1 + +value2 + carry;
        
        if(sum === 0) {
            carry = 0;
            result = '0' + result;
        }
        else if(sum === 1) {
            carry = 0;
            result = '1' + result;
        }
        else if(sum === 2) {
            carry = 1;
            result = '0' + result;
        }
        else {
            carry = 1
            result = '1' + result;
        }
        
        index1--;
        index2--;
    }
    
    if(carry > 0) result = carry + result;
    return result;
    
};