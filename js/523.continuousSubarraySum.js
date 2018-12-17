/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

// top-bottom DP
// slow
// var checkSubarraySum = function(nums, k) {
//   let arr = nums;
//   const n = nums.length;

//   k = Math.abs(k);
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] === 0 && arr[i + 1] === 0) return true;
//   }

//   if (k === 1) {
//     return n > 1;
//   } else if (k > 1) {
//     arr = nums.map(d => d % k);

//     const sumCache = {};
//     const helper = (from, to) => {
//       // console.log('enter', from, to, arr[from]);
//       if (to - from === 1) return [false, arr[from]];
//       const key = from + ',' + to;

//       if (sumCache[key]) {
//         return [false, sumCache[key]];
//       }

//       let retL, retR;
//       let sumL, sumR;
//       let newSum = 0;

//       for (let i = from + 1; i < to; i++) {
//         [retL, sumL] = helper(from, i);
//         [retR, sumR] = helper(i, to);

//         if (i === from + 1) {
//           newSum = sumL + sumR;
//         }
//         if (retL || retR) {
//           return [true, newSum];
//         }
//       }
//       // console.log('leave', from, to, newSum);
//       sumCache[key] = newSum;

//       if (newSum % k === 0 && newSum >= k) return [true, newSum];
//       else return [false, newSum];
//     };

//     const [ret, sum] = helper(0, n);
//     return ret;
//   }

//   return false;
// };

// still slow
// var checkSubarraySum = function(nums, k) {
//   let arr = nums;
//   const n = nums.length;

//   k = Math.abs(k);
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] === 0 && arr[i + 1] === 0) return true;
//   }

//   if (k === 1) {
//     return n > 1;
//   } else if (k > 1) {
//     const table = new Array(n).fill(0).map(_ => new Array(n).fill(0));
//     let acc = 0;
//     for (let i = 0; i < n; i++) {
//       acc += arr[i];
//       table[0][i] = acc;
//       if (i > 0 && acc % k === 0) return true;
//     }
//     // console.log(table);
//     for (let i = 1; i < n; i++) {
//       for (let j = i; j < n; j++) {
//         table[i][j] = table[i - 1][j] - arr[i - 1];
//         if (table[i][j] >= k && table[i][j] % k === 0) return true;
//       }
//     }
//     // console.log(table);
//   }

//   return false;
// };

// best sol from web
var checkSubarraySum = function(nums, k) {
  let sumMap = new Map(); // sum to index map
  sumMap.set(0, -1);
  let sum = 0;
  for (let i = 0; i < nums.length; ++i) {
    sum += nums[i];
    if (k !== 0) {
      sum %= k;
    }
    let j = sumMap.get(sum);
    if (j !== undefined) {
      if (i - j > 1) return true;
    } else {
      sumMap.set(sum, i);
    }
  }
  return false;
};

console.log(checkSubarraySum([0, 0], 0));
// true

console.log(checkSubarraySum([0, 1, 0], -1));
// true

console.log(checkSubarraySum([1, 1], -1));
// true

console.log(checkSubarraySum([2, 4], 6));
// true

console.log(checkSubarraySum([1, 2, 4], 6));
// true

console.log(checkSubarraySum([1, 2, 3], 6));
// true

console.log(checkSubarraySum([23, 2, 4, 6, 7], 6));
// true

console.log(checkSubarraySum([23, 2, 6, 4, 7], 6));
// true

console.log('===========');

console.log(checkSubarraySum([0], 0));
// false

console.log(checkSubarraySum([2, 3], 6));
// false

console.log(checkSubarraySum([1, 2, 5], 6));
// false

console.log(checkSubarraySum([2, 4, 6, 8], 15));
// false

console.log(checkSubarraySum([2, 4, 6, 8, 6, 4, 2], 21));
// false
