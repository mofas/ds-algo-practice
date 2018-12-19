const linkListUtil = require('./linkList.util');
const { buildLinkedList, printLinkedList, ListNode } = linkListUtil;

// 76ms
var removeNthFromEnd = function(head, n) {
  //
  let len = 0;
  let cursor = head;
  while (cursor) {
    cursor = cursor.next;
    len++;
  }
  let idxFromHead = len - n + 1;
  let dummyHead = new ListNode(0);

  dummyHead.next = head;
  cursor = dummyHead;
  let prev = dummyHead;
  while (idxFromHead > 0) {
    prev = cursor;
    cursor = cursor.next;
    idxFromHead--;
  }
  prev.next = cursor.next;
  return dummyHead.next;
};

// best sol
// 56ms
var removeNthFromEnd = function(head, n) {
  var slow = head;
  var fast = head;
  for (var i = 0; i < n; i++) {
    fast = fast.next;
  }
  if (!fast) return head.next;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next;
  }
  slow.next = slow.next.next;
  return head;
};

console.log(
  printLinkedList(removeNthFromEnd(buildLinkedList([1, 2, 3, 4, 5]), 2))
);
// [1,2,3,5]
