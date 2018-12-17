/**
 * @param {number} rowIndex
 * @return {number[]}
 */

var getRow = function(rowIndex) {
  if (rowIndex === 0) {
    return [1];
  } else if (rowIndex === 1) {
    return [1, 1];
  } else {
    const prev = getRow(rowIndex - 1);
    const ret = [1];
    for (let i = 0; i < prev.length - 1; i++) {
      ret.push(prev[i] + prev[i + 1]);
    }
    ret.push(1);
    return ret;
  }
};

console.log(getRow(0));
console.log(getRow(1));
console.log(getRow(3));
console.log(getRow(4));
