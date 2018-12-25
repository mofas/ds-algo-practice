/**
 * @param {number} k
 * @param {number[]} nums
 */
// 480ms
var KthLargest = function(k, nums) {
  nums.sort((b, a) => a - b);
  this.k = k;
  this.topK = nums.slice(0, k);
  // console.log(k);
  // console.log(this.topK);
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
  if (this.topK.length < this.k || this.topK[this.k - 1] < val) {
    let i = 0;
    for (; i < this.k; i++) {
      if (this.topK[i] < val) {
        this.topK.splice(i, 0, val);
        // console.log(this.topK, '=====');
        break;
      }
    }
    if (i >= this.topK.length) {
      this.topK.push(val);
    }
  }
  if (this.topK.length > this.k) {
    this.topK.pop();
  }
  // console.log(this.topK);
  return this.topK[this.k - 1];
};

// best sol
// 88ms
// priority queue

class PriorityQueue {
  constructor(initialVals = []) {
    this.heap = initialVals;
    this.heapify();
  }

  heapify() {
    if (this.heap.length > 0) {
      for (let i = 1; i < this.heap.length; i++) {
        this.bubbleUp(i);
      }
    }
  }

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return !this.heap.length;
  }

  offer(val) {
    this.heap.push(val);
    this.bubbleUp(this.heap.length - 1);
  }
  comparator(a, b) {
    return a - b;
  }

  poll() {
    if (!this.size()) return null;

    const result = this.heap[0];
    const last = this.heap.pop();

    if (this.heap.length > 0) {
      this.heap[0] = last;
      this.bubbleDown(0);
    }

    return result;
  }

  peek() {
    return this.heap.length ? this.heap[0] : null;
  }

  bubbleUp(idx) {
    while (idx > 0) {
      const parent = (idx - 1) >> 1;
      if (this.comparator(this.heap[idx], this.heap[parent]) < 0) {
        const tmp = this.heap[parent];
        this.heap[parent] = this.heap[idx];
        this.heap[idx] = tmp;
        idx = parent;
      } else {
        break;
      }
    }
  }

  bubbleDown(pos) {
    const last = this.heap.length - 1;
    while (true) {
      let left = (pos << 1) + 1;
      let right = left + 1;
      let minIndex = pos;

      if (
        left <= last &&
        this.comparator(this.heap[left], this.heap[minIndex]) < 0
      ) {
        minIndex = left;
      }
      if (
        right <= last &&
        this.comparator(this.heap[right], this.heap[minIndex]) < 0
      ) {
        minIndex = right;
      }

      if (minIndex !== pos) {
        const temp = this.heap[minIndex];
        this.heap[minIndex] = this.heap[pos];
        this.heap[pos] = temp;
        pos = minIndex;
      } else {
        break;
      }
    }
  }

  getChildIdx(idx) {
    const left = 2 * idx + 1;
    const right = left + 1;
    const lastIdx = this.heap.length - 1;
    let minIdx = idx;
    if (left < lastIdx) {
      if (this.comparator(this.heap[left], this.heap[minIdx]) < 0) {
        minIdx = left;
      }
    }
    if (right < lastIdx) {
      if (this.comparator(this.heap[right], this.heap[minIdx]) < 0) {
        minIdx = right;
      }
    }

    return minIdx;
  }
}

class KthLargest {
  /**
   * @param {number} k
   * @param {number[]} nums
   */
  constructor(k, nums) {
    this.pq = new PriorityQueue(nums);
    this.k = k;

    while (this.pq.size() > this.k) {
      this.pq.poll();
    }
  }

  /**
   * @param {number} val
   * @return {number}
   */
  add(val) {
    if (this.pq.size() < this.k) {
      this.pq.offer(val);
    } else if (val > this.pq.peek()) {
      this.pq.poll();
      this.pq.offer(val);
    }
    return this.pq.peek();
  }
}

let kl = new KthLargest(3, [4, 5, 8, 2]);

console.log(kl.add(3)); // 4
console.log(kl.add(5)); // 5
console.log(kl.add(10)); // 5
console.log(kl.add(9)); // 8
console.log(kl.add(4)); // 8

kl = new KthLargest(1, []);

console.log(kl.add(-3)); // -3
console.log(kl.add(-2)); // -2
console.log(kl.add(-4)); // -2
console.log(kl.add(0)); // 0
console.log(kl.add(4)); // 4

kl = new KthLargest(2, [0]);

console.log(kl.add(-1)); // -1
console.log(kl.add(1)); // 0
console.log(kl.add(-2)); // 0
console.log(kl.add(-4)); // 0
console.log(kl.add(3)); // 1

kl = new KthLargest(3, [5, -1]);

console.log(kl.add(2)); // -1
console.log(kl.add(1)); // 1
console.log(kl.add(-1)); // 1
console.log(kl.add(3)); // 2
console.log(kl.add(4)); // 3
