/**
 * @param {number} num
 * @return {string}
 */

// Runtime: 68 ms, faster than 93.33%
// Memory Usage: 35 MB, less than 59.09%
const tyNumberToWord = {
  1: 'Ten',
  2: 'Twenty',
  3: 'Thirty',
  4: 'Forty',
  5: 'Fifty',
  6: 'Sixty',
  7: 'Seventy',
  8: 'Eighty',
  9: 'Ninety',
  0: ''
};

const tenthNumberToWord = {
  10: 'Ten',
  11: 'Eleven',
  12: 'Twelve',
  13: 'Thirteen',
  14: 'Fourteen',
  15: 'Fifteen',
  16: 'Sixteen',
  17: 'Seventeen',
  18: 'Eighteen',
  19: 'Nineteen'
};

const numberToWord = {
  1: 'One',
  2: 'Two',
  3: 'Three',
  4: 'Four',
  5: 'Five',
  6: 'Six',
  7: 'Seven',
  8: 'Eight',
  9: 'Nine',
  0: ''
};
const level = ['Billion', 'Million', 'Thousand', ''];
const threeDigitsToWords = num => {
  const chars = String(num).split('');
  let ret = '';
  if (num >= 100) {
    ret += numberToWord[chars[0]] + ' Hundred ';
    num %= 100;
    chars.shift();
  }
  while (chars[0] === '0') chars.shift();
  if (chars.length > 0) {
    if (num > 19) {
      ret += (tyNumberToWord[chars[0]] + ' ' + numberToWord[chars[1]]).trim();
    } else if (num >= 10) {
      ret += tenthNumberToWord[num];
    } else {
      ret += numberToWord[chars[0]];
    }
  }
  return ret.trim();
};

var numberToWords = function(num) {
  if (num === 0) return 'Zero';
  const n = num.length;
  const group = [];
  let cc = 0;
  while (num >= 1000) {
    group.unshift(num % 1000);
    num = Math.floor(num / 1000);
  }
  if (num > 0) group.unshift(num);
  const words = group.map(threeDigitsToWords);
  let ret = '';
  // console.log(group, words);
  const groupsLen = group.length;
  for (let i = 0; i < words.length; i++) {
    if (words[i] !== '') {
      ret += words[i] + ' ' + level[i + (4 - groupsLen)] + ' ';
    }
  }

  return ret.trim();
};

// Best
/**
const BASIC = [
  'Zero',
  'One',
  'Two',
  'Three',
  'Four',
  'Five',
  'Six',
  'Seven',
  'Eight',
  'Nine',
  'Ten',
  'Eleven',
  'Twelve',
  'Thirteen',
  'Fourteen',
  'Fifteen',
  'Sixteen',
  'Seventeen',
  'Eighteen',
  'Nineteen'
];
const TWENTIES = [
  '',
  '',
  'Twenty',
  'Thirty',
  'Forty',
  'Fifty',
  'Sixty',
  'Seventy',
  'Eighty',
  'Ninety'
];
const HUNDREDS = ['Hundred'];
const THOUSANDS = ['', 'Thousand', 'Million', 'Billion', 'Trillion'];

var numberToWords = function(num) {
  if (num === 0) {
    return BASIC[0];
  }

  let ans = '';
  for (let i = THOUSANDS.length - 1; i >= 0; i -= 1) {
    const divider = Math.pow(1000, i);
    if (num < divider) {
      continue;
    }
    ans += threePack(Math.floor(num / divider));
    ans += THOUSANDS[i] === '' ? '' : THOUSANDS[i] + ' ';
    num %= divider;
  }

  return ans.substring(0, ans.length - 1);
};

// num MUST BE less than 1000
function threePack(num) {
  let res = '';
  if (num >= 100) {
    res += BASIC[Math.floor(num / 100)] + ' ';
    res += HUNDREDS[0] + ' ';
    num %= 100;
  }
  if (num >= 20) {
    res += TWENTIES[Math.floor(num / 10)] + ' ';
    num %= 10;
  }
  if (num > 0) {
    res += BASIC[num] + ' ';
  }
  return res;
}
*/

// console.log(numberToWords(111));
// // "One Hundred One"

// console.log(numberToWords(101));
// // "One Hundred One"

// console.log(numberToWords(20));
// // "Twenty"

// console.log(numberToWords(123));
// // "One Hundred Twenty Three"

// console.log(numberToWords(12345));
// // "Twelve Thousand Three Hundred Forty Five"

console.log(numberToWords(10));
// "Ten"

console.log(numberToWords(100));
// "One Hundred"

console.log(numberToWords(1000));
// "One Thousand"

console.log(numberToWords(1000000));
// "One Million"

// console.log(numberToWords(1200067));
// // "One Million Two Hundred Thousand Sixty Seven"

// // console.log(numberToWords(2147483647));
// // // "Two Billion One Hundred Forty Seven Million Four Hundred Eighty Three Thousand Six Hundred Forty Seven"
