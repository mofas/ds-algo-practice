/**
 * @param {number} n
 * @return {number}
 */

// top-bottom DP
var integerReplacement = function(n) {
  const cache = {};
  const helper = i => {
    if (i === 1) return 0;

    if (cache[i - 1]) return cache[i - 1];
    let ret = 0;
    if (i % 2 === 0) {
      ret = 1 + helper(i / 2);
      cache[i - 1] = ret;
    } else {
      ret = 1 + Math.min(helper(i + 1), helper(i - 1));
    }
    return ret;
  };

  return helper(n);
};

// bottom-top DP
// use too many memory...
// var integerReplacement = function(n) {};

// best sol from web
// var integerReplacement = function(n) {
//   let iterations = 0;

//   while (n !== 0) {
//     if ((n & 1) === 0) {
//       n >>= 1;
//     } else if (n === 3 || (n & 3) === 1) {
//       n--;
//     } else {
//       n++;
//     }
//     iterations++;
//   }

//   return --iterations;
// };

console.log(integerReplacement(8));
// 3

console.log(integerReplacement(7));
// 4

console.log(integerReplacement(65535));
// 17

console.log(integerReplacement(3734516));
// 27
