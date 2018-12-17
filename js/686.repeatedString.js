/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */

// pretty slow.
var repeatedStringMatch = function(A, B) {
  let repeated = 1;
  let s = A;
  while (s.length < B.length) {
    s += A;
    repeated++;
  }
  if (s.indexOf(B) >= 0) return repeated;
  s += A;
  repeated++;
  if (s.indexOf(B) >= 0) return repeated;

  return -1;
};

// best sol from web
// var repeatedStringMatch = function(A, B) {
//   let count = 0;
//   let strA = '';
//   while (strA.length < B.length) {
//     strA += A;
//     count++;
//   }
//   if (strA.indexOf(B) >= 0) return count;
//   strA += A;
//   if (strA.indexOf(B) >= 0) return count + 1;
//   return -1;
// };

console.log(repeatedStringMatch('aa', 'a')); // 1

console.log(repeatedStringMatch('abc', 'abcabc')); // 2
console.log(repeatedStringMatch('abababaaba', 'aabaaba')); // 2

console.log(repeatedStringMatch('abcbc', 'cabcbca')); // 3

console.log(repeatedStringMatch('abcd', 'cdabcdab')); // 3
console.log(repeatedStringMatch('abc', 'cabcabc')); // 3
console.log(repeatedStringMatch('abc', 'abcabca')); // 3
console.log(repeatedStringMatch('abc', 'cabcabca')); // 4
console.log(repeatedStringMatch('abc', 'cabcabcab')); // 4

console.log('---------');

console.log(repeatedStringMatch('abc', 'cabcabcabe')); // -1
