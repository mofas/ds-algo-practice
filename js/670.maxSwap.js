/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function(num) {
  const a = Array.from(String(num)).map(d => Number(d));

  const len = a.length;
  const cache = Array(10)
    .fill(0)
    .map(() => []);

  for (let i = 0; i < len; i++) {
    const e = a[i];
    cache[e].push(i);
  }

  // console.log(cache);

  for (let i = 0; i < len; i++) {
    const e = a[i];
    for (let j = 9; j > e; j--) {
      const jLen = cache[j].length;
      for (let k = jLen - 1; k >= 0; k--) {
        const n = cache[j][k];
        const m = i;
        if (j > e && n > m) {
          // console.log('find', n, m);
          const temp = a[n];
          a[n] = a[m];
          a[m] = temp;
          return Number(a.join(''));
        }
      }
    }
  }
  return Number(a.join(''));
};

console.log(maximumSwap(2736)); // 7236
console.log(maximumSwap(9973)); // 9973
console.log(maximumSwap(9912)); // 9921
console.log(maximumSwap(1993)); // 9913
