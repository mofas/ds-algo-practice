/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
  const len = flowerbed.length;

  let i = 0;
  let possible = 0;
  while (i < len - 1) {
    // 0 0 => _ possible++
    if (flowerbed[i] === 0 && flowerbed[i + 1] === 0) {
      i += 2;
      possible++;
    }
    // 1 0 => _
    else if (flowerbed[i] === 1 && flowerbed[i + 1] === 0) {
      i += 2;
    } else {
      i++;
    }
  }

  if (flowerbed[i] === 0) {
    possible++;
  }
  return possible >= n;
};

console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1)); // true

console.log(canPlaceFlowers([1, 0, 0, 0, 0, 1], 1)); // true

console.log(canPlaceFlowers([1, 0, 0, 0, 1, 0, 0], 2)); // true

console.log(canPlaceFlowers([1, 0, 0, 1, 0], 1)); // false

console.log(canPlaceFlowers([1, 0, 0, 0, 1], 2)); // false

console.log(canPlaceFlowers([1, 0, 0, 1, 0, 0, 1], 1)); // false

console.log(canPlaceFlowers([0, 1, 0, 0, 1, 0], 1)); // false
