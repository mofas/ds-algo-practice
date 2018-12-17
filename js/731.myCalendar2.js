// function Interval(start, end) {
//   this.start = start;
//   this.end = end;
// }

// var MyCalendarTwo = function() {
//   this.arr = [];
// };

// const isOverlap = (interval1, interval2) => {
//   // console.log(interval1, interval2);
//   return (
//     (interval1.start <= interval2.start && interval1.end > interval2.start) ||
//     (interval1.start >= interval2.start && interval2.end > interval1.start)
//   );
// };

// // we can improve performance by adapting better DS for sorting array.
// const unableBooking = (arr, target) => {
//   let colls = [];

//   for (let e in arr) {
//     if (isOverlap(arr[e], target)) {
//       colls.push(arr[e]);
//     }
//   }
//   const len = colls.length;
//   if (colls.length > 1) {
//     // check if any of two colls collide again
//     for (let i = 0; i < len; i++) {
//       for (let j = i + 1; j < len; j++) {
//         if (isOverlap(colls[i], colls[j])) {
//           return true;
//         }
//       }
//     }
//   }
//   return false;
// };

// MyCalendarTwo.prototype.book = function(start, end) {
//   const newInterval = new Interval(start, end);
//   if (unableBooking(this.arr, newInterval)) {
//     return false;
//   } else {
//     this.arr.push(newInterval);
//     this.arr.sort((a, b) => a.start - b.start);
//     // console.log('new arr', this.arr);
//     return true;
//   }
// };

// best answer in website.

var MyCalendarTwo = function() {
  this.items = [];
  this.overlapItems = [];
};

const isOverlap = (s1, e1, s2, e2) => {
  return (s1 <= s2 && e1 > s2) || (s1 >= s2 && e2 > s1);
};

MyCalendarTwo.prototype.book = function(start, end) {
  for (var i = 0; i < this.overlapItems.length; i++) {
    const [s1, e1] = this.overlapItems[i];
    if (isOverlap(s1, e1, start, end)) {
      return false;
    }
  }

  for (var i = 0; i < this.items.length; i++) {
    const [s1, e1] = this.items[i];
    if (isOverlap(s1, e1, start, end)) {
      this.overlapItems.push([Math.max(start, s1), Math.min(end, e1)]);
    }
  }
  this.items.push([start, end]);
  // console.log(this.items, '====', this.overlapItems);
  return true;
};

const myCalendarTwo = new MyCalendarTwo();
console.log(myCalendarTwo.book(10, 20)); // returns true
console.log(myCalendarTwo.book(50, 60)); // returns true
console.log(myCalendarTwo.book(10, 40)); // returns true
console.log(myCalendarTwo.book(5, 15)); // returns false
console.log(myCalendarTwo.book(5, 10)); // returns true
console.log(myCalendarTwo.book(25, 55)); // returns true
