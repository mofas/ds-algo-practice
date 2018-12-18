const linkListUtil = require('./linkList.util');
const { buildLinkedList, printLinkedList } = linkListUtil;

//84ms
var getIntersectionNode = function(headA, headB) {
  // cheating: using sideEffect
  let cursor = headA;
  while (cursor) {
    cursor.checked = 1;
    cursor = cursor.next;
  }
  cursor = headB;
  while (cursor) {
    if (cursor.checked) return cursor;
    cursor = cursor.next;
  }
  return null;
};

// best sol
// 80ms
var getIntersectionNode = function(headA, headB) {
  var a = headA,
    b = headB;
  while (a != b) {
    a = a ? a.next : headB; // move a to head of b if at end
    b = b ? b.next : headA; // move b to head of a if at end
  }
  return a;
};

const a1 = buildLinkedList([4, 1]);
const b1 = buildLinkedList([5, 0, 1]);
const c1 = buildLinkedList([8, 4, 5]);
a1.next.next = c1;
b1.next.next.next = c1;
console.log(getIntersectionNode(a1, b1));
// 8

const a2 = buildLinkedList([0, 9, 1]);
const b2 = buildLinkedList([3]);
const c2 = buildLinkedList([2, 4]);
a2.next.next.next = c2;
b2.next = c2;
console.log(getIntersectionNode(a2, b2));
// 2

const a3 = buildLinkedList([2, 6, 4]);
const b3 = buildLinkedList([1, 5]);
console.log(getIntersectionNode(a3, b3));
// null
