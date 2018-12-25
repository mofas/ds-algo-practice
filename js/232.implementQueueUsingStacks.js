/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
  this.count = 0;
  this.stack1 = [];
  this.stack2 = [];
};

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  this.count++;
  this.stack1.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  this.count--;
  if (!this.stack2.length) {
    while (this.stack1.length) {
      this.stack2.push(this.stack1.pop());
    }
  }
  return this.stack2.pop();
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  if (!this.stack2.length) {
    while (this.stack1.length) {
      this.stack2.push(this.stack1.pop());
    }
  }
  return this.stack2[this.stack2.length - 1];
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  return this.count === 0;
};

let myQueue = new MyQueue();
myQueue.push(1);
myQueue.push(2);
console.log(myQueue.peek()); // returns 1
console.log(myQueue.pop()); // returns 1
console.log(myQueue.empty()); // returns false

myQueue = new MyQueue();
myQueue.push(1);
myQueue.push(2);
console.log(myQueue.peek()); // returns 1
myQueue.push(3);
console.log(myQueue.peek()); // return 1
