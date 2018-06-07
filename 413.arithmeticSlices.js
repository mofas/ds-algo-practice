/**
 * @param {number[]} A
 * @return {number}
 */

const calCombination = n => {
  return (n * (n + 1)) / 2;
};

var numberOfArithmeticSlices = function(A) {
  const n = A.length;
  let startFrom = 0;
  let ret = 0;
  for (let i = 1; i < n - 1; i++) {
    if (A[i] - A[i - 1] === A[i + 1] - A[i]) {
      let k = i + 1;
      const diff = A[i] - A[i - 1];
      while (k < n && A[k + 1] - A[k] === diff) {
        k++;
      }
      console.log('is Arithmetic from', i - 1, k);
      ret += calCombination(k - i);
      i = k;
    }
  }

  return ret;
};

console.log(numberOfArithmeticSlices([1, 2, 3, 4]));
// 3 = 2 + 1

console.log(numberOfArithmeticSlices([1, 2, 3, 4, 5, 6]));
// 10 = 4 + 3 + 2 + 1

console.log(numberOfArithmeticSlices([1, 3, 5, 7, 9, 8, 8, 7, 7, 7, 7]));
// 9 = 6 + 3
