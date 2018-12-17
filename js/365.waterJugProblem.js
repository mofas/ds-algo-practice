/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {boolean}
 */

const getGcd = (e, f) => {
  while (e !== 0 && f !== 0) {
    if (e > f) e = e % f;
    else f = f % e;
  }
  return e || f;
};

var canMeasureWater = function(x, y, z) {
  if (z === 0) return true;
  const gcd = getGcd(x, y);
  return z % gcd === 0 && x + y >= z;
};

console.log(canMeasureWater(3, 5, 4));
// true

console.log(canMeasureWater(8, 12, 4));
// true

console.log(canMeasureWater(0, 0, 0));
// true

console.log(canMeasureWater(2, 6, 5));
// false

console.log(canMeasureWater(1, 1, 12));
// false
