/**
 * @param {number[]} candies
 * @return {number}
 */
var distributeCandies = function(candies) {
  const hash = new Set();
  const n = candies.length;

  candies.forEach(d => {
    hash.add(d);
  });
  const uniq = hash.size;
  return Math.min(n >> 1, uniq);
};

// best sol from web
// some performance gain by  early return

// var distributeCandies = function(candies) {
//   var set = new Set();
//   for (var i = 0; i < candies.length && set.size < candies.length / 2; i++) {
//     var candy = candies[i];
//     set.add(candy);
//   }
//   return Math.min(set.size, candies.length / 2);
// };

console.log(distributeCandies([1, 1, 2, 2, 3, 3]));
// 3

console.log(distributeCandies([1, 1, 2, 3]));
// 3
