const linkListUtil = require('./linkList.util');
const { buildLinkedList, printLinkedList, ListNode } = linkListUtil;

// 100ms
var splitListToParts = function(root, k) {
  let ret = new Array(k).fill(null);
  let splitGroupCount = new Array(k).fill(0);
  let cursor = root;
  let c = 0;
  while (cursor) {
    splitGroupCount[c]++;
    c = (c + 1) % k;
    cursor = cursor.next;
  }
  cursor = root;
  for (let i = 0; i < k; i++) {
    let dummyHead = new ListNode(0);
    let innerCursor = dummyHead;
    for (let j = 0; j < splitGroupCount[i]; j++) {
      innerCursor.next = cursor;
      innerCursor = cursor;
      cursor = cursor.next;
    }
    innerCursor.next = null;
    ret[i] = dummyHead.next;
  }
  // console.log(ret);
  return ret;
};

// best sol
// 60ms
var splitListToParts = function(root, k) {
  var length = 0;
  var current = root;
  while (current) {
    length++;
    current = current.next;
  }

  var prev;
  var result = [];
  current = root;

  var minPartLength = Math.floor(length / k);
  var left = length - minPartLength * k;

  for (var i = 0; i < k; i++) {
    if (i < length) {
      result.push(current);
      for (var j = 0; j < minPartLength; j++) {
        prev = current;
        current = current.next;
      }
      if (left) {
        prev = current;
        current = current.next;
        left--;
      }
      prev.next = null;
    } else {
      result.push(null);
    }
  }
  return result;
};

console.log(
  splitListToParts(buildLinkedList([1, 2, 3, 4]), 5).map(printLinkedList)
);
// [[1],[2],[3],[4],[]]

console.log(
  splitListToParts(buildLinkedList([1, 2, 3]), 5).map(printLinkedList)
);
// [[1],[2],[3],[],[]]

console.log(
  splitListToParts(buildLinkedList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 3).map(
    printLinkedList
  )
);
// [[1, 2, 3, 4], [5, 6, 7], [8, 9, 10]]
