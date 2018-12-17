var matrixReshape = function(nums, r, c) {
  const rawArr = nums.reduce((acc, d) => acc.concat(d), []);
  const size = rawArr.length;
  if (r * c !== size) {
    return nums;
  }

  let ret = [];
  for (let i = 0; i < r; i++) {
    const row = rawArr.splice(0, c);
    ret.push(row);
  }
  return ret;
};

console.log(matrixReshape([[1, 2], [3, 4]], 1, 4));
console.log(matrixReshape([[1, 2], [3, 4]], 2, 4));
console.log(matrixReshape([[1, 2], [3, 4]], 4, 1));
