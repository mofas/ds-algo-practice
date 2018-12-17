/**
 * @param {string} digits
 * @return {string[]}
 */

const mapping = [
  ['a', 'b', 'c'],
  ['d', 'e', 'f'],
  ['g', 'h', 'i'],
  ['j', 'k', 'l'],
  ['m', 'n', 'o'],
  ['p', 'q', 'r', 's'],
  ['t', 'u', 'v'],
  ['w', 'x', 'y', 'z']
];
var letterCombinations = function(digits) {
  const n = digits.length;
  if (n === 0) return [];

  const digit = digits.charAt(0);
  const mappingChar = mapping[Number(digit) - 2];
  let ret = mappingChar.slice();

  for (let i = 1; i < n; i++) {
    const digit = digits.charAt(i);
    const mappingChar = mapping[Number(digit) - 2];
    let newRet = [];
    for (let j = 0; j < ret.length; j++) {
      for (let k = 0; k < mappingChar.length; k++) {
        newRet.push(ret[j] + mappingChar[k]);
      }
    }
    ret = newRet;
  }

  return ret;
};

console.log(letterCombinations('23'));
// ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'];

console.log(letterCombinations('789'));
