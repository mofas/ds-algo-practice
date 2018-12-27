// // 780ms
// var StockSpanner = function() {
//   this.stack = [];
// };

// /**
//  * @param {number} price
//  * @return {number}
//  */
// StockSpanner.prototype.next = function(price) {
//   this.stack.push(price);
//   let i = this.stack.length - 1;
//   let ret = 0;
//   while (i >= 0) {
//     if (this.stack[i] <= price) {
//       ret++;
//       i--;
//     } else break;
//   }
//   // console.log(this.stack);
//   return ret;
// };

// 364ms
var StockSpanner = function() {
  this.stack = [];
};

/**
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
  let ret = 1;
  while (
    this.stack.length > 0 &&
    this.stack[this.stack.length - 1][0] <= price
  ) {
    ret += this.stack.pop()[1];
  }
  this.stack.push([price, ret]);
  console.log(this.stack);
  return ret;
};

let ss = new StockSpanner();
console.log(ss.next(100)); //1
console.log(ss.next(80)); //1
console.log(ss.next(60)); //1
console.log(ss.next(70)); //2
console.log(ss.next(60)); //1
console.log(ss.next(75)); //4
console.log(ss.next(85)); //6
