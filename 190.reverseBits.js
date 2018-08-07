/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */

// 72ms
var reverseBits = function(n) {
  const bitArr = n
    .toString(2)
    .split('')
    .reverse();
  let ret = 0;
  while (bitArr.length < 32) {
    bitArr.push('0');
  }
  // console.log(bitArr);
  bitArr.forEach(d => {
    ret *= 2;
    if (d === '1') ret += 1;
  });
  return ret;
};

// best sol from web
// 64ms
// var reverseBits = function(n) {
//   let ans = 0;
//   for (let i = 0; i < 32; i++) {
//     ans = ans * 2 + (n % 2);
//     n = parseInt(n / 2);
//   }
//   return ans;
// };

console.log(reverseBits(5));
// 5

console.log(reverseBits(8));
// 1

console.log(reverseBits(16));
// 1

console.log(reverseBits(43261596));
// 964176192
