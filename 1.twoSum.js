// brute force
// var twoSum = function(numbers, target) {
//   const len = numbers.length;

//   for (let i = 0; i < len - 1; i++) {
//     for (let j = i + 1; j < len; j++) {
//       if (numbers[i] + numbers[j] === target) {
//         return [i, j];
//       }
//     }
//   }
//   return [];
// };

// we can use hash look up to improve performance.
var twoSum = function(numbers, target) {
  const len = numbers.length;
  const hash = {};
  for (let i = 0; i < len; i++) {
    if (hash[target - numbers[i]] != null) {
      return [hash[target - numbers[i]], i];
    }
    hash[numbers[i]] = i;
  }
  return [];
};

console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSum([3, 2, 4], 6)); // [1, 2]
