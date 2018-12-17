const linkListUtil = require('./linkList.util');
const { buildLinkedList, printLinkedList } = linkListUtil;

//64 ms
var deleteNode = function(node) {
  let prev = null;
  let cursor = node;
  while (cursor.next) {
    cursor.val = cursor.next.val;
    prev = cursor;
    cursor = cursor.next;
  }
  prev.next = null;
};

// const sol
// 60ms
// var deleteNode = node => {
//   node.val = node.next.val;
//   node.next = node.next.next;
// };

const l1 = buildLinkedList([4, 5, 1, 9]);
deleteNode(l1.next);
console.log(printLinkedList(l1));
// 419

const l2 = buildLinkedList([4, 5, 1, 9]);
deleteNode(l2.next.next);
console.log(printLinkedList(l2));
// 459
