/**
 * @param {number[]} nums
 * @return {number}
 */

// using the sol from 300
function binarySearchGte(nums, k) {
  let i = 0;
  let j = nums.length - 1;
  while (i <= j) {
    const mid = ((i + j) / 2) | 0;
    if (nums[mid] >= k && (!mid || nums[mid - 1] < k)) {
      return mid;
    }
    if (nums[mid] < k) {
      i = mid + 1;
    } else {
      j = mid - 1;
    }
  }
  return -1;
}

// 1048 ms
var findNumberOfLIS = function(nums) {
  const n = nums.length;
  if (n < 2) return n;

  let c = [new Set([nums[0]])];
  const list = [nums[0]];

  for (let i = 1; i < n; i++) {
    const num = nums[i];
    if (num > list[list.length - 1]) {
      list.push(num);
      c.push(new Set([num]));
    } else {
      const toUpdate = binarySearchGte(list, num);
      list[toUpdate] = num;
      c[toUpdate].add(num);
    }
    // console.log(list, c);
  }

  // console.log(c);
  const calComb = (i, scanEnd, prev) => {
    if (i === 0) return 1;
    if (scanEnd === 0) return 0;
    let ret = 0;
    for (const m of c[i - 1]) {
      if (m < prev) {
        for (let j = scanEnd; j > 0; j--) {
          if (nums[j - 1] === m) ret += calComb(i - 1, j, m);
        }
      }
    }
    return ret;
  };

  return calComb(c.length, n, Infinity);
};

// best sol from web
// 76ms
// also the sol from discussion board
var findNumberOfLIS = function(nums) {
  let len = [];
  let cnt = [];
  let maxCnt = 0;
  let maxLen = 0;
  for (let i = 0; i < nums.length; i++) {
    cnt[i] = 1;
    len[i] = 1;
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        if (len[i] < len[j] + 1) {
          len[i] = len[j] + 1;
          cnt[i] = cnt[j];
        } else if (len[i] === len[j] + 1) {
          cnt[i] += cnt[j];
        }
      }
    }

    if (maxLen < len[i]) {
      maxCnt = cnt[i];
      maxLen = len[i];
    } else if (maxLen === len[i]) {
      maxCnt += cnt[i];
    }
    // console.log(len, cnt, 'max', maxLen, maxCnt);
  }
  return maxCnt;
};

console.log(findNumberOfLIS([1, 3, 5, 4, 7]));
// 2

console.log(findNumberOfLIS([1, 2, 4, 3, 5, 4, 7, 2]));
// 3

console.log(findNumberOfLIS([2, 2, 2, 2, 2]));
// 5

console.log(findNumberOfLIS([1, 2, 3, 1, 2, 3, 1, 2, 3]));
// 10
