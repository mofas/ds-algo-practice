const getsubArraybyEle = nums => target => {
  let from = 0;
  let to = nums.length - 1;
  while (nums[from] !== target) {
    from++;
  }

  while (nums[to] !== target) {
    to--;
  }
  return to - from + 1;
};

// Dict lookup is much faster than bucket lookup.
var findShortestSubArray = function(nums) {
  const bucket = {};
  const candidates = [];

  nums.forEach(d => {
    bucket[d] = bucket[d] ? bucket[d] + 1 : 1;
  });

  const max = Math.max(...Object.values(bucket));

  Object.keys(bucket).forEach(key => {
    if (bucket[key] === max) {
      candidates.push(Number(key));
    }
  });

  return Math.min(...candidates.map(getsubArraybyEle(nums)));
};

console.log(findShortestSubArray([1, 2, 2, 3, 1])); // 2

console.log(findShortestSubArray([1, 7, 7, 3, 1, 4, 7])); // 6

console.log(findShortestSubArray([4, 4, 1, 2, 3, 4, 5, 6, 7, 4])); // 10
