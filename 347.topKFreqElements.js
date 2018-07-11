/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  const hash = {};
  nums.forEach(d => {
    if (hash[d]) hash[d]++;
    else hash[d] = 1;
  });
  return Object.keys(hash)
    .sort((a, b) => hash[b] - hash[a])
    .slice(0, k)
    .map(d => +d);
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
// [1, 2]
