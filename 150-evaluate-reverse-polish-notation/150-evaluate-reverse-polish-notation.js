/**
 * @param {string[]} tokens
 * @return {number}
 */
// let a, b
// const evaluate = {"+": ()=>a+b, "-": ()=>a-b, "*": ()=>a*b, "/": ()=>~~(a/b)}

// var evalRPN = function(tokens) {
//     let stack = []
//     for (let t of tokens) {
//         if (evaluate[t]) {
//             b = stack.pop(), a = stack.pop()
//             stack.push(evaluate[t]())
//         } else stack.push(~~t)
//     }
//     return stack[0]
// };

function evalRPN(tokens) {
  let stack = [];
  let ops = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b >= 0 ? Math.floor(a / b) : Math.ceil(a / b),
  };
  for (let t of tokens) {
    if (ops[t]) {
      let top = stack.pop();
      let second = stack.pop();
      stack.push(ops[t](second, top));
    } else {
      stack.push(Number(t));
    }
  }
  return stack.pop();
};