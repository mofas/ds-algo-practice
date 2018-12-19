const linkListUtil = require('./linkList.util');
const { buildLinkedList, printLinkedList, ListNode } = linkListUtil;

var sortList = function(head) {
  // split to two list
  if (!head || !head.next) return head;
  let prevSlow = head;
  let fast = head;
  let slow = head;

  while (fast && fast.next) {
    prevSlow = slow;
    slow = slow.next;
    fast = fast.next.next;
  }
  prevSlow.next = null;

  const sortl1 = sortList(head);
  const sortl2 = sortList(slow);
  return merge(sortl1, sortl2);
};

var merge = function(l1, l2) {
  let dummyHead = new ListNode(0);
  let cursor = dummyHead;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      cursor.next = l1;
      l1 = l1.next;
    } else {
      cursor.next = l2;
      l2 = l2.next;
    }
    cursor = cursor.next;
  }

  if (l1) cursor.next = l1;
  if (l2) cursor.next = l2;
  return dummyHead.next;
};

console.log(printLinkedList(sortList(buildLinkedList([4, 2, 1, 3]))));
// [1,2,3,4]

console.log(printLinkedList(sortList(buildLinkedList([-1, 5, 3, 4, 0]))));
// [-1,0,3,4,5]
