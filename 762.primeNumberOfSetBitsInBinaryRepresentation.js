/**
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
const binUtil = require('./bin.util');
const { dec2bin } = binUtil;

// brute force
// 340 ms
var countPrimeSetBits = function(L, R) {
  const primeSet = new Set([2, 3, 5, 7, 11, 13, 17, 19]);
  let res = 0;
  for (let i = L; i <= R; i++) {
    const binStr = dec2bin(i);
    let count = 0;
    for (let j = 0; j < binStr.length; j++) {
      if (binStr[j] === '1') count++;
    }
    if (primeSet.has(count)) res++;
  }
  return res;
};

// best sol from web
// 64 ms
function hammingWeight(n) {
  n = n - ((n >> 1) & 0x55555555);
  n = (n & 0x33333333) + ((n >> 2) & 0x33333333);
  return (((n + (n >> 4)) & 0xf0f0f0f) * 0x1010101) >> 24;
}

var countPrimeSetBits = function(L, R) {
  let count = 0;
  let primes = [
    false,
    true,
    true,
    false,
    true,
    false,
    true,
    false,
    false,
    false,
    true,
    false,
    true,
    false,
    false,
    false,
    true,
    false,
    true,
    false
  ];
  for (let i = L; i <= R; i++) {
    // console.log(i, hammingWeight(i));
    if (primes[hammingWeight(i) - 1]) count++;
  }
  return count;
};

// inspiring by discussion board
// 124 ms
var countPrimeSetBits = function(L, R) {
  const primeSet = new Set([2, 3, 5, 7, 11, 13, 17, 19]);
  let res = 0;
  for (let i = L; i <= R; i++) {
    let bits = 0;
    for (let n = i; n > 0; n >>= 1) bits += n & 1;
    if (primeSet.has(bits)) res++;
  }
  return res;
};

console.log(countPrimeSetBits(6, 10));
// 4

console.log(countPrimeSetBits(10, 15));
// 5
