const linkListUtil = require('./linkList.util');
const { buildLinkedList, printLinkedList } = linkListUtil;

// 70ms
var removeElements = function(head, val) {
  while (head && head.val === val) {
    if (head.next) head = head.next;
    else return null;
  }

  let prev = head;
  let cursor = head;
  while (cursor) {
    if (cursor.val === val) {
      prev.next = cursor.next;
      cursor = cursor.next;
    } else {
      prev = cursor;
      cursor = cursor.next;
    }
  }
  return head;
};

const l1 = buildLinkedList([1, 2, 6, 3, 4, 5, 6]);
console.log(printLinkedList(removeElements(l1, 6)));
// 12345

const l2 = buildLinkedList([6, 6, 6, 6]);
console.log(printLinkedList(removeElements(l2, 6)));

const l3 = buildLinkedList([6, 6, 1, 6, 6]);
console.log(printLinkedList(removeElements(l3, 6)));
