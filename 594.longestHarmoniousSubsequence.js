/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
  let hash = {};
  let ret = 0;

  nums.forEach(d => {
    if (hash[d]) hash[d]++;
    else hash[d] = 1;
  });

  Object.keys(hash).forEach(k => {
    let next = Number(k) + 1;
    if (hash[next] && hash[next] + hash[k] > ret) {
      ret = hash[next] + hash[k];
    }
  });

  return ret;
};

console.log(findLHS([1, 3, 2, 2, 5, 2, 3, 7]));
// 5
