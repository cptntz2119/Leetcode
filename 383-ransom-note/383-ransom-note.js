/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let magArr = magazine.split('');
let ranArr = ransomNote.split('');

for (let i = 0; i < ranArr.length; i++) {
  if(magArr.includes(ranArr[i])){
    const magIndex = magArr.indexOf(ranArr[i]);
    if (magIndex > -1) {
      magArr.splice(magIndex, 1); // 2nd parameter means remove one item only
    }
  }else{
    return false;
  }
}
return true;
};