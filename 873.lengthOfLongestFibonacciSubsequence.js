/**
 * @param {number[]} A
 * @return {number}
 */

// recursive DP
// 5368 ms
var lenLongestFibSubseq = function(A) {
  const n = A.length;
  const cache = new Array(n).fill(null).map(_ => new Array(n).fill(0));
  const helper = (i, j) => {
    let max = 0;
    if (cache[i][j]) return cache[i][j];
    for (let k = j + 1; k < n; k++) {
      if (A[k] === A[i] + A[j]) {
        max = Math.max(max, helper(j, k) + 1);
      }
    }
    cache[i][j] = max;
    return max;
  };

  let max = 0;
  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      max = Math.max(max, helper(i, j));
    }
  }
  // console.log(cache);
  return max > 0 ? max + 2 : 0;
};

// iterative DP
// it is actually a brute force
// 2160 ms
var lenLongestFibSubseq = function(A) {
  const n = A.length;

  let max = 0;
  const dp = new Array(n).fill(null).map(_ => new Array(n).fill(0));
  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let k = j + 1; k < n; k++) {
        if (A[k] === A[i] + A[j]) {
          dp[j][k] = 1;
          max = 1;
        }
      }
    }
  }

  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      if (dp[i][j] > 0) {
        for (let k = j + 1; k < n; k++) {
          if (A[k] === A[i] + A[j]) {
            dp[j][k] = dp[i][j] + 1;
            if (dp[j][k] > max) max = dp[j][k];
          }
        }
      }
    }
  }

  // console.log(dp, max);

  return max > 0 ? max + 2 : 0;
};

// sol from disucssion board
// it is actually better brute force than my iterative DP
// 180ms
var lenLongestFibSubseq = function(a) {
  let aSet = new Set(a),
    ans = 0;

  for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; j++) {
      if (aSet.has(a[i] + a[j])) {
        let temp = [a[i], a[j]];
        while (aSet.has(temp[temp.length - 1] + temp[temp.length - 2])) {
          temp.push(temp[temp.length - 1] + temp[temp.length - 2]);
        }
        ans = temp.length > ans ? temp.length : ans;
      }
    }
  }
  // console.log(ans);
  return ans;
};

// the best sol from web
// 144 ms
// it is great iterative DP
var lenLongestFibSubseq = function(A) {
  const numExistMap = {};
  let result = 0;
  for (let i = 0; i < A.length; i++) {
    numExistMap[A[i]] = {};
  }
  for (let i = 2; i < A.length; i++) {
    let right = A[i];
    for (let j = 0; A[j] <= Math.floor(right / 2); j++) {
      const left = A[j];
      const rest = right - left;
      if (rest in numExistMap && rest !== left) {
        let newLength = numExistMap[rest][left]
          ? numExistMap[rest][left] + 1
          : 1;
        numExistMap[right][rest] = newLength;
        result = Math.max(result, newLength);
      }
    }
  }
  return result > 0 ? result + 2 : 0;
};

console.log(lenLongestFibSubseq([1, 3, 5]));
// 0

console.log(lenLongestFibSubseq([1, 3, 7, 11, 12, 14, 18]));
// 3

console.log(lenLongestFibSubseq([1, 2, 3, 4, 5, 6, 7, 8]));
// 5
