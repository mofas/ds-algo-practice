/**
 * @param {number[]} nums
 * @return {number}
 */

// brute force iterative
// it works but slow.
// TLE 21/14
var lengthOfLIS = function(nums) {
  let seqs = [];

  for (const num of nums) {
    let oldSeqs = [];
    let newSeqs = null;
    let appendable = false;
    for (const seq of seqs) {
      oldSeqs.push(seq);
      if (seq[seq.length - 1] < num) {
        appendable = true;
        const cand = seq.concat([num]);
        if (!newSeqs || cand.length > newSeqs.length) newSeqs = cand;
      }
    }

    // console.log('newSeqs', newSeqs);

    seqs = oldSeqs;
    if (newSeqs) {
      seqs.push(newSeqs);
    }
    if (!appendable) seqs.push([num]);

    // console.log(seqs);
  }

  let max = 0;
  for (const seq of seqs) {
    max = Math.max(max, seq.length);
  }
  return max;
};

// recursive DP
// 1732 ms
var lengthOfLIS = function(nums) {
  const n = nums.length;
  const cache = new Array(n + 1).fill(null);
  const helper = current => {
    // console.log('current', current);
    if (current === 0) return 0;
    if (cache[current]) return cache[current];
    let max = 0;
    for (let i = current - 2; i >= 0; i--) {
      // console.log('==', nums[current - 1], nums[i]);
      if (nums[current - 1] > nums[i]) {
        max = Math.max(max, helper(i + 1));
      }
    }
    cache[current] = max + 1;
    // console.log('ret', cache[current]);
    return cache[current];
  };

  let ret = 0;
  for (let i = n; i >= ret; i--) {
    ret = Math.max(ret, helper(i));
  }
  return ret;
};

// iterative DP
// 84ms
var lengthOfLIS = function(nums) {
  const n = nums.length;
  const dp = new Array(n + 1).fill(1);
  dp[0] = 0;

  for (let i = 1; i <= n; i++) {
    let max = 0;
    for (let j = i - 1; j > 0; j--) {
      if (nums[i - 1] > nums[j - 1]) {
        max = Math.max(max, dp[j]);
        // console.log('->', nums[i - 1], nums[j - 1], dp[j], 'max', max);
      }
      dp[i] = max + 1;
    }
  }

  let ret = 0;
  for (let i = 1; i <= n; i++) {
    ret = Math.max(ret, dp[i]);
  }
  console.log(dp);
  return ret;
};

// best sol from web
// 48ms
// using binarySearch!!
// function binarySearchGte(nums, k) {
//   let i = 0;
//   let j = nums.length - 1;
//   while (i <= j) {
//     const mid = ((i + j) / 2) | 0;
//     if (nums[mid] >= k && (!mid || nums[mid - 1] < k)) {
//       return mid;
//     }
//     if (nums[mid] < k) {
//       i = mid + 1;
//     } else {
//       j = mid - 1;
//     }
//   }

//   return -1;
// }
// var lengthOfLIS = function(nums) {
//   if (!nums.length) {
//     return 0;
//   }

//   const peaks = [Infinity];
//   nums.forEach(n => {
//     if (n > peaks[peaks.length - 1]) {
//       // console.log('push', n);
//       peaks.push(n);
//     } else {
//       const toUpdate = binarySearchGte(peaks, n);
//       // console.log('update', toUpdate, n);
//       peaks[toUpdate] = n;
//     }
//     // console.log('==', peaks);
//   });

//   return peaks.length;
// };

console.log(lengthOfLIS([]));
// 0

console.log(lengthOfLIS([1]));
// 1

console.log(lengthOfLIS([2, 1]));
// 1

console.log(lengthOfLIS([1, 2]));
// 2

console.log(lengthOfLIS([1, 100, 101, 2, 3, 4]));
// 4

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
// 4

console.log(lengthOfLIS([1, 3, 6, 7, 9, 4, 10, 5, 6]));
// 6

console.log(lengthOfLIS([1, 2, 3, 4, 5, 6, 7]));
// 7

// console.log(
//   lengthOfLIS([
//     1,
//     2,
//     3,
//     4,
//     5,
//     6,
//     7,
//     8,
//     9,
//     10,
//     11,
//     12,
//     13,
//     14,
//     15,
//     16,
//     17,
//     18,
//     19,
//     20,
//     21,
//     22,
//     23,
//     24,
//     25,
//     26,
//     27,
//     28,
//     29,
//     30,
//     31,
//     32,
//     33,
//     34,
//     35,
//     36,
//     37,
//     38,
//     39,
//     40,
//     41,
//     42,
//     43,
//     44,
//     45,
//     46,
//     47,
//     48,
//     49,
//     50,
//     51,
//     52,
//     53,
//     54,
//     55,
//     56,
//     57,
//     58,
//     59,
//     60,
//     61,
//     62,
//     63,
//     64,
//     65,
//     66,
//     67,
//     68,
//     69,
//     70,
//     71,
//     72,
//     73,
//     74,
//     75,
//     76,
//     77,
//     78,
//     79,
//     80,
//     81,
//     82,
//     83,
//     84,
//     85,
//     86,
//     87,
//     88,
//     89,
//     90,
//     91,
//     92,
//     93,
//     94,
//     95,
//     96,
//     97,
//     98,
//     99,
//     100,
//     101,
//     102,
//     103,
//     104,
//     105,
//     106,
//     107,
//     108,
//     109,
//     110,
//     111,
//     112,
//     113,
//     114,
//     115,
//     116,
//     117,
//     118,
//     119,
//     120,
//     121,
//     122,
//     123,
//     124,
//     125,
//     126,
//     127,
//     128,
//     129,
//     130,
//     131,
//     132,
//     133,
//     134,
//     135,
//     136,
//     137,
//     138,
//     139,
//     140,
//     141,
//     142,
//     143,
//     144,
//     145
//   ])
// );
// // 145
