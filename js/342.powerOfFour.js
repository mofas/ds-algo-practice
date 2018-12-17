/**
 * @param {number} num
 * @return {boolean}
 */

// 96 ms
var isPowerOfFour = function(num) {
  return !!(!(num & (num - 1)) && num & 0x55555555);
};

// best sol from web
// var isPowerOfFour = function(num) {
//   if (num == 0) {
//     return false;
//   }
//   while (num % 4 == 0) {
//     num /= 4;
//   }
//   return num == 1;
// };

console.log(isPowerOfFour(1));
// true

console.log(isPowerOfFour(16));
// true

console.log(isPowerOfFour(256));
// true

console.log(isPowerOfFour(2));
// false

console.log(isPowerOfFour(8));
// false

console.log(isPowerOfFour(255));
// false

console.log(isPowerOfFour(-2147483648));
// false

console.log(isPowerOfFour(-2147483647));
// false
