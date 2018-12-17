/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
// 196 ms
var advantageCount = function(A, B) {
  const n = A.length;
  const mapping = {};
  const sortA = A.slice().sort((a, b) => a - b);
  const sortB = B.slice().sort((a, b) => b - a);

  let left = 0;
  let right = n - 1;
  for (let i = 0; i < n; i++) {
    mapping[sortB[i]] = mapping[sortB[i]] || [];
    if (sortA[right] > sortB[i]) {
      mapping[sortB[i]].push(sortA[right--]);
    } else {
      mapping[sortB[i]].push(sortA[left++]);
    }
    // console.log(mapping);
  }
  // console.log(sortA, sortB);
  // console.log(mapping);
  return B.map(d => mapping[d].pop());
};

console.log(advantageCount([2, 7, 11, 15], [1, 10, 4, 11]));
// [2,11,7,15]

console.log(advantageCount([12, 24, 8, 32], [13, 25, 32, 11]));
// [24,32,8,12]

console.log(advantageCount([2, 0, 4, 1, 2], [1, 3, 0, 0, 2]));
// [2,0,2,1,4] or [2,0,1,2,4]
