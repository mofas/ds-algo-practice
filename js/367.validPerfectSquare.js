/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  let r = 1;
  while (r * r < num) {
    r += Math.floor((num - r * r) / num) + 1;
  }

  return r * r === num;
};

console.log(isPerfectSquare(16));
// true

console.log(isPerfectSquare(144));
// true

console.log(isPerfectSquare(14));
// false

console.log(isPerfectSquare(90));
// false
