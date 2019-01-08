/**
 * @param {number} num
 * @return {string}
 */
// 52ms
var convertToBase7 = function(num) {
  if (num === 0) return '0';
  let sign = '';
  let ret = '';
  if (num < 0) {
    num = Math.abs(num);
    sign = '-';
  }
  while (num > 0) {
    ret = (num % 7) + ret;
    num = parseInt(num / 7);
  }
  return sign + ret;
};

console.log(convertToBase7(45));
// "63"

console.log(convertToBase7(100));
// "202"

console.log(convertToBase7(-7));
// "-10"
