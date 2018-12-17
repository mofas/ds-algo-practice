/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
  const hash = {};
  for (let i = 0; i < s.length; i++) {
    hash[s[i]] = hash[s[i]] ? hash[s[i]] + 1 : 1;
  }
  for (let i = 0; i < t.length; i++) {
    if (!hash[t[i]]) return t[i];
    else hash[t[i]]--;
  }
};

// best sol from web
// var findTheDifference = function(s, t) {
//   return String.fromCharCode(wordSum(t) - wordSum(s));
// };

// var wordSum = function(word) {
//   var sum = 0;
//   word
//     .toLowerCase()
//     .split('')
//     .forEach(function(alphabet) {
//       sum += alphabet.charCodeAt(0);
//     });
//   return sum;
// };

console.log(findTheDifference('abcd', 'abcde'));
// 'e'
