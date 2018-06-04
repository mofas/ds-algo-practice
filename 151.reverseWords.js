/**
 * @param {string} str
 * @returns {string}
 */

// extremely boring
var reverseWords = function(str) {
  return str
    .trim()
    .split(/\s+/g)
    .reverse()
    .join(' ');
};

console.log(reverseWords('the sky is blue'));
// blue is sky the

console.log(reverseWords('   a   b '));
// 'b a';
