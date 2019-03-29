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
    let rem = head.next;
    head.next = res;
    res = head;
    head = rem;
  }
  return res;
};

// 2nd recursive
// Runtime: 64 ms, faster than 76.26%
// Memory Usage: 35.3 MB, less than 25.91%
var reverseList = function(head) {
  const helper = (current, tail) => {
    if (!current) return tail;
    const res = helper(current.next, current);
    current.next = tail;
    return res;
  };
  return helper(head, null);
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
