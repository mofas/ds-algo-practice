function Interval(start, end) {
  this.start = start;
  this.end = end;
}

/**
 * @param {Interval[]} intervals
 * @return {number[]}
 */
// 128ms
var findRightInterval = function(intervals) {
  const len = intervals.length;
  // [start, idx]
  const startHash = intervals.map((d, i) => {
    return [d.start, i];
  });
  startHash.sort((a, b) => a[0] - b[0]);
  const lastRightStart = startHash[len - 1][0];

  return intervals.map(d => {
    if (d.end > lastRightStart) return -1;
    // binary search
    let lo = 0;
    let hi = len - 1;
    while (lo <= hi) {
      let mid = Math.floor((lo + hi) / 2);
      if (startHash[mid][0] > d.end) {
        hi = mid - 1;
      } else if (startHash[mid][0] < d.end) {
        lo = mid + 1;
      } else {
        lo = mid;
        break;
      }
    }
    return startHash[lo][1];
  });
};

// 124ms
// var findRightInterval = function(intervals) {
//   let locations = intervals.map((_, i) => i),
//     n = intervals.length;
//   locations.sort((a, b) => intervals[a].start - intervals[b].start || a - b);
//   return intervals.map(data => {
//     let v = data.end,
//       l = 0,
//       r = n - 1;
//     while (l <= r) {
//       let m = (l + r) >> 1;
//       intervals[locations[m]].start >= v ? (r = m - 1) : (l = m + 1);
//     }
//     return l < n ? locations[l] : -1;
//   });
// };

const inv1 = new Interval(1, 2);
const inv2 = new Interval(2, 3);
const inv3 = new Interval(3, 4);

console.log(findRightInterval([inv1]));
// [-1]

console.log(findRightInterval([inv3, inv2, inv1]));
// [-1, 0, 1]

const inv4 = new Interval(1, 4);
console.log(
  findRightInterval([
    new Interval(1, 4),
    new Interval(2, 3),
    new Interval(3, 4)
  ])
);
// [-1, 2, -1]

console.log(
  findRightInterval([
    new Interval(4, 5),
    new Interval(2, 3),
    new Interval(1, 2)
  ])
);
// [-1, 0, 1]

console.log(
  findRightInterval([
    new Interval(1, 12),
    new Interval(2, 9),
    new Interval(3, 10),
    new Interval(13, 14),
    new Interval(15, 16),
    new Interval(16, 17)
  ])
);
// [ 3, 3, 3, 4, 5, -1 ]
