/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function(m, n, ops) {
  let minX = m;
  let minY = n;
  ops.forEach(([x, y]) => {
    if (x < minX) minX = x;
    if (y < minY) minY = y;
  });

  return minX * minY;
};

console.log(maxCount(3, 3, [[2, 2], [3, 3]]));
// 4
