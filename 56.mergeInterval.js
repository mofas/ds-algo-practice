/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */

function Interval(start, end) {
  this.start = start;
  this.end = end;
}

// it is slow compared other solutions even the algo is the same
// we can improve performance by recycling Interval in original intervals.
var merge = function(intervals) {
  intervals.sort((a, b) => a.start - b.start);
  const n = intervals.length;
  if (n === 0) return [];

  let ret = [];
  let start = intervals[0].start;
  let end = intervals[0].end;
  for (let i = 1; i < n; i++) {
    if (intervals[i].start <= end) {
      end = Math.max(end, intervals[i].end);
    } else {
      ret.push(new Interval(start, end));
      start = intervals[i].start;
      end = intervals[i].end;
    }
    // console.log('loop', start, end, ret);
  }

  ret.push(new Interval(start, end));

  return ret;
};

console.log(
  merge([
    new Interval(1, 3),
    new Interval(2, 6),
    new Interval(8, 10),
    new Interval(15, 18)
  ])
);
// [[1,6],[8,10],[15,18]]

console.log(merge([new Interval(1, 4), new Interval(4, 5)]));
// [[1,5]]

console.log(merge([new Interval(1, 4), new Interval(2, 3)]));
// [[1, 4]]

console.log(
  merge([
    new Interval(2, 3),
    new Interval(5, 5),
    new Interval(2, 2),
    new Interval(3, 4),
    new Interval(3, 4)
  ])
);

// [[2,4],[5,5]]
