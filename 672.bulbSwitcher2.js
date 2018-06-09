/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */

// this problem can actually solve by pencil and paper
var flipLights = function(n, m) {
  if (m === 0 || n === 0) return 1;
  if (n === 1) return 2;
  if (n === 2) {
    if (m === 1) return 3;
    return 4;
  }
  if (m === 1) return 4;
  if (m === 2) return 7;
  return 8;
};
