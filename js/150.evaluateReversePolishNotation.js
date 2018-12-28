/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  const stack = [];
  const opMap = {
    '+': (a, b) => a + b,
    '-': (a, b) => b - a,
    '*': (a, b) => a * b,
    '/': (a, b) => {
      let ret = b / a;
      return ret > 0 ? Math.floor(ret) : Math.ceil(ret);
    }
  };

  for (const token of tokens) {
    if (opMap[token]) {
      const n1 = stack.pop();
      const n2 = stack.pop();
      stack.push(opMap[token](n1, n2));
    } else {
      stack.push(Number(token));
    }
    // console.log(stack);
  }
  return stack[0];
};

console.log(evalRPN(['2', '1', '+', '3', '*']));
// 9

console.log(evalRPN(['4', '13', '5', '/', '+']));
// 6

console.log(
  evalRPN(['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+'])
);
// 22
