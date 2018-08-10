/**
 * @param {string} input
 * @return {number[]}
 */

// 52ms beat 100%
// it is actually DP
var diffWaysToCompute = function(input) {
  let res = [];
  const n = input.length;
  let i = 0;
  const arr = [];
  while (i < n) {
    // console.log(input[i]);
    if (/[\-\+\*]/.test(input[i])) {
      arr.push(input[i]);
      i++;
    } else if (/\d/.test(input[i])) {
      let num = '';
      while (/\d/.test(input[i])) {
        num += input[i];
        i++;
      }
      arr.push(Number(num));
    }
  }
  const process = (a, op, b) => {
    if (op === '+') {
      return a + b;
    }
    if (op === '-') {
      return a - b;
    }
    if (op === '*') {
      return a * b;
    }
  };

  const dp = {};
  const helper = (from, to) => {
    if (from === to) return [arr[from]];
    if (dp[from + ',' + to]) return dp[from + ',' + to];

    let res = [];
    for (let i = from + 1; i < to; i += 2) {
      const left = helper(from, i - 1);
      const right = helper(i + 1, to);
      for (let j = 0; j < left.length; j++) {
        for (let k = 0; k < right.length; k++) {
          res.push(process(left[j], arr[i], right[k]));
        }
      }
    }
    // console.log('ret', from, to, res);
    dp[from + ',' + to] = res;
    return res;
  };

  return helper(0, arr.length - 1);
};

console.log(diffWaysToCompute('143'));
// [143]

console.log(diffWaysToCompute('2-1-1'));
// [0, 2]

console.log(diffWaysToCompute('2*3+11'));
// [17, 28]

console.log(diffWaysToCompute('2*3-4*5'));
// [-34, -14, -10, -10, 10]
