const linkListUtil = require('./linkList.util');
const { buildLinkedList, printLinkedList, ListNode } = linkListUtil;

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

var reverseKGroup = function(head, k) {
  if (!head || !head.next) return head;
  const dummyHead = new ListNode(0);
  let mainCursor = dummyHead;
  let c = 0;
  let cursor = head;
  let currentHead = head;
  while (cursor) {
    c++;
    let nextCursor = cursor.next;
    if (c === k) {
      c = 0;
      cursor.next = null;
      let nextMainCursor = currentHead;
      mainCursor.next = reverseList(currentHead);
      mainCursor = nextMainCursor;
      currentHead = nextCursor;
      // console.log(currentHead, nextCursor);
    }
    cursor = nextCursor;
  }
  mainCursor.next = currentHead;
  return dummyHead.next;
};

console.log(
  printLinkedList(reverseKGroup(buildLinkedList([1, 2, 3, 4, 5]), 2))
);
// [2,1,4,3,5]

console.log(
  printLinkedList(reverseKGroup(buildLinkedList([1, 2, 3, 4, 5]), 3))
);
// [3,2,1,4,5]
