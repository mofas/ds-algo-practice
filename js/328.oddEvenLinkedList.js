const linkListUtil = require('./linkList.util');
const { buildLinkedList, printLinkedList, ListNode } = linkListUtil;

// 64ms
var oddEvenList = function(head) {
  let oddHead = new ListNode(0);
  let evenHead = new ListNode(0);
  let isOdd = true;
  let cursor = head;
  let oddCursor = oddHead;
  let evenCursor = evenHead;
  while (cursor) {
    if (isOdd) {
      oddCursor.next = cursor;
      oddCursor = cursor;
    } else {
      evenCursor.next = cursor;
      evenCursor = cursor;
    }
    isOdd = !isOdd;
    cursor = cursor.next;
  }
  oddCursor.next = evenHead.next;
  evenCursor.next = null;
  return oddHead.next;
};

console.log(printLinkedList(oddEvenList(buildLinkedList([1, 2, 3, 4, 5]))));
// [1,3,5,2,4]

console.log(
  printLinkedList(oddEvenList(buildLinkedList([2, 1, 3, 5, 6, 4, 7])))
);
// [2,3,6,7,1,5,4]
