/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayNesting = function(nums) {
  //TODO
  const len = nums.length;
  const hash = {};
  let max = 0;
  for (let i = 0; i < len; i++) {
    if (hash[i] == null) {
      const from = nums[i];
      hash[from] = 1;
      let current = from;
      let count = 1;
      while (current !== i) {
        current = nums[current];
        hash[current] = 1;
        count++;
        // console.log('current', current);
      }
      // console.log('count', i, count);
      if (count > max) {
        max = count;
      }
    }
  }
  return max;
};

console.log(arrayNesting([5, 4, 0, 3, 1, 6, 2])); // 4
