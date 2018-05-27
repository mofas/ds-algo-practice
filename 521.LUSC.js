/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var findLUSlength = function(a, b) {
  if (a === b) return -1;
  return Math.max(a.length, b.length);
};

console.log(findLUSlength('aba', 'cdc')); // 3

console.log(findLUSlength('abcde', 'cdeab')); // 5

console.log(findLUSlength('abcd', 'cde')); // 4

console.log(findLUSlength('abcd', 'abcde')); // 5
