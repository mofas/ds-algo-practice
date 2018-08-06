/**
 * @param {number} num
 * @return {number}
 */

const binUtil = require('./bin.util');
const { dec2bin, bin2dec } = binUtil;

var findComplement = function(num) {
  const binStr = dec2bin(num);

  let binArr = binStr.split('').map(d => {
    return d === '0' ? '1' : '0';
  });
  // console.log(binArr);

  return bin2dec(binArr.join(''));
};

// another sol
// var findComplement = function(num) {
//   var res = 0;
//   var n = 0;
//   while (Math.pow(2, n) - 1 < num) {
//     n++;
//   }
//   res = Math.pow(2, n) - 1 - num;
//   return res;
// };

console.log(findComplement(5));
// 2

console.log(findComplement(1));
// 0
