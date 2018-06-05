/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  const min = -2147483648;
  const max = 2147483647;
  const matched = /^\s*([-+]?\d+)/g.exec(str);
  // console.log(matched);
  if (matched) {
    const ret = Number(matched[1]);
    return ret > max ? max : ret < min ? min : ret;
  }
  return 0;
};

console.log(myAtoi('42'));
// 42

console.log(myAtoi('+2'));
// 2

console.log(myAtoi('   -42'));
// -42

console.log(myAtoi('4193 with words'));
// 4193

console.log(myAtoi('words and 987'));
// 0

console.log(myAtoi('-91283472332'));
// -2147483648
