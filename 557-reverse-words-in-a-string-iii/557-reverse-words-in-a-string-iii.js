/**
 * @param {string} s
 * @return {string}
 */


var reverseWords = function(s) {
     // return s.split(' ').map(w => w.split('').reverse().join('')).join(' ');
    
    //---------------
//     let result = [];
//     for (const item of s.split(' ')) {
//         result.push(item.split('').reverse().join(''))
//     }

//     return result.join(' ');
    //-------------
    let words = s.split(" ");
    let result = [];
    result = words.map((word)=>{ 
        return ((word.split("")).reverse()).join("");
       //str->arr->str
    })
    return result.join(" ");
};
