const linkListUtil = require('./linkList.util');
const { buildLinkedList, printLinkedList } = linkListUtil;

var deleteNode = node => {
  node.val = node.next.val;
  node.next = node.next.next;
};

// 88 ms
var deleteDuplicates = function(head) {
  let cursor = head;
  while (cursor && cursor.next) {
    while (cursor.next && cursor.val === cursor.next.val) {
      deleteNode(cursor);
    }
    cursor = cursor.next;
  }
  return head;
};

// best
// 64ms
// var deleteDuplicates = function(head) {
//   var p = head;
//   while (p != null && p.next != null) {
//     if (p.val === p.next.val) {
//       p.next = p.next.next;
//     } else {
//       p = p.next;
//     }
//   }
//   return head;
// };

const l0 = buildLinkedList([1, 1, 1, 1, 1]);
console.log(printLinkedList(deleteDuplicates(l0)));
// 1

const l1 = buildLinkedList([1, 1, 2]);
console.log(printLinkedList(deleteDuplicates(l1)));
// 12

const l2 = buildLinkedList([1, 1, 2, 3, 3]);
console.log(printLinkedList(deleteDuplicates(l2)));
// 123
