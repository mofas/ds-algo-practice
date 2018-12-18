const linkListUtil = require('./linkList.util');
const { buildLinkedList, printLinkedList, ListNode } = linkListUtil;

// 116ms
var addTwoNumbers = function(l1, l2) {
  let s1 = [];
  let s2 = [];
  let digits = 0;
  while (l1 || l2) {
    if (l1) {
      s1.push(l1.val);
      l1 = l1.next;
    } else {
      s1.unshift(0);
    }
    if (l2) {
      s2.push(l2.val);
      l2 = l2.next;
    } else {
      s2.unshift(0);
    }
    digits++;
  }
  // console.log(s1, s2);
  let cursor = null;
  for (let i = digits - 1; i >= 0; i--) {
    let digSum = s1[i] + s2[i];
    if (digSum >= 10 && i > 0) {
      digSum -= 10;
      s1[i - 1]++;
    }
    let node = new ListNode(digSum);
    node.next = cursor;
    cursor = node;
  }
  if (cursor.val >= 10) {
    cursor.val -= 10;
    let node = new ListNode(1);
    node.next = cursor;
    cursor = node;
  }
  return cursor;
};

console.log(
  printLinkedList(addTwoNumbers(buildLinkedList([5]), buildLinkedList([5])))
);
// [1, 0]

console.log(
  printLinkedList(
    addTwoNumbers(buildLinkedList([7, 2, 4, 3]), buildLinkedList([5, 6, 4]))
  )
);
// [7, 8, 0, 7]
