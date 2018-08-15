function Interval(start, end) {
  this.start = start;
  this.end = end;
}

/**
 * @param {Interval[]} intervals
 * @return {number}
 */
// 64ms
var eraseOverlapIntervals = function(intervals) {
  intervals.sort((a, b) => {
    if (a.end === b.end) {
      return a.start - b.start;
    }
    return a.end - b.end;
  });
  // console.log(intervals);

  let res = 0;
  for (let i = 0; i < intervals.length; i++) {
    let next = i;
    for (let j = i + 1; j < intervals.length; j++) {
      if (intervals[j].start < intervals[i].end) {
        // console.log('==', i, j, intervals[i], intervals[j]);
        res++;
        next = j;
      } else {
        break;
      }
    }
    i = next;
  }
  return res;
};

// best sol from web
// it just reverse version for greed scheduling.
var eraseOverlapIntervals = function(intervals) {
  if (intervals.length == 0) return 0;
  intervals.sort((a, b) => a.end - b.end);
  let distinct = 1,
    end = intervals[0].end;
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i].start >= end) {
      distinct++;
      end = intervals[i].end;
    }
  }
  return intervals.length - distinct;
};

console.log(
  eraseOverlapIntervals(
    [[1, 2], [2, 3]].map(([start, end]) => new Interval(start, end))
  )
);
// 0

console.log(
  eraseOverlapIntervals(
    [[1, 2], [1, 3], [2, 3]].map(([start, end]) => new Interval(start, end))
  )
);
// 1

console.log(
  eraseOverlapIntervals(
    [[1, 2], [2, 3], [3, 4], [1, 3]].map(
      ([start, end]) => new Interval(start, end)
    )
  )
);
// 1

console.log(
  eraseOverlapIntervals(
    [[1, 2], [1, 2], [1, 2]].map(([start, end]) => new Interval(start, end))
  )
);
// 2
