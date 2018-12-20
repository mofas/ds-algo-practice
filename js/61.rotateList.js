const linkListUtil = require('./linkList.util');
const { buildLinkedList, printLinkedList, ListNode } = linkListUtil;

// 64ms
var rotateRight = function(head, k) {
  if (!head || !head.next) return head;
  // calculate len
  let len = 0;
  let cursor = head;
  while (cursor) {
    len++;
    cursor = cursor.next;
  }
  k = k % len;
  const dummyHead = new ListNode(0);
  let tail = dummyHead;
  cursor = head;
  while (k < len) {
    tail.next = cursor;
    tail = tail.next;
    cursor = cursor.next;
    k++;
  }
  const newHead = cursor;
  tail.next = null;
  if (cursor) {
    while (cursor && cursor.next) {
      cursor = cursor.next;
    }
    cursor.next = dummyHead.next;
    return newHead;
  } else {
    return dummyHead.next;
  }
};

console.log(printLinkedList(rotateRight(buildLinkedList([]), 0)));
// []

console.log(printLinkedList(rotateRight(buildLinkedList([1, 2]), 0)));
// [1,2]

console.log(printLinkedList(rotateRight(buildLinkedList([1, 2, 3, 4, 5]), 2)));
// [4,5,1,2,3]

console.log(printLinkedList(rotateRight(buildLinkedList([0, 1, 2]), 4)));
// [2,0,1]
