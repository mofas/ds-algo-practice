/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  const n = num1.length;
  const m = num2.length;
  const max = Math.max(n, m);
  let carry = 0;
  let result = 0;
  let ret = '';
  for (let i = 0; i < max; i++) {
    let a = i > n - 1 ? 0 : Number(num1[n - i - 1]);
    let b = i > m - 1 ? 0 : Number(num2[m - i - 1]);
    result = a + b + carry;
    carry = Math.floor(result / 10);
    ret = (result % 10) + ret;
    // console.log(a, b, ret);
  }
  if (carry > 0) ret = carry + ret;

  return ret;
};

console.log(addStrings('123', '789'));
// '912'

console.log(addStrings('1', '999'));
// '1000'
