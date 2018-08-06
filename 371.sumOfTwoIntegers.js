/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */

// best sol from web
const getSum = (a, b) => (b === 0 ? a : getSum(a ^ b, (a & b) << 1));

console.log(getSum(1, 3));
// 4
