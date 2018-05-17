/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

const cache = {};

var uniquePaths = function(m, n) {
  if (n === 1) {
    return 1;
  } else if (cache[`${m}_${n}`]) {
    return cache[`${m}_${n}`];
  } else {
    let ret = 0;
    for (let i = 0; i < m; i++) {
      ret += uniquePaths(m - i, n - 1);
    }
    cache[`${m}_${n}`] = ret;
    return ret;
  }
};

console.log(uniquePaths(3, 2)); // 3

console.log(uniquePaths(7, 3)); // 28
