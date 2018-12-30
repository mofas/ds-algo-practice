// // TLE
// var FreqStack = function() {
//   this.stack = [];
//   this.freq = {};
// };

// /**
//  * @param {number} x
//  * @return {void}
//  */
// FreqStack.prototype.push = function(x) {
//   this.freq[x] = this.freq[x] ? this.freq[x] + 1 : 1;
//   this.stack.push(x);
// };

// /**
//  * @return {number}
//  */
// FreqStack.prototype.pop = function() {
//   let maxKeys = [];
//   let val = -1;

//   for (const key in this.freq) {
//     if (this.freq[key] > val) {
//       val = this.freq[key];
//       maxKeys = [Number(key)];
//     } else if (this.freq[key] === val) {
//       maxKeys.push(Number(key));
//     }
//   }
//   let idx = null;
//   let maxKey = null;
//   for (let i = this.stack.length - 1; i >= 0; i--) {
//     if (maxKeys.indexOf(this.stack[i]) >= 0) {
//       maxKey = this.stack[i];
//       idx = i;
//       break;
//     }
//   }
//   this.freq[maxKey]--;
//   this.stack.splice(idx, 1);
//   return maxKey;
// };

var FreqStack = function() {
  this.m = {};
  this.freq = {};
  this.maxFreq = 0;
};

/**
 * @param {number} x
 * @return {void}
 */
FreqStack.prototype.push = function(x) {
  this.freq[x] = this.freq[x] ? this.freq[x] + 1 : 1;
  this.maxFreq = Math.max(this.freq[x], this.maxFreq);
  if (this.m[this.freq[x]] == null) {
    this.m[this.freq[x]] = [];
  }
  this.m[this.freq[x]].push(x);
};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function() {
  // console.log(this.m, this.maxFreq, this.freq);
  let ret = this.m[this.maxFreq].pop();
  this.freq[ret]--;
  if (this.m[this.maxFreq].length === 0) this.maxFreq--;
  return ret;
};

let fs = new FreqStack();

fs.push(5);
fs.push(7);
fs.push(5);
fs.push(7);
fs.push(4);
fs.push(5);
console.log(fs.pop()); // 5
console.log(fs.pop()); // 7
console.log(fs.pop()); // 5
console.log(fs.pop()); // 4
