// const rotatable10 = [2, 5, 6, 9];
// const rotatableWithConstraint10 = [1, 8];
// const rotatable100 = [
//   12,
//   15,
//   16,
//   19,
//   20,
//   21,
//   22,
//   25,
//   26,
//   28,
//   29,
//   50,
//   51,
//   52,
//   55,
//   56,
//   58,
//   59,
//   60,
//   61,
//   62,
//   65,
//   66,
//   68,
//   69,
//   82,
//   85,
//   86,
//   89,
//   90,
//   91,
//   92,
//   95,
//   96,
//   98,
//   99
// ];
// const semiRotatable = [11, 18, 81, 88];
// const allRotatable100 = [
//   11,
//   12,
//   15,
//   16,
//   18,
//   19,
//   20,
//   21,
//   22,
//   25,
//   26,
//   28,
//   29,
//   50,
//   51,
//   52,
//   55,
//   56,
//   58,
//   59,
//   60,
//   61,
//   62,
//   65,
//   66,
//   68,
//   69,
//   81,
//   82,
//   85,
//   86,
//   88,
//   89,
//   90,
//   91,
//   92,
//   95,
//   96,
//   98,
//   99
// ];

/**
 * @param {number} N
 * @return {number}
 */

// really hard to implement log(n) sol
// this sol is actually from web
var rotatedDigits = function(N) {
  const possibleCount = [1, 2, 3, 3, 3, 4, 5, 5, 6, 7]; // 0 1 2 5 6 8 9
  const excludeNumCount = [1, 2, 2, 2, 2, 2, 2, 2, 3, 3]; // 0 1 8
  const isValid = [
    true,
    true,
    true,
    false,
    false,
    true,
    true,
    false,
    true,
    true
  ]; // 0 1 2 5 6 8 9
  const isExclude = [
    true,
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    true,
    false
  ]; // 0 1 8
  const cs = String(N)
    .split('')
    .map(d => Number(d));

  const n = cs.length;
  let exclude = true;
  let ret = 0;

  let base7 = Math.pow(7, n - 1);
  let base3 = Math.pow(3, n - 1);
  for (let i = 0; i < n; i++, base7 /= 7, base3 /= 3) {
    if (cs[i] == 0 && i != n - 1) continue;
    const index = i == n - 1 ? cs[i] : cs[i] - 1;
    const c = possibleCount[index] * base7;
    const e = exclude ? excludeNumCount[index] * base3 : 0;
    ret += c - e;
    if (!isValid[cs[i]]) break;
    exclude = exclude & isExclude[cs[i]];
  }

  return ret;
};

console.log(rotatedDigits(50)); // 16

console.log(rotatedDigits(78)); // 29

console.log(rotatedDigits(89)); // 33

console.log(rotatedDigits(100)); // 40

console.log(rotatedDigits(187)); // 72

console.log(rotatedDigits(200)); // 81

console.log(rotatedDigits(300)); // 129

console.log(rotatedDigits(600)); // 179

console.log(rotatedDigits(900)); // 268
