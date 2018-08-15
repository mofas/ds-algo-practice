/**
 * @param {number[][]} points
 * @return {number}
 */
// 112ms
var findMinArrowShots = function(points) {
  points.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    } else return a[0] - b[0];
  });

  let res = 0;

  // console.log(points);
  for (let i = 0; i < points.length; i++) {
    let [start, end] = points[i];
    res++;
    // console.log('check', i, points[i]);
    for (let j = i + 1; j < points.length; j++) {
      if (points[j][0] > end || points[j][1] < start) break;
      else {
        start = Math.max(start, points[j][0]);
        end = Math.min(end, points[j][1]);
        i = j;
      }
    }
  }
  return res;
};

// better sol
// actually we only need to worry about end point
var findMinArrowShots = function(points) {
  const len = points.length;
  if (len === 0) {
    return 0;
  }
  points.sort((a, b) => a[1] - b[1]);
  let min = 0,
    lastEnd = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < len; i++) {
    if (lastEnd < points[i][0]) {
      lastEnd = points[i][1];
      min++;
    }
  }
  return min;
};

console.log(findMinArrowShots([[10, 16], [2, 8], [1, 6], [7, 12]]));
// 2

console.log(findMinArrowShots([[1, 2], [3, 4], [5, 6], [7, 8]]));
// 4

console.log(
  findMinArrowShots([
    [3, 9],
    [7, 12],
    [3, 8],
    [6, 8],
    [9, 10],
    [2, 9],
    [0, 9],
    [3, 9],
    [0, 6],
    [2, 8]
  ])
);
// 2

console.log(
  findMinArrowShots([
    [9, 12],
    [1, 10],
    [4, 11],
    [8, 12],
    [3, 9],
    [6, 9],
    [6, 7]
  ])
);
// 2
