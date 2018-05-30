/**
 * @param {number[]} nums
 * @return {string}
 */
var optimalDivision = function(nums) {
  const n = nums.length;

  if (n === 1) return `${nums[0]}`;
  if (n === 2) return `${nums[0]}/${nums[1]}`;

  let ret = `${nums[0]}/(`;
  for (let i = 1; i < n - 1; i++) {
    ret += `${nums[i]}/`;
  }

  ret += `${nums[n - 1]})`;

  return ret;
};

// best sol from web
// var optimalDivision = function(nums) {
//   if (nums.length == 1) return nums[0] + '';
//   else if (nums.length == 2) return nums[0] + '/' + nums[1];
//   else {
//     var result = nums[0] + '/(';
//     var l = nums.length;
//     for (var i = 1; i < l - 1; i++) result = result + nums[i] + '/';
//     result = result + nums[l - 1] + ')';
//     return result;
//   }
// };

console.log(optimalDivision([1000, 100, 10, 2])); //
