/**
 * @param {number[]} nums
 * @return {number}
 */

// 208ms
// String operation is too expensive
var totalHammingDistance = function(nums) {
  const n = nums.length;
  const bucket = new Array(31).fill(0);
  nums.map(d => d.toString(2)).forEach(d => {
    const m = d.length;
    for (let i = 1; i <= m; i++) {
      if (d[m - i] === '1') bucket[i - 1]++;
    }
  });
  // console.log(bucket);
  let res = 0;
  for (let i = 0; i < 31; i++) {
    // console.log(bucket[i], n - bucket[i]);
    res += bucket[i] * (n - bucket[i]);
  }
  return res;
};

// best sol from web
// 68 ms
var totalHammingDistance = function(nums) {
  var res = 0;
  var n = nums.length;
  for (let offset = 0; offset < 32; offset++) {
    var oneCount = 0;
    for (let i = 0; i < n; i++) {
      oneCount += (nums[i] >> offset) & 1;
    }
    var notOneCount = n - oneCount;
    res = res + oneCount * notOneCount;
  }
  return res;
};

console.log(totalHammingDistance([4, 14, 2]));
// 6
