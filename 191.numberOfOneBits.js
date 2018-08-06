/**
 * @param {number} n - a positive integer
 * @return {number}
 */

// 72 ms
var hammingWeight = function(n) {
  const bitStr = n.toString(2);
  let ret = 0;
  for (let i = 0; i < bitStr.length; i++) {
    if (bitStr[i] === '1') ret++;
  }
  return ret;
};

// best sol from web
// 48 ms
var hammingWeight = function(n) {
  var sum = 0;
  while (n != 0) {
    ++sum;
    n &= n - 1;
  }
  return sum;
};

console.log(hammingWeight(11));
// 3

console.log(hammingWeight(128));
// 1

console.log(hammingWeight(2147483648));
// 1
