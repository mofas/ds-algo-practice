/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */

// 112ms
var findClosestElements = function(arr, k, x) {
  // binary search
  const n = arr.length;
  if (n === k) return arr;
  let lo = 0;
  let hi = n - 1;
  while (lo < hi) {
    let mid = Math.floor((lo + hi) / 2);
    if (arr[mid] === x) {
      lo = mid;
      break;
    } else if (arr[mid] > x) {
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
  }

  if (Math.abs(arr[lo] - x) > Math.abs(arr[lo + 1] - x)) {
    lo++;
  }
  hi = lo + 1;
  // console.log('==', lo, hi, arr[lo], arr[hi]);

  const res = [];
  for (let i = 0; i < k; i++) {
    // console.log(arr[lo], arr[hi]);
    if (lo < 0) {
      res.push(arr[hi++]);
    } else if (hi > n - 1) {
      res.unshift(arr[lo--]);
    } else if (Math.abs(arr[lo] - x) <= Math.abs(arr[hi] - x)) {
      res.unshift(arr[lo--]);
    } else {
      res.push(arr[hi++]);
    }
    // console.log(res);
  }
  return res;
};

// best sol from web
// 96ms
// if arr[i] is closer than arr[i+k], then i is what we want
var findClosestElements = function(arr, k, x) {
  let start = 0,
    end = arr.length - 1;
  if (!arr) return [];

  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (x - arr[mid] > arr[mid + k] - x) start = mid + 1;
    else end = mid;
  }
  return arr.slice(start, start + k);
};

console.log(findClosestElements([1, 2, 3, 4, 5], 4, 3));
// [1,2,3,4]

console.log(findClosestElements([1, 2, 3, 4, 5], 4, -1));
// [1,2,3,4]

console.log(findClosestElements([1, 2, 6, 9, 10], 3, 4));
// [1,2,6]

console.log(findClosestElements([0, 0, 1, 2, 3, 3, 4, 7, 7, 8], 3, 5));
// [3,3,4]
