/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
// 104ms
var asteroidCollision = function(asteroids) {
  let stack = [];
  let next = asteroids;
  let i = 0;
  while (stack.length !== next.length) {
    stack = next;
    next = [];
    i = 0;
    for (; i < stack.length - 1; i++) {
      // console.log(stack[i], stack[i + 1]);
      if (stack[i] > 0 && stack[i + 1] < 0) {
        if (stack[i] + stack[i + 1] > 0) {
          next.push(stack[i]);
        } else if (stack[i] + stack[i + 1] < 0) {
          next.push(stack[i + 1]);
        }
        i++;
      } else {
        next.push(stack[i]);
      }
    }
    while (i < stack.length) next.push(stack[i++]);
    // console.log(next);
  }
  return stack;
};

// best
// 64ms
/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
// var asteroidCollision = function(asteroids) {
//   let stack = [asteroids[0]];
//   for (let i = 1; i < asteroids.length; i++) {
//     let cur = asteroids[i];
//     if (cur > 0) stack.push(cur);
//     else {
//       let idx = stack.length - 1;
//       let curVal = Math.abs(cur);
//       while (stack[idx] <= curVal) {
//         if (stack[idx] < 0) {
//           stack.push(cur);
//           break;
//         }
//         if (stack[idx] === curVal) {
//           stack.pop();
//           break;
//         }
//         stack.pop();
//         if (--idx < 0) break;
//       }
//       if (idx < 0) stack.push(cur);
//     }
//   }
//   return stack;
// };

console.log(asteroidCollision([5, 10, -5]));
// [5, 10]

console.log(asteroidCollision([8, -8]));
// []

console.log(asteroidCollision([10, 2, -5]));
// [10]

console.log(asteroidCollision([-2, -1, 1, 2]));
// [-2, -1, 1, 2]
