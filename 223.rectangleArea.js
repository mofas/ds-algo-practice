/**
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */
var computeArea = function(A, B, C, D, E, F, G, H) {
  const firstArea = (C - A) * (D - B);
  const secondArea = (G - E) * (H - F);

  const width = Math.min(C, G) - Math.max(A, E);
  const height = Math.min(D, H) - Math.max(B, F);
  const isOverlap = width > 0 && height > 0;

  return firstArea + secondArea - (isOverlap ? width * height : 0);
};

// overlap
console.log(computeArea(-3, 0, 3, 4, 0, -1, 9, 2));
// 45

// no overlap
console.log(computeArea(0, 0, 0, 0, -1, -1, 1, 1));
// 4

// contains
console.log(computeArea(-2, -2, 2, 2, -1, -1, 1, 1));
// 16

console.log(computeArea(-2, -2, 2, 2, 1, 1, 3, 3));
// 19
