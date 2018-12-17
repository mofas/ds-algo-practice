/**
 * @param {number} num
 * @return {string}
 */

// also the best sol from web
var toHex = function(num) {
  return num >= 0 ? num.toString(16) : Number(4294967296 + num).toString(16);
};

// don't use toString
// 15 bit mask is 1111
var toHex = function(num) {
  let res = '',
    map = [
      '0',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      'a',
      'b',
      'c',
      'd',
      'e',
      'f'
    ];
  if (num == 0) {
    return '0';
  }

  while (num != 0) {
    res = map[num & 15] + res;
    num = num >>> 4;
  }

  return res;
};

console.log(toHex(0));
// 0

console.log(toHex(26));
// 1a

console.log(toHex(-1));
// ffffffff
