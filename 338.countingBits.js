/**
 * @param {number} num
 * @return {number[]}
 */

// 124 ms
var countBits = function(num) {
  let ret = new Array(num + 1).fill(0);
  let bits = [];
  for (let i = 1; i < num + 1; i++) {
    let idx = 0;
    let carry = 1;
    let count = ret[i - 1];
    while (carry) {
      if (idx >= bits.length) {
        bits.push(carry);
        carry = 0;
        count++;
        break;
      }
      if (bits[idx] === 0) {
        bits[idx] = 1;
        count++;
        break;
      }
      if (bits[idx] === 1) {
        bits[idx] = 0;
        idx++;
        count--;
      }
    }
    ret[i] = count;
  }
  return ret;
};

// best sol from web
// 112 ms
var countBits = function(num) {
  if (num === 0) return [0];
  if (num === 1) return [0, 1];
  let result = [0];
  for (let i = 1; i <= num; i++) result.push(result[i >> 1] + (i % 2));
  return result;
};

console.log(countBits(0));
// [0]

console.log(countBits(1));
// [0, 1]

console.log(countBits(5));
// [0, 1, 1, 2, 1, 2]

console.log(countBits(15));
// [0, 1, 1, 2, 1, 2, 2, 3, 1, 2, 2, 3, 2, 3, 3, 4]
