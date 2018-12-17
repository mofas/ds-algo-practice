/**
 * @param {number} N
 * @return {number}
 */

// 56ms
var monotoneIncreasingDigits = function(N) {
  const numsArr = String(N)
    .split('')
    .map(Number);

  const n = numsArr.length;

  let max = Infinity;
  for (let i = n - 1; i > 0; i--) {
    if (numsArr[i] < numsArr[i - 1]) {
      numsArr[i - 1]--;
      for (let j = i; j < n; j++) {
        numsArr[j] = 9;
      }
    }
    // console.log(numsArr);
  }

  return Number(numsArr.join(''));
};

console.log(monotoneIncreasingDigits(10));
// 9

console.log(monotoneIncreasingDigits(1234));
// 1234

console.log(monotoneIncreasingDigits(1000));
// 999

console.log(monotoneIncreasingDigits(332));
// 299
