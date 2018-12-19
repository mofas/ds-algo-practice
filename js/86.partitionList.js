const linkListUtil = require('./linkList.util');
const { buildLinkedList, printLinkedList, ListNode } = linkListUtil;

var partition = function(head, x) {
  let dummy1 = new ListNode(0);
  let dummy2 = new ListNode(0);
  let smallerPtr = dummy1;
  let largerPtr = dummy2;

  let cursor = head;
  while (cursor) {
    let next = cursor.next;
    if (cursor.val < x) {
      smallerPtr.next = cursor;
      smallerPtr = cursor;
    } else {
      largerPtr.next = cursor;
      largerPtr = cursor;
    }
    cursor = next;
  }
  smallerPtr.next = dummy2.next;
  largerPtr.next = null;
  return dummy1.next;
};

console.log(printLinkedList(partition(buildLinkedList([1, 4, 3, 2, 5, 2]), 3)));
// [1,2,2,4,3,5]
