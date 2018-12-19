const linkListUtil = require('./linkList.util');
const { buildLinkedList, printLinkedList, ListNode } = linkListUtil;

// 64ms
var deleteDuplicates = function(head) {
  if (!head || !head.next) return head;
  let dummyHead = new ListNode(0);
  let fast = head;
  let slow = dummyHead;
  let nextNode = null;
  while (fast) {
    let last = fast;
    let nextNode = fast;
    while (nextNode && fast.val === nextNode.val) {
      last = nextNode;
      nextNode = nextNode.next;
    }
    // console.log('=====', fast.val, last.val, nextNode, slow);
    if (fast === last) {
      slow.next = fast;
      slow = slow.next;
    }
    fast = nextNode;
  }
  slow.next = null;
  return dummyHead.next;
};

console.log(
  printLinkedList(deleteDuplicates(buildLinkedList([1, 2, 3, 3, 4, 4, 5])))
);
// [1,2,5]

console.log(
  printLinkedList(deleteDuplicates(buildLinkedList([1, 1, 1, 1, 2, 3])))
);
// [2,3]

console.log(printLinkedList(deleteDuplicates(buildLinkedList([1, 2, 2]))));
// [1,2,2]
