/**
 * @param {number[]} nums
 * @return {boolean}
 */

// using up all those matchsticks.
// slow : 1108ms 10x slower
var makesquare = function(nums) {
  const n = nums.length;
  let acc = 0;
  for (let i = 0; i < n; i++) {
    acc += nums[i];
  }
  if (acc % 4 !== 0 || n < 4) return false;
  const size = acc / 4;
  nums.sort((a, b) => b - a);
  const helper = (currentLen, sticks) => {
    // console.log(currentLen, sticks);
    let prev = null;
    if (sticks.length === 0 && currentLen === 0) return true;
    for (let i = 0; i < sticks.length; i++) {
      if (prev !== sticks[i] && currentLen + sticks[i] <= size) {
        const nextLen = (currentLen + sticks[i]) % size;
        const nextSticks = sticks
          .slice(0, i)
          .concat(sticks.slice(i + 1, sticks.length));
        if (helper(nextLen, nextSticks)) {
          return true;
        }
      }
      prev = sticks[i];
    }

    return false;
  };
  return helper(0, nums);
};

// my tranlation for the fatest sol on disucssion board
// 64ms
var makesquare = function(nums) {
  const n = nums.length;
  let acc = 0;
  for (let i = 0; i < n; i++) {
    acc += nums[i];
  }
  if (acc % 4 !== 0 || n < 4) return false;
  const size = acc / 4;
  nums.sort((a, b) => b - a);

  const dfs = (sidesLength, idx) => {
    // console.log(sidesLength, idx);
    if (idx === nums.length) {
      return (
        sidesLength[0] === sidesLength[1] &&
        sidesLength[1] === sidesLength[2] &&
        sidesLength[2] === sidesLength[3]
      );
    }
    for (let i = 0; i < 4; i++) {
      if (sidesLength[i] + nums[idx] > size) continue;
      let j = i;
      while (--j >= 0) {
        if (sidesLength[i] === sidesLength[j]) break;
      }
      if (j !== -1) continue;
      sidesLength[i] += nums[idx];
      if (dfs(sidesLength, idx + 1)) return true;
      sidesLength[i] -= nums[idx];
    }
    return false;
  };

  return dfs(new Array(4).fill(0).map(_ => 0), 0);
};

// console.log(makesquare([1, 1, 2, 2, 2]));
// // true

// console.log(makesquare([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]));
// // true

// console.log(makesquare([3, 3, 3, 3, 4]));
// // false

console.log(makesquare([5, 5, 5, 5, 16, 4, 4, 4, 4, 4, 3, 3, 3, 3, 4]));
// false
