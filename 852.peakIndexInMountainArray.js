/**
 * @param {number[]} A
 * @return {number}
 */
// 52ms
var peakIndexInMountainArray = function(A) {
  let from = 0;
  let to = A.length - 1;
  let mid = 0;
  while (from <= to) {
    mid = Math.floor((from + to) / 2);
    if (A[mid] < A[mid - 1]) {
      to = mid - 1;
    } else if (A[mid] < A[mid + 1]) {
      from = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
};

console.log(peakIndexInMountainArray([0, 1, 0]));
// 1

console.log(peakIndexInMountainArray([0, 2, 1, 0]));
// 1

console.log(peakIndexInMountainArray([0, 1, 2, 3, 4, 3, 1, 0]));
// 4
