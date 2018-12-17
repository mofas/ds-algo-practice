/**
 * @param {number[]} citations
 * @return {number}
 */

// 96ms
var hIndex = function(citations) {
  const n = citations.length;
  let from = 0;
  let to = n - 1;
  while (from <= to) {
    let mid = Math.floor((from + to) / 2);
    const q = n - mid;
    // console.log('loop', from, mid, to);
    if (citations[mid] === q) {
      return Math.max(citations[mid]);
    } else if (citations[mid] > q) {
      to = mid - 1;
    } else if (citations[mid] < q) {
      from = mid + 1;
    }
  }
  return n - from;
};

// best sol from web
// 68ms
// almost the same
var hIndex = function(citations) {
  var left = 0,
    len = citations.length,
    right = len - 1,
    mid;
  while (left <= right) {
    mid = left + Math.floor((right - left) / 2);
    if (citations[mid] >= len - mid) right = mid - 1;
    else left = mid + 1;
  }
  return len - left;
};

console.log(hIndex([1, 1, 1, 1, 1]));
// 1

console.log(hIndex([0, 1, 3, 5, 6]));
// 3

console.log(hIndex([1, 1, 1, 1, 100, 100, 100]));
// 3
