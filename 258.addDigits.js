/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  let ret = num;

  while (ret >= 10) {
    let numStr = String(ret);
    ret = 0;
    for (let i = 0; i < numStr.length; i++) {
      ret += Number(numStr[i]);
    }
  }

  return ret;
};

// best sol from web
// var addDigits = function(num) {
//   // Congruence Formula, Time: O(1), Space: O(1)
//   return num > 0 ? ((num - 1) % 9) + 1 : 0;
// };

console.log(addDigits(38));

// 2
