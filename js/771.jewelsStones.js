/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
  const hash = new Set();
  for (let i = 0; i < J.length; i++) {
    hash.add(J.substring(i, i + 1));
  }
  let ret = 0;
  for (let i = 0; i < S.length; i++) {
    if (hash.has(S.substring(i, i + 1))) ret++;
  }
  return ret;
};

// best sol from web
// var numJewelsInStones = function(J, S) {
//   const jewels = J.split('');
//   return S.split('').reduce(function(a, b) {
//     if (jewels.includes(b)) {
//       a += 1;
//     }
//     return a;
//   }, 0);
// };

// second
var numJewelsInStones = function(J, S) {
  const jSet = new Set(J);
  let ret = 0;
  for (const ch of S) {
    if (jSet.has(ch)) ret += 1;
  }
  return ret;
};

console.log(numJewelsInStones('aA', 'aAAbbbb'));
// 3

console.log(numJewelsInStones('z', 'ZZ'));
// 0
