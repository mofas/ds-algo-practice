/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
// Too hard
// sol from https://leetcode.com/problems/max-sum-of-rectangle-no-larger-than-k/discuss/83599/Accepted-C%2B%2B-codes-with-explanation-and-references
// 748ms (53.85%) 23MB (100%)
var maxSumSubmatrix = function(matrix, K) {
  if (matrix.length === 0) return 0;
  const row = matrix.length;
  const col = matrix[0].length;
  let max = Number.MIN_SAFE_INTEGER;
  for (let l = 0; l < col; l++) {
    let sums = new Array(row).fill(0);
    for (let r = l; r < col; r++) {
      let curSum = 0;
      let os = new Set();
      os.add(0);
      for (let k = 0; k < row; k++) {
        sums[k] += matrix[k][r];
        curSum += sums[k];
        // console.log(l, r, os, curSum);
        for (const num of os) {
          if (curSum - num <= K) {
            // console.log('...', max, curSum - num);
            max = Math.max(max, curSum - num);
          }
        }
        os.add(curSum);
      }
    }
  }

  return max;
};

// best sol
// 220ms
/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var maxSumSubmatrix = function(matrix, k) {
  if (matrix.length === 0 || matrix[0].length === 0) {
    return 0;
  }
  const rowLen = matrix.length;
  const colLen = matrix[0].length;
  let vector = Array(rowLen).fill(0);
  let max = -Infinity;
  for (let left = 0; left < colLen; left++) {
    vector = Array(rowLen).fill(0);
    for (let right = left; right < colLen; right++) {
      for (let i = 0; i < rowLen; i++) {
        vector[i] += matrix[i][right];
      }
      // !!! do after its done, not in the loop
      max = Math.max(max, findMax(vector));
    }
  }
  return max;

  function findMax(list) {
    const cumu = [];
    let sum = 0;
    for (const val of list) {
      sum += val;
      cumu.push(sum);
    }
    cumu.unshift(0);
    // now do it
    let max = -Infinity;
    sort(0, cumu.length - 1); // !!! it is cumu, not list, again and again and again
    return max;

    // sort cumu
    function sort(start, end) {
      if (start === end) {
        return [cumu[start]];
      }
      const mid = start + Math.trunc((end - start) / 2);
      const left = sort(start, mid);
      const right = sort(mid + 1, end);
      // calc
      let p1 = 0;
      let p2 = 0;
      while (p1 < left.length && p2 < right.length) {
        const val = right[p2] - left[p1]; // !!! not cumu any more
        if (val <= k) {
          max = Math.max(max, val);
          p2++;
        } else {
          p1++;
        }
      }
      // merge
      const res = [];
      const take = (arr, i) => (i >= 0 && i < arr.length ? arr[i] : Infinity);
      (p1 = 0), (p2 = 0);
      while (p1 < left.length || p2 < right.length) {
        const val1 = take(left, p1);
        const val2 = take(right, p2);
        if (val1 < val2) {
          res.push(val1);
          p1++;
        } else {
          res.push(val2);
          p2++;
        }
      }
      return res;
    }
  }
};

// console.log(maxSumSubmatrix([[1, 0, 1], [0, -2, 3]], 2));
// // 2

// console.log(maxSumSubmatrix([[1, 2, -1], [2, -3, 4], [1, 0, -1]], 4));
// // 4

console.log(maxSumSubmatrix([[2, 2, -1]], 0));
// -1
