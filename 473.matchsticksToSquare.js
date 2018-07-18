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

// best sol from web
// 68ms
var makesquare = function(nums) {
  if (nums.length < 4) return false;

  nums.sort((a, b) => a - b);

  let s = 0;
  let max = 0;
  for (let i = 0; i < nums.length; ++i) {
    let num = nums[i];
    max += num;
  }
  if (max == 0 || max % 4 != 0) {
    return false;
  }
  s = max / 4;
  for (let m = 0; m < 4; ++m) {
    var index = [];
    let n = 0;
    for (let j = nums.length - 1; j >= 0; --j) {
      let num = nums[j];
      let next = n + num;
      if (next < s) {
        if (j == 0) {
          if (index.length == 0) {
            return false;
          }
          j = index[index.length - 1];
          n -= nums[j];
          index.splice(index.length - 1, 1);
        } else {
          n += num;
          index.push(j);
        }
      } else if (next == s) {
        n += num;
        index.push(j);
        break;
      } else {
        if (j == 0) {
          if (index.length == 0) {
            return false;
          }
          j = index[index.length - 1];
          n -= nums[j];
          index.splice(index.length - 1, 1);
        }
      }
    }
    if (n != s) {
      return false;
    } else {
      for (let k = 0; k < index.length; ++k) {
        let i = index[k];
        nums.splice(i, 1);
      }
    }
  }
  return true;
};

console.log(makesquare([1, 1, 2, 2, 2]));
// true

console.log(makesquare([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]));
// true

console.log(makesquare([3, 3, 3, 3, 4]));
// false

console.log(makesquare([5, 5, 5, 5, 16, 4, 4, 4, 4, 4, 3, 3, 3, 3, 4]));
// false
