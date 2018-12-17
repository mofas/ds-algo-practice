const linkListUtil = require('./linkList.util');
const { ListNode, buildLinkedList, printLinkedList } = linkListUtil;

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
    // console.log(this._items, i, j);
    const left = this._items[i] ? this._items[i].val : Infinity;
    const right = this._items[j] ? this._items[j].val : Infinity;
    // console.log('compaer', i, j, left, right);
    return left <= right;
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

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

// 4412ms
var mergeKLists = function(lists) {
  let resHead = new ListNode(0);
  let currentNode = resHead;
  const heap = new MinHeap();

  for (let i = 0; i < lists.length; i++) {
    let node = lists[i];
    while (node) {
      heap.insert(node);
      node = node.next;
    }
  }
  while (!heap.isEmpty()) {
    const min = heap.extractMin();
    currentNode.next = min;
    currentNode = min;
  }
  currentNode.next = null;
  return resHead.next;
};

// best sol from web
// 80ms
// var mergeKLists = function(lists) {
//   let k = lists.length;
//   if (k == 0) return null;
//   let l = 0,
//     r = k - 1;
//   while (r > 0) {
//     while (l < r) {
//       lists[l] = merge2Lists(lists[l], lists[r]);
//       l++;
//       r--;
//     }
//     l = 0;
//   }
//   return lists[0];
// };

// const merge2Lists = (l1, l2) => {
//   let dummy = new ListNode(0);
//   let head = dummy;

//   while (l1 && l2) {
//     if (l1.val <= l2.val) {
//       head.next = l1;
//       l1 = l1.next;
//     } else {
//       head.next = l2;
//       l2 = l2.next;
//     }
//     head = head.next;
//   }
//   if (l1) {
//     head.next = l1;
//   } else {
//     head.next = l2;
//   }
//   return dummy.next;
// };

// my own recursion version
// 88 ms
const mergeList = (l1, l2) => {
  let dummyHead = new ListNode(0);
  let current = dummyHead;
  while (l1 && l2) {
    if (l1.val >= l2.val) {
      current.next = l2;
      l2 = l2.next;
    } else {
      current.next = l1;
      l1 = l1.next;
    }
    current = current.next;
  }

  if (l1) current.next = l1;
  if (l2) current.next = l2;

  return dummyHead.next;
};

var mergeKLists = function(lists) {
  const n = lists.length;
  const helper = (from, to) => {
    // console.log(from, to);
    if (from === to) return lists[from];
    if (from < to) {
      let mid = Math.floor((from + to) / 2);
      let left = helper(from, mid);
      let right = helper(mid + 1, to);
      return mergeList(left, right);
    }
    return null;
  };
  return helper(0, n - 1);
};

const l1 = buildLinkedList([1, 4, 5]);
const l2 = buildLinkedList([1, 3, 4]);
const l3 = buildLinkedList([2, 6]);

console.log(
  printLinkedList(
    mergeKLists([buildLinkedList([4, 5, 6]), buildLinkedList([1, 2, 3])])
  )
);
// 1 2 3 4 5

console.log(
  printLinkedList(
    mergeKLists([buildLinkedList([1, 2, 2]), buildLinkedList([1, 1, 2])])
  )
);
// 1 1 1 2 2 2

console.log(printLinkedList(mergeKLists([l1, l2, l3])));
// 1->1->2->3->4->4->5->6

console.log(
  printLinkedList(
    mergeKLists([
      buildLinkedList([-6, -4, 0, 0, 4]),
      buildLinkedList([]),
      buildLinkedList([-4, -2, -1, 1, 2, 3]),
      buildLinkedList([-9, -6, -5, -2, 4, 4]),
      buildLinkedList([-9, -6, -5, -2, -1, 3]),
      buildLinkedList([-2, -1, 0]),
      buildLinkedList([-6]),
      buildLinkedList([-8, -1, 0, 2])
    ])
  )
);

// [
//   -9,
//   -9,
//   -8,
//   -6,
//   -6,
//   -6,
//   -6,
//   -5,
//   -5,
//   -4,
//   -4,
//   -2,
//   -2,
//   -2,
//   -2,
//   -1,
//   -1,
//   -1,
//   -1,
//   0,
//   0,
//   0,
//   0,
//   1,
//   2,
//   2,
//   3,
//   3,
//   4,
//   4,
//   4
// ];
