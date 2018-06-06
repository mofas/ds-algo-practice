/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
  if (n === 0) return false;
  if (n === 1) return true;
  while (n % 2 === 0) {
    n = n / 2;
  }
  return n === 1;
};

console.log(isPowerOfTwo(0));
// false

console.log(isPowerOfTwo(1));
// true

console.log(isPowerOfTwo(64));
// true

console.log(isPowerOfTwo(200));
// false
