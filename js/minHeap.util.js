class MinHeap {
  constructor() {
    this._items = [];
  }

  extractMin() {
    let ret = this._items.shift();
    this.heapify();
    return ret;
  }

  peekTop() {
    return this._items[0];
  }

  lesser(i, j) {
    return this._items[i] < this._items[j];
  }

  bubbleDown(i) {
    let node = i;
    let n = this._items.length;
    let left = i => (i << 1) + 1;
    let right = i => (i << 1) + 2;

    while (
      (node < n && this.lesser(left(node), node)) ||
      (node < n && this.lesser(right(node), node))
    ) {
      // while either child is lesser, we bubble down
      let smallerChild = node;
      if (this.lesser(left(node), node)) {
        smallerChild = left(node);
      }
      if (
        this.lesser(right(node), node) &&
        this.lesser(right(node), left(node))
      ) {
        smallerChild = right(node);
      }
      this.swap(smallerChild, node);
      node = smallerChild + 1;
    }
  }

  heapify() {
    let n = this._items.length;
    for (let i = Math.floor(n / 2 - 1); i >= 0; i--) {
      this.bubbleDown(i);
    }
  }

  insert(item) {
    this._items.unshift(item);
    this.heapify();
    console.log(this._items);
  }

  swap(i, j) {
    let temp = this._items[i];
    this._items[i] = this._items[j];
    this._items[j] = temp;
  }

  isEmpty() {
    return this._items.length === 0;
  }
}

module.exports = {
  MinHeap
};

// const heap = new MinHeap();

// heap.insert(5);
// heap.insert(4);
// heap.insert(1);
// heap.insert(3);
// heap.insert(6);
// heap.insert(2);

// while (!heap.isEmpty()) {
//   const min = heap.extractMin();
//   console.log('extract min', min);
// }
