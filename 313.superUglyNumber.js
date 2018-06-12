/*
* @param {number} n
* @param {number[]} primes
* @return {number}
*/
// brute force
// var nthSuperUglyNumber = function(n, primes) {
//   const len = primes.length;
//   const ret = new Array(n);
//   let scanFrom = 0;

//   ret[0] = 1;
//   let next = 1;
//   for (let i = 1; i < n; i++) {
//     next = Infinity;
//     for (let j = scanFrom; j < i; j++) {
//       primes.forEach(d => {
//         const check = ret[j] * d;
//         if (check > ret[i - 1]) {
//           next = Math.min(next, ret[j] * d);
//         }
//       });
//     }
//     ret[i] = next;
//     // move scanFrom
//     while (ret[scanFrom] * primes[len - 1] < next) scanFrom++;

//     // console.log(ret, scanFrom);
//   }

//   return ret[n - 1];
// };

// idea from web
var nthSuperUglyNumber = function(n, primes) {
  const len = primes.length;
  const ret = new Array(n);
  const idx = new Array(len).fill(0);
  const val = new Array(len).fill(1);

  let next = 1;
  for (let i = 0; i < n; i++) {
    ret[i] = next;

    next = Infinity;
    for (let j = 0; j < len; j++) {
      if (val[j] === ret[i]) val[j] = ret[idx[j]++] * primes[j];
      next = Math.min(next, val[j]);
    }
    // console.log(ret, idx, val);
  }

  return ret[n - 1];
};

console.log(nthSuperUglyNumber(12, [2, 7, 13, 19]));
// 32

console.log(nthSuperUglyNumber(10, [2, 7, 57]));
// 49

console.log(nthSuperUglyNumber(15, [2, 7, 57]));
// 112

// console.log(
//   nthSuperUglyNumber(100000, [
//     7,
//     19,
//     29,
//     37,
//     41,
//     47,
//     53,
//     59,
//     61,
//     79,
//     83,
//     89,
//     101,
//     103,
//     109,
//     127,
//     131,
//     137,
//     139,
//     157,
//     167,
//     179,
//     181,
//     199,
//     211,
//     229,
//     233,
//     239,
//     241,
//     251
//   ])
// );
// // 1092889481
