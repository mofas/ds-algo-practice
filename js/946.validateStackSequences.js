/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */

// 56ms, beat 100%
var validateStackSequences = function(pushed, popped) {
  let stack = [];
  const m = pushed.length;
  const n = popped.length;
  let i = 0;
  let j = 0;
  while (j < n) {
    const t = popped[j];
    if (stack[stack.length - 1] !== t) {
      //push
      while (true) {
        if (i === m) return false;
        if (pushed[i] === t) {
          i++;
          break;
        }
        stack.push(pushed[i]);
        i++;
      }
    } else {
      stack.pop();
    }
    // console.log(stack, i, j);
    j++;
  }
  return true;
};

// another best sol
// var validateStackSequences = function(pushed, popped) {
//   var stack = [];
//   var index = 0;
//   for (var i = 0; i < pushed.length; i++) {
//       stack.push(pushed[i]);
//       while (stack.length && stack[stack.length - 1] === popped[index]) {
//           stack.pop();
//           index++;
//       }
//   }
//   return stack.length === 0;
// };

console.log(validateStackSequences([1, 2, 3, 4, 5], [4, 5, 3, 2, 1]));
// true

console.log(validateStackSequences([1, 2, 3, 4, 5], [4, 3, 5, 1, 2]));
// false
