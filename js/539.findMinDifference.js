/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function(timePoints) {
  const mins = timePoints.map(d => {
    const [h, m] = d.split(':');
    return Number(h) * 60 + Number(m);
  });

  mins.sort((a, b) => a - b);

  let first = mins[0];
  mins.push(first + 24 * 60);
  // console.log(mins);
  let min = Infinity;

  for (let i = 1; i < mins.length; i++) {
    if (mins[i] - mins[i - 1] < min) min = mins[i] - mins[i - 1];
  }

  return min;
};

// best sol from web
// using bucket is faster!!

// var mins = s =>
//   (s.charCodeAt(0) - 48) * 600 +
//   (s.charCodeAt(1) - 48) * 60 +
//   (s.charCodeAt(3) - 48) * 10 +
//   (s.charCodeAt(4) - 48);

// var findMinDifference = function(timePoints) {
//   var axis = new Array(1440);
//   var last = 0,
//     min = 1440,
//     start = 0,
//     end = 1440;
//   for (i = 0; i < timePoints.length; i++) {
//     var temp = mins(timePoints[i]);
//     if (axis[temp] === true) return 0;
//     else axis[temp] = true;
//   }
//   i = 0;
//   while (i < 1440) {
//     if (axis[i]) {
//       start = i;
//       last = i;
//       i++;
//       break;
//     }
//     i++;
//   }
//   while (i < 1440) {
//     if (axis[i]) {
//       if (i - last < min) min = i - last;
//       last = i;
//       end = i;
//     }
//     i++;
//   }
//   if (1440 - end + start < min) min = 1440 - end + start;

//   return min;
// };

console.log(findMinDifference(['23:59', '00:00']));

// 1
