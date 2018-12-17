/**
 * @param {number} n
 * @return {boolean}
 */

const binUtil = require('./bin.util');
const { dec2bin } = binUtil;

var hasAlternatingBits = function(n) {
  const binStr = dec2bin(n);

  for (let i = 0; i < binStr.length - 1; i++) {
    if (binStr[i] == binStr[i + 1]) return false;
  }
  return true;
};

console.log(hasAlternatingBits(7));
// false 111

console.log(hasAlternatingBits(11));
// false 1011

console.log(hasAlternatingBits(5));
// true 101

console.log(hasAlternatingBits(10));
// false 1010
