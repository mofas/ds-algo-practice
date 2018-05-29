/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

var addBinary = function(a, b) {
  const n = a.length;
  const m = b.length;

  let carry = 0;
  const checkLen = Math.max(n, m);
  let ret = '';
  for (let i = 1; i <= checkLen; i++) {
    const aBit = a[n - i] || '0';
    const bBit = b[m - i] || '0';
    // console.log(i, aBit, bBit);

    if (aBit === '1' && bBit === '1') {
      if (carry === 1) {
        ret = '1' + ret;
      } else {
        ret = '0' + ret;
        carry = 1;
      }
    } else if (
      (aBit === '1' && bBit === '0') ||
      (aBit === '0' && bBit === '1')
    ) {
      if (carry === 1) {
        ret = '0' + ret;
      } else {
        ret = '1' + ret;
        carry = 0;
      }
    } else {
      if (carry === 1) {
        ret = '1' + ret;
        carry = 0;
      } else {
        ret = '0' + ret;
      }
    }
  }

  if (carry === 1) {
    ret = '1' + ret;
  }

  return ret;
};

console.log(addBinary('11', '1'));
// '100'

console.log(addBinary('1010', '1011'));
// '10101'

console.log(addBinary('100', '110010'));
// '110110'
