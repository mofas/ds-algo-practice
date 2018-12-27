/**
 * Initialize your data structure here. Set the size of the queue to be k.
 * @param {number} k
 */
// 112ms
var MyCircularQueue = function(k) {
  this.limit = k;
  this.count = 0;
  this.list = new Array(k);
  this.front = 0;
  this.back = 0;
};

/**
 * Insert an element into the circular queue. Return true if the operation is successful.
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
  if (this.count === this.limit) return false;
  this.list[this.back] = value;
  this.back = (this.back + 1) % this.limit;
  this.count++;
  return true;
};

/**
 * Delete an element from the circular queue. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
  if (this.count === 0) return false;
  this.front = (this.front + 1) % this.limit;
  this.count--;
  return true;
};

/**
 * Get the front item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
  if (this.count === 0) return -1;
  return this.list[this.front];
};

/**
 * Get the last item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
  if (this.count === 0) return -1;
  return this.list[(this.back - 1 + this.limit) % this.limit];
};

/**
 * Checks whether the circular queue is empty or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
  return this.count === 0;
};

/**
 * Checks whether the circular queue is full or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
  return this.count === this.limit;
};

// 76ms
// /**
//  * Initialize your data structure here. Set the size of the queue to be k.
//  * @param {number} k
//  */
// var MyCircularQueue = function(k) {
//   this.head = null;
//   this.tail = this.head;
//   this.size = 0;
//   this.maxSize = k;
// };

// /**
//  * Insert an element into the circular queue. Return true if the operation is successful.
//  * @param {number} value
//  * @return {boolean}
//  */
// MyCircularQueue.prototype.enQueue = function(value) {
//   if (this.isFull()) {
//     return false;
//   }
//   if (this.isEmpty()) {
//     this.tail = 0;
//     this.head = 0;
//   } else {
//     this.tail += 1;
//   }

//   this.size += 1;
//   this[this.tail] = value;
//   return true;
// };

// /**
//  * Delete an element from the circular queue. Return true if the operation is successful.
//  * @return {boolean}
//  */
// MyCircularQueue.prototype.deQueue = function() {
//   if (this.isEmpty()) {
//     return false;
//   }
//   this[this.head] = null;
//   this.size -= 1;

//   if (!this.size) {
//     this.head = null;
//     this.tail = this.head;
//   } else {
//     if (this.head === this.maxSize) {
//       this.head = 0;
//     } else {
//       this.head += 1;
//     }
//   }

//   return true;
// };

// /**
//  * Get the front item from the queue.
//  * @return {number}
//  */
// MyCircularQueue.prototype.Front = function() {
//   return isNaN(this[this.head]) ? -1 : this[this.head];
// };

// /**
//  * Get the last item from the queue.
//  * @return {number}
//  */
// MyCircularQueue.prototype.Rear = function() {
//   return isNaN(this[this.tail]) ? -1 : this[this.tail];
// };

// /**
//  * Checks whether the circular queue is empty or not.
//  * @return {boolean}
//  */
// MyCircularQueue.prototype.isEmpty = function() {
//   return !this.size;
// };

// /**
//  * Checks whether the circular queue is full or not.
//  * @return {boolean}
//  */
// MyCircularQueue.prototype.isFull = function() {
//   return this.maxSize === this.size;
// };

let circularQueue = new MyCircularQueue(3);
console.log(circularQueue.enQueue(1)); // return true
console.log(circularQueue.enQueue(2)); // return true
console.log(circularQueue.enQueue(3)); // return true
console.log(circularQueue.enQueue(4)); // return false, the queue is full
console.log(circularQueue.Rear()); // return 3
console.log(circularQueue.isFull()); // return true
console.log(circularQueue.deQueue()); // return true
console.log(circularQueue.enQueue(4)); // return true
console.log(circularQueue.Rear()); // return 4

circularQueue = new MyCircularQueue(6);
console.log(circularQueue.enQueue(6)); // return true
console.log(circularQueue.Rear()); // return 6
console.log(circularQueue.Rear()); // return 6
console.log(circularQueue.deQueue()); // return true
console.log(circularQueue.enQueue(5)); // return true
console.log(circularQueue.Rear()); // return 5
console.log(circularQueue.deQueue()); // return true
console.log(circularQueue.Front()); // return 5
console.log(circularQueue.deQueue()); // return true
console.log(circularQueue.deQueue()); // return false
console.log(circularQueue.deQueue()); // return false
