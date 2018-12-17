const dist = (a, b) => {
  return Math.sqrt(Math.pow(b[0] - a[0], 2) + Math.pow(b[1] - a[1], 2));
};

const calculateTriangleArea = (p1, p2, p3) => {
  const A = dist(p1, p2);
  const B = dist(p2, p3);
  const C = dist(p1, p3);

  const cosTheta = (C * C - A * A - B * B) / (2 * A * B);

  const sinTheta = Math.sqrt(1 - cosTheta * cosTheta);
  return 0.5 * A * B * sinTheta;
};

/**
 * @param {number[][]} points
 * @return {number}
 */
// brute force
var largestTriangleArea = function(points) {
  const n = points.length;
  let max = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      for (let k = i; k < n; k++) {
        const area = calculateTriangleArea(points[i], points[j], points[k]);
        if (area > max) max = area;
      }
    }
  }
  return max;
};

console.log(largestTriangleArea([[0, 0], [0, 1], [1, 0], [0, 2], [2, 0]]));
