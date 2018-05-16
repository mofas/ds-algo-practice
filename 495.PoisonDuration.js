/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
  const len = timeSeries.length;
  let ret = 0;
  //TODO
  for (let i = 0; i < len - 1; i++) {
    if (timeSeries[i + 1] - timeSeries[i] < duration) {
      ret += timeSeries[i + 1] - timeSeries[i];
    } else {
      ret += duration;
    }
  }
  if (len > 0) {
    ret += duration;
  }
  return ret;
};

console.log(findPoisonedDuration([], 2)); // 0

console.log(findPoisonedDuration([1, 4], 2)); // 4

console.log(findPoisonedDuration([1, 2], 2)); // 3

console.log(findPoisonedDuration([1, 4], 4)); // 7
