var LFUCache = function(capacity) {
  this.capacity = capacity;
  this.count = 0;
  this.freq = {};
  this.values = {};
  this.opOrder = [];
};

LFUCache.prototype.updateOrder = function(key) {
  this.opOrder = this.opOrder.filter(d => d !== String(key));
  this.opOrder.push(String(key));
};

LFUCache.prototype.get = function(key) {
  if (this.freq[key]) {
    this.freq[key] = this.freq[key] + 1;
    this.updateOrder(key);
    return this.values[key];
  }
  return -1;
};

LFUCache.prototype.put = function(key, value) {
  // console.log(key, '===', this.count, this.freq);
  if (this.capacity > 0) {
    if (this.freq[key] > 0) {
      this.freq[key] = this.freq[key] + 1;
      this.values[key] = value;
    } else {
      // we are full, we need to remove least freq one
      if (this.count === this.capacity) {
        let min = Infinity;
        let minKey = null;
        Object.keys(this.freq).forEach(d => {
          if (this.freq[d] < min) {
            min = this.freq[d];
          }
        });
        let minKeys = Object.keys(this.freq).filter(d => this.freq[d] === min);
        if (minKeys.length > 1) {
          minKey = this.opOrder.filter(d => minKeys.indexOf(d) > -1)[0];
        } else {
          minKey = minKeys[0];
        }
        delete this.freq[minKey];
        delete this.values[minKey];
      } else {
        this.count = this.count + 1;
      }
      this.freq[key] = 1;
      this.values[key] = value;
    }
    this.updateOrder(key);
  }
};

const cache = new LFUCache(2);

cache.put(1, 1);
cache.put(2, 2);
console.log(cache.get(1)); // returns 1
cache.put(3, 3); // evicts key 2
console.log(cache.get(2)); // returns -1 (not found)
console.log(cache.get(3)); // returns 3.
cache.put(4, 4); // evicts key 1.
console.log(cache.get(1)); // returns -1 (not found)
console.log(cache.get(3)); // returns 3
console.log(cache.get(4)); // returns 4

console.log('\ncache2\n');
const cache2 = new LFUCache(3);

cache2.put(2, 2);
cache2.put(1, 1);
console.log(cache2.get(2)); // 2
console.log(cache2.get(1)); // 1
console.log(cache2.get(2)); // 2
cache2.put(3, 3);
cache2.put(4, 4);
console.log(cache2.get(3)); // -1
console.log(cache2.get(2)); // 2
console.log(cache2.get(1)); // 1
console.log(cache2.get(4)); // 4

console.log('\ncache3\n');

const cache3 = new LFUCache(1);

cache3.put(0, 0);
console.log(cache3.get(0)); // 0

console.log('\ncache4\n');

const cache4 = new LFUCache(0);

cache4.put(0, 0);
console.log(cache4.get(0)); // -1

console.log('\ncache5\n');

const cache5 = new LFUCache(2);

cache5.put(2, 1);
cache5.put(3, 2);
console.log(cache5.get(3)); // 2
console.log(cache5.get(2)); // 1
cache5.put(4, 3);
console.log(cache5.get(2)); // 1
console.log(cache5.get(3)); // -1
console.log(cache5.get(4)); // 3
