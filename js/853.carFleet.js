/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */

// 108ms
// discussion sol
var carFleet = function(target, position, speed) {
  const time = position.map((d, i) => {
    return [d, ((target - d) * 1.0) / speed[i]];
  });
  time.sort((a, b) => b[0] - a[0]);
  // console.log(time);
  let ret = 0;
  let cur = 0;
  for (const [pos, t] of time) {
    if (t > cur) {
      ret++;
      cur = t;
    }
    // console.log('==', cur);
  }
  return ret;
};

console.log(carFleet(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3]));
// 3
