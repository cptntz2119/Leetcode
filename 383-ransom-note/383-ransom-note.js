/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    for (const letter of ransomNote) {
        if (!magazine.includes(letter)) return false;
        magazine = magazine.replace(letter, '');
    }
    
    return true;
};