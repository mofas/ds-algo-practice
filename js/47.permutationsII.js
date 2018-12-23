/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// from the website
// 76ms
var permuteUnique = function(nums) {
  const len = nums.length;
  nums.sort();

  const ret = [];

  const swap = (arr, i, j) => {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  };

  const helper = (arr, pos) => {
    // console.log(arr, i);
    if (pos === len - 1) {
      ret.push(arr);
      return;
    }
    for (let k = pos; k < len; k++) {
      if (pos !== k && arr[pos] === arr[k]) continue;
      swap(arr, pos, k);
      helper(arr.slice(), pos + 1);
    }
  };
  helper(nums, 0);
  return ret;
};

console.log(permuteUnique([1, 1, 2]));
// [
//   [1,1,2],
//   [1,2,1],
//   [2,1,1]
// ]

// console.log(permuteUnique([1, 1, 2, 3]));

console.log(permuteUnique([2, 2, 1, 1]));
