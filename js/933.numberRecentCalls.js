// 328ms
var RecentCounter = function() {
  this.deltaList = [];
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
  while (this.deltaList.length > 0 && t - this.deltaList[0] > 3000) {
    this.deltaList.shift();
    // console.log('pop', this.deltaList);
  }
  this.deltaList.push(t);
  // console.log(this.deltaList);
  return this.deltaList.length;
};

// best sol
// 136ms
// var RecentCounter = function() {
//   this.currI = 0;
//   this.times = [];
// };

// /**
//  * @param {number} t
//  * @return {number}
//  */
// RecentCounter.prototype.ping = function(t) {
//   while (this.currI < this.times.length && this.times[this.currI] < t - 3000) {
//     this.currI++;
//   }
//   this.times.push(t);
//   return this.times.length - this.currI;
// };

const rc = new RecentCounter();
console.log(rc.ping(1));
console.log(rc.ping(100));
console.log(rc.ping(3001));
console.log(rc.ping(3002));
