/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function(S) {
  let ret = [''];
  let next = [];
  for (let i = 0; i < S.length; i++) {
    next = [];
    const chCode = S.charCodeAt(i);
    if (chCode >= 65) {
      ret.forEach(d => {
        next.push(d + S[i].toUpperCase());
        next.push(d + S[i].toLowerCase());
      });
    } else {
      ret.forEach(d => {
        next.push(d + S[i].toLowerCase());
      });
    }
    ret = next;
  }
  return ret;
};

console.log(letterCasePermutation(''));
// [""]

console.log(letterCasePermutation('C'));
// ["C", "c"]

console.log(letterCasePermutation('a1b2'));
// ["a1b2", "a1B2", "A1b2", "A1B2"]

console.log(letterCasePermutation('3z4'));
// ["3z4", "3Z4"]

console.log(letterCasePermutation('12345'));
// ["12345"]
