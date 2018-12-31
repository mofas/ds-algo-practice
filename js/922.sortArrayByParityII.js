/**
 * @param {number[]} A
 * @return {number[]}
 */
// 104ms
var sortArrayByParityII = function(A) {
  const len = A.length;
  let evenIdx = 0;
  let oddIdx = 1;

  while (true) {
    while (A[evenIdx] % 2 === 0) {
      evenIdx += 2;
    }

    while (A[oddIdx] % 2 === 1) {
      oddIdx += 2;
    }
    if (evenIdx >= len || oddIdx >= len) break;
    const temp = A[evenIdx];
    A[evenIdx] = A[oddIdx];
    A[oddIdx] = temp;
    evenIdx += 2;
    oddIdx += 2;
  }
  return A;
};

// best 100ms
var sortArrayByParityII = function(A) {
  const result = new Array(A.length);
  let flag1 = 0;
  let flag2 = 1;
  A.forEach(item => {
    if (item % 2 === 0) {
      result[flag1] = item;
      flag1 += 2;
    } else {
      result[flag2] = item;
      flag2 += 2;
    }
  });
  return result;
};

console.log(sortArrayByParityII([4, 2, 5, 7]));
// [4, 5, 2, 7]

console.log(sortArrayByParityII([2, 3]));
