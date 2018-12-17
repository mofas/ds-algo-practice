/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const xArr = String(Math.abs(x)).split('');
  xArr.reverse();
  while (xArr[0] === '0') xArr.shift();
  let ret = Number(xArr.join(''));
  if (x > 0) {
    return ret > 2147483647 ? 0 : ret;
  } else {
    return ret > 2147483648 ? 0 : -ret;
  }
};

console.log(reverse(123));
// 321

console.log(reverse(-123));
// -321

console.log(reverse(1200));
// 21

console.log(reverse(1534236469));
// 0
