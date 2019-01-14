// const MinHeapUtil = require('./minHeap.util');
// const { MinHeap } = MinHeapUtil;

// /**
//  * initialize your data structure here.
//  */
// // 3804ms
// var MedianFinder = function() {
//   this.small = new MinHeap();
//   this.large = new MinHeap();
// };

// /**
//  * @param {number} num
//  * @return {void}
//  */
// MedianFinder.prototype.addNum = function(num) {
//   this.small.push(num);
//   this.large.push(-this.small.pop());
//   if (this.small.size() < this.large.size()) {
//     this.small.push(-this.large.pop());
//   }
//   // console.log(this.small._getItems(), this.large._getItems());
// };

// /**
//  * @return {number}
//  */
// MedianFinder.prototype.findMedian = function() {
//   // console.log('==', this.small.top(), this.large.top());
//   return this.small.size() > this.large.size()
//     ? this.small.top()
//     : (this.small.top() - this.large.top()) / 2;
// };

// best sol
// 248ms
// just binary search insert!
var MedianFinder = function() {
  this.ary = [];
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
  var low = 0;
  var high = this.ary.length - 1;

  while (low <= high) {
    var mid = Math.floor((high + low) / 2);

    if (this.ary[mid] < num) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  // insert at  location trick for javascript array.
  this.ary.splice(low, 0, num);
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
  if (this.ary.length % 2 == 0) {
    var mid = Math.floor(this.ary.length / 2);
    return (this.ary[mid] + this.ary[mid - 1]) / 2;
  } else {
    var mid = Math.floor(this.ary.length / 2);
    return this.ary[mid];
  }
};

let mf;

mf = new MedianFinder();
mf.addNum(1);
mf.addNum(2);
console.log(mf.findMedian()); // 1.5
mf.addNum(3);
console.log(mf.findMedian()); // 2

mf = new MedianFinder();
mf.addNum(-1);
console.log(mf.findMedian()); // -1
mf.addNum(-2);
console.log(mf.findMedian()); // -1.5
mf.addNum(-3);
console.log(mf.findMedian()); // -2
mf.addNum(-4);
console.log(mf.findMedian()); // -2.5
mf.addNum(-5);
console.log(mf.findMedian()); // -3
