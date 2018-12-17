const linkListUtil = require('./linkList.util');
const { buildLinkedList, printLinkedList } = linkListUtil;

// 64ms
var hasCycle = function(head) {
  let first = head;
  let second = head;
  while (first && first.next) {
    first = first.next.next;
    second = second.next;
    if (first === second) return true;
  }
  return false;
};

const l1 = buildLinkedList([3, 2, 0, -4]);
l1.next.next.next.next = l1.next;
console.log(hasCycle(l1));
// true

const l2 = buildLinkedList([1, 2]);
l2.next.next = l2;
console.log(hasCycle(l2));
// true

const l3 = buildLinkedList([1]);
console.log(hasCycle(l3));
// false
