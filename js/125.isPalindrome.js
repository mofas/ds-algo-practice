/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  const santized = s.toLowerCase().replace(/\W/g, '');
  const n = santized.length;

  console.log(santized);
  for (let i = 0; i < n / 2; i++) {
    // console.log(i, santized[i], santized[n - i - 1]);
    if (santized[i] !== santized[n - i - 1]) return false;
  }
  return true;
};

console.log(isPalindrome('A man, a plan, a canal: Panama')); // true
console.log(isPalindrome('A man, a plan, a canal -- Panama')); // true
console.log(isPalindrome('Marge, let\'s "went." I await news telegram.')); // true

console.log(isPalindrome('race a car')); // false
