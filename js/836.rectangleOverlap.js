/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function(rec1, rec2) {
  const width = Math.min(rec1[2], rec2[2]) - Math.max(rec1[0], rec2[0]);
  const height = Math.min(rec1[3], rec2[3]) - Math.max(rec1[1], rec2[1]);

  return width > 0 && height > 0;
};

console.log(isRectangleOverlap([0, 0, 2, 2], [1, 1, 3, 3]));
// true

console.log(isRectangleOverlap([7, 8, 13, 15], [10, 8, 12, 20]));
// true

console.log(isRectangleOverlap([4, 4, 14, 7], [4, 3, 8, 8]));
// true

console.log(isRectangleOverlap([0, 0, 1, 1], [1, 0, 2, 1]));
// false

console.log(isRectangleOverlap([5, 4, 14, 5], [14, 16, 16, 20]));
// false
