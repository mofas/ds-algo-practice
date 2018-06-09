/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function(n) {
  // all combination - the first digit is zero
  if (n === 0) return 1;
  let ret = 0;
  for (let i = 1; i <= n; i++) {
    // calculate digit num is i
    let comb = 1;
    let combWithZeroHead = i === 1 ? 0 : 1;
    // all combination with digit num is i
    for (let j = 0; j < i; j++) {
      comb *= 10 - j;
    }
    for (let j = 1; j < i; j++) {
      combWithZeroHead *= 10 - j;
    }
    ret += comb - combWithZeroHead;
  }

  return ret;
};

console.log(countNumbersWithUniqueDigits(1));
// 10

console.log(countNumbersWithUniqueDigits(2));
// 91 =  10*9 - 1*9  + 10

console.log(countNumbersWithUniqueDigits(3));
// // 739

console.log(countNumbersWithUniqueDigits(4));
// // 5275

console.log(countNumbersWithUniqueDigits(5));
// // 32491
