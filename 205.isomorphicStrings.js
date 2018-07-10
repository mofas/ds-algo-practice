/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  let mapping1 = {};
  let mapping2 = {};
  if (s.length !== t.length) return false;
  for (let i = 0; i < s.length; i++) {
    if (mapping1[s[i]] || mapping2[t[i]]) {
      if (mapping1[s[i]] !== t[i]) return false;
      if (mapping2[t[i]] !== s[i]) return false;
    } else {
      mapping1[s[i]] = t[i];
      mapping2[t[i]] = s[i];
    }
  }
  return true;
};

// best sol from web
// var isIsomorphic = function(s, t) {
//   let match = {};

//   for (let i = 0; i < s.length; i++) {
//     if (!match[s[i]]) {
//       if (Object.values(match).includes(t[i])) {
//         return false;
//       } else {
//         match[s[i]] = t[i];
//       }
//     } else {
//       if (match[s[i]] !== t[i]) {
//         return false;
//       }
//     }
//   }

//   return true;
// };

console.log(isIsomorphic('egg', 'add'));
// true

console.log(isIsomorphic('paper', 'title'));
// true

console.log(isIsomorphic('foo', 'bar'));
// false

console.log(isIsomorphic('aba', 'baa'));
// false

console.log(isIsomorphic('ab', 'aa'));
// false
