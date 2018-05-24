/**
 * @param {number[]} A
 * @return {boolean}
 */

// brute force
// the problem is gc
// it take O(n^2)

// var isIdealPermutation = function(A) {
//   const n = A.length;
//   let lc = 0;
//   let gc = 0;

//   for (let i = 0; i < n - 1; i++) {
//     if (A[i] > A[i + 1]) {
//       lc++;
//     }
//     for (let j = i + 1; j < n; j++) {
//       if (A[i] > A[j]) gc++;
//     }
//   }
//   // console.log(gc, lc);
//   return lc === gc;
// };

// acceptable sol, extremely slow
// var isIdealPermutation = function(A) {
//   const n = A.length;

//   for (let i = 0; i < n - 1; i++) {
//     for (let j = i + 2; j < n; j++) {
//       if (A[i] > A[j]) return false;
//     }
//   }
//   return true;
// };

// best sol from web
// if we swap two elements not adjacent, gc will not equal to lc
var isIdealPermutation = function(A) {
  for (var i = 0; i < A.length; i++) {
    if (Math.abs(A[i] - i) > 1) {
      return false;
    }
  }
  return true;
};

console.log(isIdealPermutation([1, 0, 2])); //true
// 1 1

console.log(isIdealPermutation([1, 2, 3, 4])); // true
// 0 0

console.log(isIdealPermutation([0, 2, 1, 3])); // true
// 1 1

console.log(isIdealPermutation([1, 0, 3, 2])); // true
// 2 2

console.log(isIdealPermutation([2, 1, 0])); //false
// 3 2

console.log(isIdealPermutation([0, 1, 5, 3, 4, 2])); // false
// 5 2

console.log(isIdealPermutation([1, 2, 0])); // false

console.log(isIdealPermutation([0, 2, 3, 1])); // false
// 2 1

console.log(isIdealPermutation([0, 3, 2, 1])); // false
// 3 2

console.log(isIdealPermutation([1, 3, 0, 2])); // false
// 3 1
