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

console.log(kClosest([[1, 3], [-2, 2]], 1));
// [[-2, 2]]

console.log(kClosest([[3, 3], [5, -1], [-2, 4]], 2));
// [[3,3],[-2,4]]
