/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
  let acc = 1;
  let i = 1;
  while (acc <= n) {
    i++;
    acc += i;
  }
  return i - 1;
};

// best sol from web
// time complexity is O(logn)
// using binary search with triangle sum!

// var arrangeCoins = function(n) {
//   var lo = 1,
//     hi = n,
//     mid;
//   while (lo <= hi) {
//     mid = Math.floor((lo + hi) / 2);
//     if ((mid * (mid + 1)) / 2 <= n) {
//       lo = mid + 1;
//     } else {
//       hi = mid - 1;
//     }
//   }
//   return lo - 1;
// };

console.log(arrangeCoins(5));
// 2

console.log(arrangeCoins(8));
// 3

console.log(arrangeCoins(120));
// 15
