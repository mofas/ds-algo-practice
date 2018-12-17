/**
 * @param {number[][]} A
 * @return {number}
 */
// 56ms
var matrixScore = function(A) {
  const n = A.length;
  const m = A[0].length;

  for (let i = 0; i < n; i++) {
    if (A[i][0] === 0) {
      // flip row
      for (let j = 0; j < m; j++) {
        A[i][j] = A[i][j] === 1 ? 0 : 1;
      }
    }
  }
  // console.log(A);

  // check col
  for (let j = 1; j < m; j++) {
    let zeroCount = 0;
    for (let i = 0; i < n; i++) {
      if (A[i][j] === 0) zeroCount++;
    }
    if (zeroCount * 2 > n) {
      // flip col
      // console.log('flip col', j);
      for (let i = 0; i < n; i++) {
        A[i][j] = A[i][j] === 1 ? 0 : 1;
      }
    }
  }
  // console.log(A);
  let res = 0;
  for (let i = 0; i < n; i++) {
    const numberStr = '0b' + ('0'.repeat(31) + A[i].join('')).slice(-32);
    // console.log(numberStr);
    res += Number(numberStr);
  }
  return res;
};

// best sol from web
// 52ms
var matrixScore = function(A) {
  let n = A.length;
  let m = A[0].length;
  let ans = 0;

  for (let c = 0; c < m; c++) {
    let colSum = 0;
    for (let r = 0; r < n; r++) {
      colSum += A[r][c] ^ A[r][0]; // make A[r][0] 0 using A[r][0] ^= A[r][0]
    }
    // Math.max(colSum, n - colSum) check if we should flip again
    ans += Math.max(colSum, n - colSum) * (1 << (m - 1 - c));
  }
  return ans;
};

console.log(matrixScore([[0, 0, 1, 1], [1, 0, 1, 0], [1, 1, 0, 0]]));
// 39

console.log(matrixScore([[1, 1], [1, 1], [0, 1]]));
// 8

console.log(
  matrixScore([[0, 0, 1, 1, 1, 1, 1, 0, 0], [0, 0, 1, 0, 1, 0, 0, 1, 0]])
);
// 976
console.log(
  matrixScore([
    [1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1],
    [1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1],
    [1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1],
    [0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1],
    [1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1],
    [0, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1],
    [1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1],
    [1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1],
    [0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0],
    [0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0],
    [0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0],
    [1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0],
    [1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0],
    [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 1],
    [1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1],
    [1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 0],
    [1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0]
  ])
);
// 16112383
