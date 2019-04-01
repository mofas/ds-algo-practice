// /**
//  * @param {number[]} nums
//  * @return {number[][]}
//  */

// // 68ms
// var permute = function(nums) {
//   const len = nums.length;
//   let ret = [new Array(len).fill(null)];
//   let next = [];

//   for (let i = 0; i < len; i++) {
//     for (const item of ret) {
//       for (let j = 0; j < len; j++) {
//         if (item[j] == null) {
//           let newCopy = item.slice();
//           newCopy[j] = nums[i];
//           next.push(newCopy);
//         }
//       }
//     }
//     ret = next;
//     next = [];
//   }
//   return ret;
// };

var permute = function(nums) {
  const n = nums.length;
  let ret = [];

  // DPS with back tracking
  const set = new Set(nums);
  const helper = (current, set) => {
    if (set.size === 0) {
      ret.push(current.slice());
    } else {
      // avoid loop
      let iterSet = new Set(set);
      for (const num of iterSet) {
        current.push(num);
        set.delete(num);
        helper(current, set);
        current.pop();
        set.add(num);
      }
    }
  };

  helper([], set);

  return ret;
};

console.log(permute([1, 2, 3]));

console.log(permute([3, 4, 5, 7]));
