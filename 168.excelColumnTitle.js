/**
 * @param {number} n
 * @return {string}
 */

var convertToTitle = function(n) {
  let ret = '';
  while (n > 0) {
    const red = n % 26;
    if (red === 0) {
      n = n / 26 - 1;
      ret = 'Z' + ret;
    } else {
      ret = String.fromCharCode(red + 64) + ret;
      n = (n - red) / 26;
    }
  }
  return ret;
};

// best sol from web
// var convertToTitle = function(n) {
//   if (n <= 0) return '';
//   n -= 1;
//   return (
//     convertToTitle(parseInt(n / 26)) +
//     String.fromCharCode('A'.charCodeAt(0) + (n % 26))
//   );
// };

console.log(convertToTitle(1));
// A

console.log(convertToTitle(28));
// AB

console.log(convertToTitle(701));
// ZY
