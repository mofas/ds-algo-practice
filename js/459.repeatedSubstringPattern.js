/**
 * @param {string} s
 * @return {boolean}
 */

// half brute force, pretty heuristic check
var repeatedSubstringPattern = function(s) {
  const n = s.length;
  if (n < 2) return false;

  const bucket = new Array(26).fill(0);

  for (let i = 0; i < n; i++) {
    bucket[s.charCodeAt(i) - 97]++;
  }

  let min = Infinity;
  let max = -Infinity;
  let patternMinLen = 0;
  bucket.forEach(d => {
    if (d > 0) {
      if (d < min) min = d;
      if (d > max) max = d;
      patternMinLen++;
    }
  });

  // some heuristic optimization
  if (min === n) return true;
  if (min === 1) return false;

  patternMinLen = Math.min(patternMinLen, min);

  for (let i = patternMinLen; i <= Math.floor(n / 2); i++) {
    if (n % i !== 0) continue;
    const pattern = s.substring(0, i);
    const repeated = n / i;
    if (pattern.repeat(repeated) === s) {
      // console.log('== find', pattern);
      return true;
    }
  }

  return false;
};

// best sol from web
// var repeatedSubstringPattern = function(s) {
//   // credit to @rsrs3 for this brilliant solution
//   /*
//     1. first char of input string is first char of repeated substr
//     2. last char of input string is last char of repeated substr
//     3. double the input (S + S), call this S1
//     4. remove first and last chars of that double, call this S2
//     5. if S exists in S2, return true else false

//     example:

//     s = 'abab'
//     S1 = 'abababab'
//     S2 = 'bababa'
//            ----
//   */

//   if (s.length === 0) return false;
//   let s1 = s + s;
//   let s2 = s1.substring(1, s1.length - 1);
//   return s2.includes(s);
// };

console.log(repeatedSubstringPattern('aaaaa')); // true

console.log(repeatedSubstringPattern('aaaabbbaaaabbb')); // true

console.log(repeatedSubstringPattern('abcabcabcabc')); // true

console.log(repeatedSubstringPattern('a')); // false

console.log(repeatedSubstringPattern('aba')); // false
