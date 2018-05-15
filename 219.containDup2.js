// brute force
// var containsNearbyDuplicate = function(nums, k) {
//   if (k === 0) return false;

//   const len = nums.length;

//   for (let i = 1; i < k; i++) {
//     if (nums[0] === nums[i]) return true;
//   }

//   for (let i = 0; i < len - k; i++) {
//     for (let j = i + 1; j < i + k + 1; j++) {
//       if (nums[i] === nums[j]) return true;
//     }
//   }

//   for (let i = len - k; i < len - 1; i++) {
//     if (nums[i] === nums[len - 1]) return true;
//   }

//   return false;
// };

// hash map
var containsNearbyDuplicate = function(nums, k) {
  const hash = {};
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    if (hash[nums[i]] != null && i - hash[nums[i]] <= k) {
      return true;
    }
    hash[nums[i]] = i;
  }
  return false;
};

console.log(containsNearbyDuplicate([99, 99], 2)); // true

console.log(containsNearbyDuplicate([2, 2], 3)); // true

console.log(containsNearbyDuplicate([1, 2, 3, 4, 5, 6, 7, 8, 9, 9], 3)); // true

console.log(containsNearbyDuplicate([3, 2, 5, 1, 1, 2, 3], 3)); // true

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3)); // true

console.log(containsNearbyDuplicate([1, 0, 1, 1], 1)); // true

console.log(containsNearbyDuplicate([1, 2, 1], 0)); // false

console.log(containsNearbyDuplicate([3, 2, 1, 2, 3], 1)); // false
