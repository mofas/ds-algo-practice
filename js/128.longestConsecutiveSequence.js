/**
 * @param {number[]} nums
 * @return {number}
 */
// 200ms
var longestConsecutive = function(nums) {
  if (nums.length === 0) return 0;
  // key: value -> start, end
  const hash = {};
  const checkSet = new Set();

  for (const num of nums) {
    if (checkSet.has(num)) continue;
    checkSet.add(num);
    let increasedFrom = num;
    let isMerged = false;
    for (const start in hash) {
      if (num - hash[start] === 1) {
        hash[start]++;
        increasedFrom = start;
        isMerged = true;
      }
    }
    // console.log('hash', hash);
    // check if we can merge two period
    let merged = true;
    let mergedFrom = num;
    while (merged) {
      merged = false;
      for (const start in hash) {
        // console.log(Number(start), mergedFrom + 1);
        if (mergedFrom + 1 === Number(start)) {
          hash[increasedFrom] = hash[start];
          delete hash[start];
          merged = true;
          isMerged = true;
          // console.log('trigger', mergedFrom, start);
          mergedFrom = Number(start);
        }
      }
    }

    if (!isMerged) {
      hash[num] = num;
    }
  }
  // console.log('hash', hash);
  let max = 1;
  for (const start in hash) {
    max = Math.max(max, hash[start] - Number(start) + 1);
  }
  return max;
};

// best sol
// 60ms
var longestConsecutive = function(nums) {
  let map = {},
    max = 0;
  nums.forEach(n => (map[n] = true));
  // console.log(map);
  nums.forEach(n => {
    if (map[n]) {
      let left = 0,
        right = 0,
        s = n,
        e = n;
      while (map[--s]) {
        left++;
        map[s] = false;
      }
      while (map[++e]) {
        right++;
        map[e] = false;
      }
      max = Math.max(max, left + right + 1);
    }
  });
  return max;
};

// console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
// // 4 [1,2,3,4]

// console.log(longestConsecutive([4, 5, 1, 2, 3]));
// // 5

// console.log(longestConsecutive([0, -1]));
// // 2

console.log(longestConsecutive([-1, -9, -5, -2, -9, 8, -8, 1, -9, -3, -3]));
// 3
