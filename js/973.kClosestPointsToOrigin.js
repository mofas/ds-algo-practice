/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */

// from solution
// 212ms
var kClosest = function(points, K) {
  const dist = d => d[0] * d[0] + d[1] * d[1];

  // console.log(pointsWithDist);
  const helper = (from, to, remain) => {
    if (from >= to) return;
    let i = from;
    let j = to;

    const pivot = dist(points[i + Math.floor(Math.random() * (j - i))]);

    while (i < j) {
      while (i < j && dist(points[i]) < pivot) i++;
      while (i < j && dist(points[j]) > pivot) j--;
      //swap i j
      let temp = points[i];
      points[i] = points[j];
      points[j] = temp;
    }
    // console.log(pivot);
    // console.log(points);
    const numSmallerThanPivot = i - from + 1;
    if (remain <= numSmallerThanPivot) {
      helper(from, i, remain);
    } else {
      helper(i + 1, to, remain - numSmallerThanPivot);
    }
  };
  helper(0, points.length - 1, K);
  return points.slice(0, K);
};

// my version
/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
// Runtime: 172 ms, faster than 99.23%
// Memory Usage: 48 MB, less than 77.11%
var kClosest = function(points, K) {
  const dist = d => d[0] * d[0] + d[1] * d[1];
  const n = points.length;
  const helper = (from, to) => {
    if (to === from) return;
    let i = from;
    const pivot = dist(points[to - 1]);
    for (let k = from; k < to - 1; k++) {
      if (dist(points[k]) <= pivot) {
        const temp = points[i];
        points[i] = points[k];
        points[k] = temp;
        i++;
      }
    }
    const temp = points[i];
    points[i] = points[to - 1];
    points[to - 1] = temp;

    // recursive
    if (i < K) {
      helper(i + 1, to);
    } else {
      helper(from, i);
    }
  };

  helper(0, n, K);
  return points.slice(0, K);
};

console.log(kClosest([[1, 3], [-2, 2]], 1));
// [[-2, 2]]

console.log(kClosest([[3, 3], [5, -1], [-2, 4]], 2));
// [[3,3],[-2,4]]
