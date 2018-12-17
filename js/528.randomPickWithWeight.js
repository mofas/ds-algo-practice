/**
 * @param {number[]} w
 */
// 392ms
var Solution = function(w) {
  this.n = w.length;
  let sum = 0;
  for (const ww of w) sum += ww;
  let acc = 0;
  this.prob = w.map(d => {
    const div = d / sum;
    let temp = acc;
    acc += div;
    return temp;
  });
  // console.log(this.prob);
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
  const rand = Math.random();
  // console.log(rand, this.prob);
  for (let i = 0; i < this.n; i++) {
    if (rand < this.prob[i]) return i - 1;
  }
  return this.n - 1;
};

// best sol from web
// using binary search
// 128ms
// var Solution = function(w) {
//   this.sum = [];
//   this.max = 0;
//   for (let i = 0; i < w.length; i++) {
//     this.max += w[i];
//     this.sum.push(this.max);
//   }
// };

// /**
//  * @return {number}
//  */
// Solution.prototype.pickIndex = function() {
//   let target = Math.floor(Math.random() * this.max) + 1;
//   //search the index;
//   let left = 0;
//   let right = this.sum.length - 1;
//   while (left < right) {
//     let mid = Math.floor((left + right) / 2);
//     if (target > this.sum[mid]) {
//       left = mid + 1;
//     } else {
//       right = mid;
//     }
//   }
//   return left;
// };

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = Object.create(Solution).createNew(w)
 * var param_1 = obj.pickIndex()
 */
let sol = new Solution([1]);

console.log(sol.pickIndex());
// 0

sol = new Solution([1, 3]);
console.log(sol.pickIndex());
// 0
console.log(sol.pickIndex());
// 1
console.log(sol.pickIndex());
// 1
console.log(sol.pickIndex());
// 1
console.log(sol.pickIndex());
// 0
