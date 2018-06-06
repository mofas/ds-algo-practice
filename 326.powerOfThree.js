/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
  if (n === 0) return false;
  if (n === 1) return true;
  while (n % 3 === 0) {
    n = n / 3;
  }
  return n === 1;
};

// best sol from web
// var isPowerOfThree = function(n) {
//   while (n >= 1) {
//     if (n === 1) return true;
//     n = n / 3;
//   }
//   return false;
// };

console.log(isPowerOfThree(0));
// false

console.log(isPowerOfThree(1));
// true

console.log(isPowerOfThree(27));
// true

console.log(isPowerOfThree(9));
// true

console.log(isPowerOfThree(45));
// false
