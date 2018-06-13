/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
  const primes = [2, 3, 5];
  const len = primes.length;
  const ret = new Array(n);
  const idx = new Array(len).fill(0);
  const val = new Array(len).fill(1);

  let next = 1;
  for (let i = 0; i < n; i++) {
    ret[i] = next;

    next = Infinity;
    for (let j = 0; j < len; j++) {
      if (val[j] === ret[i]) val[j] = ret[idx[j]++] * primes[j];
      next = Math.min(next, val[j]);
    }
  }

  return ret[n - 1];
};

console.log(nthUglyNumber(10));
// 12
