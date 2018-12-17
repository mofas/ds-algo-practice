/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function(seats) {
  const n = seats.length;
  let continueEmpty = 0;
  let from = null;
  let minDist = 1;
  for (let i = 0; i < n; i++) {
    if (seats[i] === 1) {
      if (from == null) {
        minDist = i;
      } else {
        if (i - from - 1 > continueEmpty) continueEmpty = i - from - 1;
      }
      from = i;
    }
  }
  // console.log(continueEmpty);
  minDist = Math.max(minDist, Math.floor((continueEmpty + 1) / 2));
  if (n - from - 1 > minDist) minDist = n - from - 1;
  return minDist;
};

console.log(maxDistToClosest([0, 1]));
// 1

console.log(maxDistToClosest([1, 0, 0, 0, 1, 0, 1]));
// 2

console.log(maxDistToClosest([1, 0, 0, 0, 0, 1, 0, 1]));
// 2

console.log(maxDistToClosest([1, 0, 0, 0, 0, 0, 1, 0, 1]));
// 3

console.log(maxDistToClosest([1, 0, 0, 0]));
// 3
