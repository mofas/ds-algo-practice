/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  let last = n;
  let current = n;
  while (current !== 1 && current !== 7) {
    current = 0;
    while (last > 0) {
      current += (last % 10) * (last % 10);
      last = Math.floor(last / 10);
    }
    last = current;

    if (
      current === 2 ||
      current === 3 ||
      current === 4 ||
      current === 5 ||
      current === 6 ||
      current === 8 ||
      current === 9
    )
      return false;
  }

  return true;
};

console.log(isHappy(19));
// true

console.log(isHappy(23));
// true

console.log(isHappy(2));
// false

console.log(isHappy(3));
// false

console.log(isHappy(9));
// false

console.log(isHappy(48));
// false

console.log(isHappy(37));
// false
