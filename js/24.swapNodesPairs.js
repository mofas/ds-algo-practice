const linkListUtil = require('./linkList.util');
const { buildLinkedList, printLinkedList, ListNode } = linkListUtil;

var swapPairs = function(head) {
  if (!head || !head.next) {
    return head;
  }

  let current = head;
  let newHead = new ListNode(0);
  let prev = newHead;
  while (current && current.next) {
    let node1 = current;
    let node2 = current.next;
    let newNext = current.next.next;
    prev.next = node2;
    node2.next = node1;
    node1.next = newNext;
    prev = node1;
    current = newNext;
  }

  return newHead.next;
};

console.log(printLinkedList(swapPairs(buildLinkedList([1, 2, 3, 4]))));
// [2,1,4,3]
