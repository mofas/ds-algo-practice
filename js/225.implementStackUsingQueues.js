/**
 * Initialize your data structure here.
 */
var MyStack = function() {
  this.count = 0;
  this.last = null;
  this.isQueue1 = true;
  this.queue1 = [];
  this.queue2 = [];
};

/**
 * Push element x onto stack.
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
  this.count++;
  let tq = this.isQueue1 ? this.queue1 : this.queue2;
  tq.push(x);
  this.last = x;
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
  let tq = this.isQueue1 ? this.queue1 : this.queue2;
  let nq = this.isQueue1 ? this.queue2 : this.queue1;
  for (let i = 0; i < this.count - 1; i++) {
    let val = tq.shift();
    if (i === this.count - 2) this.last = val;
    nq.push(val);
  }
  let ret = tq.shift();
  this.count--;
  this.isQueue1 = !this.isQueue1;
  return ret;
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
  return this.last;
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
  return this.count === 0;
};

let mystack = new MyStack();
mystack.push(1);
mystack.push(2);
console.log(mystack.top()); // returns 2
console.log(mystack.pop()); // returns 2
console.log(mystack.empty()); // returns false

mystack = new MyStack();
mystack.push(1);
mystack.push(2);
console.log(mystack.pop()); // returns 2
console.log(mystack.top()); // returns 1
