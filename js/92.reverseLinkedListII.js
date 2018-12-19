const linkListUtil = require('./linkList.util');
const { buildLinkedList, printLinkedList, ListNode } = linkListUtil;

// 72 ms
var reverseBetween = function(head, m, n) {
  let dummyHead = new ListNode(-1);
  let firstTail = null;
  dummyHead.next = head;
  let prev = dummyHead;
  let cursor = dummyHead;
  for (let i = 0; i < m; i++) {
    prev = cursor;
    cursor = cursor.next;
  }
  firstTail = prev;
  prev.next = null;
  let reverseHead = cursor;
  prev = cursor;

  for (let i = 0; i < n - m + 1; i++) {
    prev = cursor;
    cursor = cursor.next;
  }
  prev.next = null;
  let lastHead = cursor;
  // console.log(dummyHead, firstTail, reverseHead, lastHead);

  // reverse reverseHead;
  let res = null;
  let secondTail = reverseHead;
  while (reverseHead) {
    let rem = reverseHead.next;
    reverseHead.next = res;
    res = reverseHead;
    reverseHead = rem;
  }

  firstTail.next = res;
  secondTail.next = lastHead;
  return dummyHead.next;
};

console.log(printLinkedList(reverseBetween(buildLinkedList([5]), 1, 1)));
// [5]

console.log(
  printLinkedList(reverseBetween(buildLinkedList([1, 2, 3, 4, 5]), 2, 4))
);
// [1,4,3,2,5]
