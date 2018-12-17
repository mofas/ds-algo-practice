const linkListUtil = require('./linkList.util');
const { buildLinkedList, printLinkedList } = linkListUtil;

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
  let front = head;
  let middle = head;
  while (front.next) {
    if (front.next.next) {
      front = front.next.next;
      middle = middle.next;
    } else {
      return middle.next;
    }
  }

  return middle;
};

const l1 = buildLinkedList([1, 2, 3, 4, 5]);
console.log(printLinkedList(middleNode(l1)));
// 345

const l2 = buildLinkedList([1, 2, 3, 4, 5, 6]);
console.log(printLinkedList(middleNode(l2)));
// 456
