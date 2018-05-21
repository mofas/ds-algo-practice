/**
 * @param {number[]} A
 * @param {number} L
 * @param {number} R
 * @return {number}
 */

const genTrail = A => {
  const len = A.length;
  let ret = [];
  for (let i = 0; i < len; i++) {
    ret = ret.concat([A.slice(0, i + 1)]);
  }
  return ret;
};

// console.log(genTrail([3, 4])); // [3] [3, 4]
// console.log(genTrail([1, 3, 4])); // [1] [1, 3] [1, 3, 4]

const startFrom = (A, L, R) => {
  const len = A.length;
  if (len === 0) return [];
  if (len === 1 && A[0] >= L) return [A];
  let ret = [];

  const head = A[0];
  if (head >= L) {
    const restArr = A.slice(1, len);
    const res = startFrom(restArr, L, R);
    ret = ret
      .concat([[head]])
      .concat(genTrail(restArr).map(d => [head].concat(d)));
  } else {
    const res = startFrom(A.slice(1, len), L, R);
    ret = ret.concat(res.map(d => [A[0]].concat(d)));
  }

  return ret;
};

// console.log(startFrom([3, 4], 3, 4)); // [3] [3, 4]
// console.log(startFrom([4, 1], 3, 4)); // [4] [4, 1]
// console.log(startFrom([4, 1, 1], 3, 4)); // [4] [4, 1] [4, 1, 1]
// console.log(startFrom([4, 1, 3], 3, 4)); // [4] [4, 1] [4, 1, 3]
// console.log(startFrom([1, 1, 4], 3, 4)); // [1, 1, 4]
// console.log(startFrom([3, 4, 1], 3, 4)); // [3] [3, 4] [3, 4, 1]
// console.log(startFrom([3, 1, 1, 4], 3, 4)); // [ [ 3 ], [ 3, 1 ], [ 3, 1, 1 ], [ 3, 1, 1, 4 ] ]
// console.log(startFrom([1, 1, 4, 2, 3], 3, 4)); // [1, 1, 4] [1, 1, 4, 2] [1, 1, 4, 2, 3]

// the ele in A will be smaller than R
const stepGen = (A, L, R) => {
  const len = A.length;
  let ret = [];
  for (let i = 0; i < len; i++) {
    ret = ret.concat(startFrom(A.slice(i, len), L, R));
  }
  return ret;
};

var numSubarrayBoundedMaxResult = function(A, L, R) {
  const len = A.length;

  if (len === 0) return [];

  let ret = [];

  let last = 0;
  for (let i = 0; i < len; i++) {
    if (A[i] > R) {
      const left = A.slice(last, i);
      ret = ret.concat(stepGen(left, L, R));
      last = i + 1;
    }
  }
  const right = A.slice(last, len);
  ret = ret.concat(stepGen(right, L, R));
  return ret;
};

// console.log(numSubarrayBoundedMaxResult([1, 2, 3, 4], 1, 4)); // 10
// // // [1] [1, 2] [1, 2, 3] [1, 2, 3, 4] [2] [2, 3] [2, 3, 4] [3] [3, 4] [4]

// console.log(numSubarrayBoundedMaxResult([3, 1, 1, 3], 2, 3)); // 7
// // // [3], [3, 1], [3, 1, 1], [3, 1, 1, 3], [1, 1, 3], [1, 3], [3]

// console.log(numSubarrayBoundedMaxResult([3, 1, 1, 9], 2, 3)); // 3
// // // [3], [3, 1], [3, 1, 1]

// console.log(numSubarrayBoundedMaxResult([2, 1, 4, 3], 2, 3)); // 3
// // // // [2], [2, 1], [3]

// console.log(numSubarrayBoundedMaxResult([1, 5, 9, 4, 3], 4, 6)); // 4
// // // // // [1, 5], [5], [4], [4, 3]

// console.log(numSubarrayBoundedMaxResult([1, 9, 4, 3], 4, 6)); // 2
// // [4], [4, 3]

// console.log(numSubarrayBoundedMaxResult([2, 9, 2, 5, 6], 2, 8)); // 7
// // // [2] [2] [2, 5] [2, 5, 6] [5] [5, 6] [6]

const stepCount = (A, L) => {
  const len = A.length;
  let ret = 0;
  for (let i = 0; i < len; i++) {
    for (let j = i; j < len; j++) {
      if (A[j] >= L) {
        ret += len - j;
        break;
      }
    }
  }
  return ret;
};

var numSubarrayBoundedMax = function(A, L, R) {
  const len = A.length;

  if (len === 0) return 0;

  let ret = 0;
  let last = 0;
  for (let i = 0; i < len; i++) {
    if (A[i] > R) {
      const left = A.slice(last, i);
      ret += stepCount(left, L);
      last = i + 1;
    }
  }
  const right = A.slice(last, len);
  ret += stepCount(right, L);
  return ret;
};

console.log(numSubarrayBoundedMax([1, 2, 3, 4], 1, 4)); // 10
// // [1] [1, 2] [1, 2, 3] [1, 2, 3, 4] [2] [2, 3] [2, 3, 4] [3] [3, 4] [4]

console.log(numSubarrayBoundedMax([3, 1, 1, 3], 2, 3)); // 7
// // [3], [3, 1], [3, 1, 1], [3, 1, 1, 3], [1, 1, 3], [1, 3], [3]

console.log(numSubarrayBoundedMax([3, 1, 1, 9], 2, 3)); // 3
// // [3], [3, 1], [3, 1, 1]

console.log(numSubarrayBoundedMax([2, 1, 4, 3], 2, 3)); // 3
// // // [2], [2, 1], [3]

console.log(numSubarrayBoundedMax([1, 5, 9, 4, 3], 4, 6)); // 4
// // // // [1, 5], [5], [4], [4, 3]

console.log(numSubarrayBoundedMax([1, 9, 4, 3], 4, 6)); // 2
// [4], [4, 3]

console.log(numSubarrayBoundedMax([2, 9, 2, 5, 6], 2, 8)); // 7
// // [2] [2] [2, 5] [2, 5, 6] [5] [5, 6] [6]
