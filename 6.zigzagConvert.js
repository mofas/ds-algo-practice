/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if (numRows == 1) return s;
  const ret = new Array(numRows).fill('');

  let direction = 1; // 1 for down, 0 for up
  let currentRow = 0;
  for (let i = 0; i < s.length; i++) {
    ret[currentRow] = ret[currentRow] + s.charAt(i);
    if (direction === 1) {
      if (currentRow === numRows - 1) {
        direction = 0;
        currentRow--;
      } else {
        currentRow++;
      }
    } else {
      if (currentRow === 0) {
        direction = 1;
        currentRow++;
      } else {
        currentRow--;
      }
    }
  }
  // console.log(ret);
  return ret.join('');
};

// best sol from web
/**
var convert = function(s, numRows) {
  let res = '';
  if (numRows == 1) return s;
  for (let i = 0; i < numRows; i++) {
    let k = i;
    for (let j = numRows - 1; k < s.length; j += numRows - 1) {
      res += s.charAt(k);
      if (k % (numRows - 1) == 0) {
        k += 2 * (numRows - 2) + 2;
      } else {
        k += (j - k - 1) * 2 + 2;
      }
    }
  }
  return res;
};
 */

console.log(convert('AB', 1));
// AB

console.log(convert('ABC', 1));
// ABC

console.log(convert('PAYPALISHIRING', 3));
// PAHNAPLSIIGYIR

console.log(convert('PAYPALISHIRING', 4));
// PINALSIGYAHRPI
