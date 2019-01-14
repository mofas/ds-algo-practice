class MinHeap {
  constructor() {
    this._items = [];
  }

  pop() {
    let ret = this._items.shift();
    this.heapify();
    return ret;
  }

  top() {
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

  push(item) {
    this._items.unshift(item);
    this.heapify();
  }

  swap(i, j) {
    let temp = this._items[i];
    this._items[i] = this._items[j];
    this._items[j] = temp;
  }

  isEmpty() {
    return this._items.length === 0;
  }

  size() {
    return this._items.length;
  }

  _getItems() {
    return this._items;
  }
}

module.exports = {
  MinHeap
};

// const heap = new MinHeap();

// heap.push(5);
// heap.push(4);
// heap.push(1);
// heap.push(3);
// heap.push(6);
// heap.push(2);

// while (!heap.isEmpty()) {
//   const min = heap.pop();
//   console.log('extract min', min, 'next:', heap.top());
// }
