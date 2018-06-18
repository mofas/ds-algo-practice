/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  let neg = false;
  if ((dividend < 0 && divisor > 0) || (dividend > 0 && divisor < 0)) {
    neg = true;
  }

  dividend = Math.abs(dividend);
  divisor = Math.abs(divisor);

  const doubler = (acc, ret) => {
    let newAcc = acc;
    let newRet = ret;
    // console.log('enter', newAcc, dividend, newRet);
    if (newAcc + newAcc <= dividend) {
      [newAcc, newRet] = doubler(newAcc + newAcc, newRet + newRet);
      // console.log('leave', acc, newAcc, dividend, newRet);
    }

    if (newAcc + acc <= dividend) {
      newRet = newRet + ret;
      newAcc = newAcc + acc;
      // console.log('append', acc, newAcc, dividend, newRet);
    }

    return [newAcc, newRet];
  };

  if (divisor > dividend) return 0;

  let quotient = 1;
  let acc = divisor;

  [acc, quotient] = doubler(acc, quotient);

  if (neg) {
    return -quotient;
  } else {
    return quotient > 2147483647 ? 2147483647 : quotient;
  }
};

console.log(divide(10, 3));
// 3

console.log(divide(15, 3));
// 5

console.log(divide(15, 2));
// 7

console.log(divide(16, 2));
// 8

console.log(divide(7, -3));
// -2

console.log(divide(-2147483648, -1));
// 2147483647
