/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number}
 */

// nearly brute force
// time complexity is O(n^3)
// 216ms
var largestOverlap = function(A, B) {
  const N = A.length;
  const imagePointsInA = [];
  const imagePointsInB = [];

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (A[i][j] === 1) imagePointsInA.push([i, j]);
      if (B[i][j] === 1) imagePointsInB.push([i, j]);
    }
  }
  let maxPossibility = Math.min(imagePointsInA.length, imagePointsInB.length);
  let max = 0;

  // i => x-axis shift
  // j -> y-axis shify
  for (let i = -N + 1; i < N; i++) {
    for (let j = -N + 1; j < N; j++) {
      let acc = 0;
      for (let k = 0; k < imagePointsInA.length; k++) {
        const [x, y] = imagePointsInA[k];
        if (
          x + i >= 0 &&
          x + i < N &&
          y + j >= 0 &&
          y + j < N &&
          B[x + i][y + j]
        )
          acc++;
      }
      // console.log('shift', i, j, acc);
      if (acc > max) max = acc;
      if (max === maxPossibility) return max;
    }
    // brute force check
  }

  return max;
};

// best sol from web
// 72 ms
var largestOverlap = function(A, B) {
  let len = A.length;
  let max = 0;
  for (let offsetx = -len + 1; offsetx < len; offsetx++) {
    for (let offsety = -len + 1; offsety < len; offsety++) {
      let sum = 0;
      let ceil1 = Math.min(len, len - offsetx);
      for (let x = Math.max(0, -offsetx); x < ceil1; x++) {
        let ceil2 = Math.min(len, len - offsety);
        for (let y = Math.max(0, -offsety); y < ceil2; y++) {
          sum += A[x][y] * B[x + offsetx][y + offsety];
        }
      }
      if (sum > max) max = sum;
    }
  }
  return max;
};

console.log(
  largestOverlap(
    [[1, 1, 0], [0, 1, 0], [0, 1, 0]],
    [[0, 0, 0], [0, 1, 1], [0, 0, 1]]
  )
);
//   3

console.log(largestOverlap([[1]], [[1]]));
// 1
