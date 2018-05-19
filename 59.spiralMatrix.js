/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  const ret = Array(n)
    .fill(0)
    .map(() => Array(n).fill(0));

  let count = 1;

  for (let i = 0; (i - 1) * 2 < n; i++) {
    // left -> right
    for (let j = i; j < n - i; j++) {
      ret[i][j] = count;
      count++;
    }

    // top -> bottom
    for (let j = i + 1; j < n - i; j++) {
      // left -> right
      ret[j][n - i - 1] = count;
      count++;
    }

    // right -> left
    for (let j = i + 2; j < n - i + 1; j++) {
      // left -> right
      ret[n - i - 1][n - j] = count;
      count++;
    }

    //bottom -> top
    for (let j = i + 2; j < n - i; j++) {
      // left -> right
      ret[n - j][i] = count;
      count++;
    }
  }

  return ret;
};

console.log(generateMatrix(3));
// [
//   [ 1, 2, 3 ],
//   [ 8, 9, 4 ],
//   [ 7, 6, 5 ]
//  ]

console.log(generateMatrix(4));
// [
//   [  1,  2,  3,  4 ],
//   [ 12, 13, 14,  5 ],
//   [ 11  16, 15,  6 ],
//   [ 10,  9,  8,  7 ]
//  ]

console.log(generateMatrix(5));
