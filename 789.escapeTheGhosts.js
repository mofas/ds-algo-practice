/**
 * @param {number[][]} ghosts
 * @param {number[]} target
 * @return {boolean}
 */
var escapeGhosts = function(ghosts, target) {
  const dist = Math.abs(target[0]) + Math.abs(target[1]);

  // console.log('dist', dist);
  for (let i = 0; i < ghosts.length; i++) {
    const g = ghosts[i];
    const x = Math.abs(g[0] - target[0]);
    const y = Math.abs(g[1] - target[1]);
    // console.log('x+y', x + y);
    if (x + y <= dist) return false;
  }
  return true;
};

console.log(escapeGhosts([[1, 0], [0, 3]], [0, 1]));
// true

console.log(escapeGhosts([[1, 0]], [2, 0]));
// false

console.log(escapeGhosts([[2, 0]], [1, 0]));
// false

console.log(escapeGhosts([[1, 8], [-9, 0], [-7, -6], [4, 3], [1, 3]], [6, -9]));
// false
