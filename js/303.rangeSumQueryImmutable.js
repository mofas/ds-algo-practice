/**
 * @param {number[]} nums
 */

// 72ms
var NumArray = function(nums) {
  this.n = nums.length;
  this.sums = new Array(this.n + 1).fill(0);
  let acc = 0;
  for (let i = 0; i < this.n; i++) {
    acc += nums[i];
    this.sums[i + 1] = acc;
  }
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
  return this.sums[j + 1] - this.sums[i];
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = Object.create(NumArray).createNew(nums)
 * var param_1 = obj.sumRange(i,j)
 */

const numArray = new NumArray([-2, 0, 3, -5, 2, -1]);

console.log(numArray.sumRange(0, 2)); // 1
console.log(numArray.sumRange(2, 5)); // -1
console.log(numArray.sumRange(0, 5)); // -3
