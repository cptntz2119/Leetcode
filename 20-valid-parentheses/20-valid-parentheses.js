/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {
  if (!s) {
    return true;
  }

  const stack = [];
  const map = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
      stack.push(s[i]);
    } else if (map[s[i]] !== stack.pop()) {
      // console.log("else if stack", s[i]);
      return false;
    }
    // console.log(stack);
  }
  return stack.length === 0;
};