/**
 * @param {number} n
 * @return {number}
 */

// brute force
// var bulbSwitch = function(n) {
//   const arr = new Array(n).fill(false);
//   for (let i = 1; i <= n; i++) {
//     for (let j = i; j <= n; j += i) {
//       arr[j - 1] = !arr[j - 1];
//     }
//   }

//   console.log(arr);
//   let ret = 0;
//   arr.forEach(d => {
//     if (d) ret++;
//   });
//   return ret;
// };

var bulbSwitch = function(n) {
  let i = 1;
  while (i * i <= n) {
    i++;
  }
  return i - 1;
};

// best sol from web
// var bulbSwitch = function(n) {
//   if (n < 2) {
//     return n;
//   }
//   return Math.floor(Math.sqrt(n));
// };

console.log(bulbSwitch(3));
// 1

console.log(bulbSwitch(4));
// 2

console.log(bulbSwitch(5));
// 2

console.log(bulbSwitch(6));
// 2

console.log(bulbSwitch(7));
// 2

console.log(bulbSwitch(9));
// 3

console.log(bulbSwitch(17));
// 4

console.log(bulbSwitch(197));
// 14

console.log(bulbSwitch(512));
// 22

console.log(bulbSwitch(99999999));
// 9999
