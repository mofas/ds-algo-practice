const linkListUtil = require('./linkList.util');
const { buildLinkedList, printLinkedList, ListNode } = linkListUtil;

var reorderList = function(head) {
  if (!head || !head.next) return head;
  let prev = null;
  let fast = head;
  let slow = head;
  while (fast && fast.next) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }
  prev.next = null;
  // reverse slow
  let res = null;
  while (slow) {
    let rem = slow.next;
    slow.next = res;
    res = slow;
    slow = rem;
  }
  // linked together
  const dummyHead = new ListNode(0);
  let cursor = dummyHead;
  fast = head;
  while (fast && res) {
    let newFast = fast.next;
    let newRes = res.next;
    cursor.next = fast;
    cursor.next.next = res;
    cursor = cursor.next.next;
    fast = newFast;
    res = newRes;
  }
  return dummyHead.next;
};

console.log(printLinkedList(reorderList(buildLinkedList([1, 2, 3, 4]))));
// [1,4,2,3]

console.log(printLinkedList(reorderList(buildLinkedList([1, 2, 3, 4, 5]))));
// [1,5,2,4,3]
