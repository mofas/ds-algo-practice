/**
 * @param {number[]} A
 * @return {number}
 */
var oddEvenJumps = function(A) {
  const n = A.length;
  const higher = new Array(n).fill(false);
  const lower = new Array(n).fill(false);
  let ret = 1;
  higher[n - 1] = true;
  lower[n - 1] = true;
  const map = {};
  map[A[n - 1]] = n - 1;
  for (let i = n - 2; i >= 0; i--) {
    const currentVal = A[i];
    let highest = -Infinity;
    let lowerest = Infinity;
    let hi = null;
    let lo = null;
    for (const key in map) {
      const val = Number(key);
      // jump higher / odd jump
      if (currentVal <= val) {
        if (val < lowerest) {
          lowerest = val;
          hi = map[key];
        } else if (val === lowerest) {
          hi = Math.min(hi, map[key]);
        }
        // jump lower / even jump
      } else if (currentVal >= val) {
        if (val > highest) {
          highest = val;
          lo = map[key];
        } else if (val === highest) {
          lo = Math.min(lo, map[key]);
        }
      }
    }
    if (hi != null) higher[i] = lower[hi];
    if (lo != null) lower[i] = higher[lo];
    if (higher[i]) ret++;
    map[A[i]] = i;
    // console.log(A[i], '===', A[hi], A[lo]);
    // console.log('====', higher[i], lower[i]);
  }
  return ret;
};

console.log(oddEvenJumps([5, 1, 3, 4, 2]));
// 3

console.log(oddEvenJumps([10, 13, 12, 14, 15]));
// 2

console.log(oddEvenJumps([2, 3, 1, 1, 4]));
// 3

console.log(oddEvenJumps([1, 2, 3, 2, 1, 4, 4, 5]));
// 6
