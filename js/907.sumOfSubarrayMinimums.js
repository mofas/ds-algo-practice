/**
 * @param {number[]} A
 * @return {number}
 */

// https://leetcode.com/problems/sum-of-subarray-minimums/discuss/178876/stack-solution-with-very-detailed-explanation-step-by-step
var sumSubarrayMins = function(A) {
  const len = A.length;
  const stackP = [];
  const stackN = [];
  const left = new Array(len);
  const right = new Array(len);

  for (let i = 0; i < len; i++) {
    left[i] = i + 1;
    right[i] = len - i;
  }
  // console.log(left, right);
  for (let i = 0; i < len; i++) {
    // for prev less
    const val = A[i];
    while (stackP.length > 0 && stackP[stackP.length - 1][0] > A[i]) {
      stackP.pop();
    }
    left[i] = stackP.length === 0 ? i + 1 : i - stackP[stackP.length - 1][1];
    stackP.push([val, i]);

    while (stackN.length > 0 && stackN[stackN.length - 1][0] > A[i]) {
      const x = stackN.pop();
      right[x[1]] = i - x[1];
    }
    stackN.push([val, i]);
    // console.log(stackP, stackN);
    // console.log(left, right);
  }
  let ret = [];
  const mod = 1e9 + 7;
  for (let i = 0; i < len; i++) {
    ret = (ret + A[i] * left[i] * right[i]) % mod;
  }
  return ret;
};

// best sol
// 68ms
var sumSubarrayMins = function(A) {
  let left = new Array(A.length);
  let right = new Array(A.length);
  left[0] = -1;

  for (let i = 1; i < A.length; i++) {
    let p = i - 1;
    while (p >= 0 && A[p] >= A[i]) {
      p = left[p];
    }
    left[i] = p;
  }
  right[A.length - 1] = A.length;
  for (let i = A.length - 2; i >= 0; i--) {
    let p = i + 1;
    while (p < A.length && A[p] > A[i]) {
      p = right[p];
    }
    right[i] = p;
  }
  let total = 0;
  for (let i = 0; i < A.length; i++) {
    total += ((i - left[i]) * (right[i] - i) * A[i]) % 1000000007;
    total = total % 1000000007;
  }
  return total;
};

console.log(sumSubarrayMins([3, 1, 2, 4]));
// 17

console.log(sumSubarrayMins([59, 91]));
// 209

console.log(sumSubarrayMins([3, 1, 2, 5, 4]));
// 30
