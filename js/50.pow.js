// lazy answer
// var myPow = function(x, n) {
//   return Math.pow(x, n);
// };

// div & cong
// var myPow = function(x, n) {
//   if (n < 0) {
//     return poww(1 / x, -n);
//   } else {
//     return poww(x, n);
//   }
// };

// var poww = function(x, n) {
//   if (n === 0) {
//     return 1;
//   }

//   const half = poww(x, Math.floor(n / 2));
//   if (n % 2 === 0) {
//     return half * half;
//   } else {
//     return half * half * x;
//   }
// };

// best sol from web
var myPow = function(x, n) {
  // Time: O(logn) = O(1), Space: O(1)
  var res = 1;
  if (n === -2147483648) {
    n += 1; // Make -2147483648 to -2147483647
    res *= x;
  }
  var pos = Math.abs(n);
  while (pos) {
    if (pos & 1) {
      res *= x;
    }
    pos = pos >> 1;
    x = x * x;
  }
  return n < 0 ? 1.0 / res : res;
};
