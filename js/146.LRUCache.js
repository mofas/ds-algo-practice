/**
 * @param {number} capacity
 */
// 672 ms, faster than 6.08%
// 7.8 MB, less than 5.95%
var LRUCache = function(capacity) {
  this.capacity = capacity;
  this.existed = {};
  this.queue = [];
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  let ret = -1;
  if (this.existed[key] != null) {
    this.queue = this.queue.filter(d => d !== key);
    ret = this.existed[key];
    this.queue.push(key);
    if (this.queue.length > this.capacity) {
      const removed = this.queue.pop();
      this.existed[removed] = null;
    }
  }

  // console.log('get', this.queue, this.existed);
  return ret;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  if (this.existed[key] != null) {
    this.queue = this.queue.filter(d => d !== key);
  }
  this.existed[key] = value;
  this.queue.push(key);
  if (this.queue.length > this.capacity) {
    const removed = this.queue.shift();
    this.existed[removed] = null;
  }
  // console.log('put', this.queue, this.existed);
};

// best sol
// 192ms
// It is order map
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.storage = new Map();
  this.capacity = capacity;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  var value = this.storage.get(key);

  if (value != null) {
    this.storage.delete(key);
    this.storage.set(key, value);
    return value;
  }
  return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  this.storage.delete(key);
  this.storage.set(key, value);
  if (this.storage.size > this.capacity) {
    this.storage.delete(this.storage.keys().next().value);
  }
};

// traditional solutions
// using double linked-list
class LRUCache {
  constructor(capacity) {
    this._capacity = capacity;
    this._m = new Map();
    this._head = {};
    this._tail = {};
    this._head.next = this._tail;
    this._tail.prev = this._head;
  }

  get(key) {
    if (!this._m.has(key)) return -1;
    const { val } = this._m.get(key);
    this.put(key, val);
    return val;
  }

  put(key, val) {
    if (this._m.has(key)) this._removeFromLL(this._m.get(key));
    const node = { key, val };
    this._m.set(key, node);
    this._addToLL(node);
    if (this._m.size > this._capacity) {
      this._m.delete(this._head.next.key);
      this._removeFromLL(this._head.next);
    }
  }

  _addToLL(node) {
    const prev = this._tail.prev;
    prev.next = node;
    node.prev = prev;
    node.next = this._tail;
    this._tail.prev = node;
  }

  _removeFromLL(node) {
    const { prev, next } = node;
    prev.next = next;
    next.prev = prev;
  }
}

let cache = new LRUCache(2);

// cache.put(1, 1);
// cache.put(2, 2);
// console.log(cache.get(1)); // returns 1
// cache.put(3, 3); // evicts key 2
// console.log(cache.get(2)); // returns -1 (not found)
// cache.put(4, 4); // evicts key 1
// console.log(cache.get(1)); // returns -1 (not found)
// console.log(cache.get(3)); // returns 3
// console.log(cache.get(4)); // returns 4

cache = new LRUCache(2);
console.log(cache.get(2)); // -1
cache.put(2, 6);
console.log(cache.get(1)); // -1
cache.put(1, 5);
cache.put(1, 2);
console.log(cache.get(1)); // 2
console.log(cache.get(2)); // 6
