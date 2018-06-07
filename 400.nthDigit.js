/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function(n) {
  //
  let base = 9;
  let digitNum = 1;
  let digitAcc = 0;
  while (digitAcc + base * digitNum < n) {
    digitAcc += base * digitNum;
    digitNum++;
    base *= 10;
  }

  let remind = n - digitAcc;

  const nthNum = Math.ceil(remind / digitNum);
  const countFrom = digitNum > 1 ? Math.pow(10, digitNum - 1) - 1 : 0;
  const targetNum = countFrom + nthNum;
  let nthDigitInNum = remind - nthNum * digitNum;
  if (nthDigitInNum === 0) {
    return targetNum % 10;
  } else {
    // console.log('targetNum', targetNum, '=== digit', nthDigitInNum);
    const targetDigit = Number(
      String(targetNum).charAt(digitNum + nthDigitInNum - 1)
    );
    return targetDigit;
  }
};

// best sol from web
// var findNthDigit = function(n) {
//   if (n < 10) return n;
//   n -= 1;
//   let digitInNumber = 1;
//   let rangeNumber = 1;
//   while (n / 9 / rangeNumber / digitInNumber >= 1) {
//     n -= 9 * rangeNumber * digitInNumber;
//     digitInNumber += 1;
//     rangeNumber *= 10;
//   }
//   let res = rangeNumber + n / digitInNumber + '';
//   return parseInt(res.charAt(n % digitInNumber));
// };

console.log(findNthDigit(3));
// 3

console.log(findNthDigit(10));
// 1

console.log(findNthDigit(11));
// 0

console.log(findNthDigit(12));
// 1

console.log(findNthDigit(13));
// 1

console.log(findNthDigit(178));
// 9

console.log(findNthDigit(189));
// 9

console.log(findNthDigit(190));
// 1

console.log(findNthDigit(1000));
// 3
