const linkListUtil = require('./linkList.util');
const { buildLinkedList, printLinkedList } = linkListUtil;

// recursion version
// 108ms
var linkListAppend = (head, tail) => {
  let cursor = head;
  while (cursor.next) {
    cursor = cursor.next;
  }
  cursor.next = tail;
  return head;
};

var reverseList = function(head) {
  if (head === null || head.next === null) {
    return head;
  }

  const newHead = reverseList(head.next);
  head.next = null;
  return linkListAppend(newHead, head);
};

// fatest
// 56ms
var reverseList = function(head) {
  let res = null;
  while (head) {
    let rem = head.next; //2...5 // 3...5 // 4..5
    head.next = res; // 1 //2 1 //3 ,2,1
    res = head; // 1 // 2, 1
    head = rem; // 2...5 //3...5
  }
  return res;
};

const l1 = buildLinkedList([1]);
console.log(printLinkedList(reverseList(l1)));
// 1

const l2 = buildLinkedList([1, 2]);
console.log(printLinkedList(reverseList(l2)));
// 21

const l3 = buildLinkedList([1, 2, 3, 4]);
console.log(printLinkedList(reverseList(l3)));
// 4321
