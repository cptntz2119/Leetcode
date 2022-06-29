/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let maxLength = 0,
  left = 0,
  chars = new Set();

  for (let right = 0; right < s.length; right++) {
    while (chars.has(s[right])) {
      chars.delete(s[left]);
      left++;
    }

    chars.add(s[right]);
    maxLength = Math.max(maxLength, chars.size);
  }

  return maxLength;
    
};