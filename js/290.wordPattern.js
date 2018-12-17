/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
  const used = new Set();
  const hash = {};
  const arr = str.split(' ');
  if (arr.length !== pattern.length) return false;

  for (let i = 0; i < pattern.length; i++) {
    if (!hash[pattern[i]]) {
      if (used.has(arr[i])) return false;
      used.add(arr[i]);
      hash[pattern[i]] = arr[i];
    } else {
      if (hash[pattern[i]] !== arr[i]) return false;
    }
  }
  return true;
};

console.log(wordPattern('abba', 'dog cat cat dog'));
// true

console.log(wordPattern('abba', 'dog cat cat fish'));
// false

console.log(wordPattern('aaaa', 'dog cat cat dog'));
// false

console.log(wordPattern('abba', 'dog dog dog dog'));
// false
