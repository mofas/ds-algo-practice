/**
 * Initialize your data structure here.
 */

var RandomizedSet = function() {
  this.hash = {};
  // We can improve perf by maintainning another array
  // this.a = [];
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
  if (this.hash[val]) {
    return false;
  } else {
    this.hash[val] = true;
    return true;
  }
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
  if (this.hash[val]) {
    this.hash[val] = null;
    return true;
  } else {
    return false;
  }
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
  const vals = Object.keys(this.hash);
  const len = vals.length;
  let ret = null;
  let n = Math.floor(Math.random() * len);
  while (this.hash[vals[n]] == null) {
    n = Math.floor(Math.random() * len);
  }
  return Number(vals[n]);
};

const randomSet1 = new RandomizedSet();

console.log(randomSet1.insert(1));
console.log(randomSet1.insert(2));
console.log(randomSet1.insert(2));
console.log(randomSet1.insert(3));

console.log(randomSet1.getRandom()); // 1 or 2
console.log(randomSet1.getRandom()); // 1 or 2
console.log(randomSet1.getRandom()); // 1 or 2

console.log('=======');

console.log(randomSet1.remove(1));
console.log(randomSet1.remove(4));
console.log(randomSet1.insert(2));

console.log(randomSet1.getRandom()); // only 2 3
console.log(randomSet1.getRandom()); // only 2 3
console.log(randomSet1.getRandom()); // only 2 3
console.log(randomSet1.getRandom()); // only 2 3

console.log('=======');

console.log(randomSet1.remove(3));

console.log(randomSet1.getRandom()); // only 2
console.log(randomSet1.getRandom()); // only 2
console.log(randomSet1.getRandom()); // only 2
console.log(randomSet1.getRandom()); // only 2
