/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */

// 52 ms
var hammingDistance = function(x, y) {
  let diff = x ^ y;
  let res = 0;
  // console.log('diff', diff);
  while (diff > 0) {
    if (diff % 2 == 1) res++;
    diff = diff >> 1;
  }

  return res;
};

console.log(hammingDistance(1, 4));
// 2
