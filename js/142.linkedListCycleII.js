const linkListUtil = require('./linkList.util');
const { buildLinkedList, printLinkedList } = linkListUtil;

// brute force
// 72ms
var detectCycle = function(head) {
  let set = new Set();
  let cursor = head;
  while (cursor && cursor.next) {
    if (set.has(cursor)) {
      return cursor;
    }
    set.add(cursor);
    cursor = cursor.next;
  }
  return null;
};

// best sol
// 60ms
var detectCycle = function(head) {
  if (head === null || head.next === null) return null;
  let slow = head,
    fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) break;
  }
  if (slow !== fast) return null;
  fast = head;
  while (fast !== slow) {
    slow = slow.next;
    fast = fast.next;
  }
  return fast;
};

const l1 = buildLinkedList([3, 2, 0, -4]);
l1.next.next.next.next = l1.next;
console.log(detectCycle(l1));
// 2

const l2 = buildLinkedList([1, 2]);
l2.next.next = l2;
console.log(detectCycle(l2));
// 1

const l3 = buildLinkedList([1]);
console.log(detectCycle(l3));
// false
