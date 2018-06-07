/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) return false;

  const xStr = String(x);
  const n = xStr.length;
  for (let i = 0; i < Math.ceil(n / 2); i++) {
    if (xStr[i] !== xStr[n - i - 1]) return false;
  }
  return true;
};

console.log(isPalindrome(121));
// true

console.log(isPalindrome(1234321));
// true

console.log(isPalindrome(-121));
// false

console.log(isPalindrome(10));
// false
