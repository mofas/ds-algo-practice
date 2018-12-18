const linkListUtil = require('./linkList.util');
const { buildLinkedList, printLinkedList } = linkListUtil;

// 68ms
// it use O(n) space
var isPalindrome = function(head) {
  let cursor = head;
  let stack = [];
  while (cursor) {
    stack.push(cursor.val);
    cursor = cursor.next;
  }
  const stackLen = stack.length;
  const middle = stackLen / 2;
  for (let i = 0; i < stackLen; i++) {
    if (stack[i] !== stack[stackLen - i - 1]) return false;
  }
  return true;
};

// sol use O(1)
// Phase 1: Reverse the first half while finding the middle.
// Phase 2: Compare the reversed first half with the second half.

var isPalindrome = function(head) {
  let first = head;
  let second = head;
  let rev = null;
  while (first && first.next) {
    first = first.next.next;
    let temp = second;
    second = second.next;
    temp.next = rev;
    rev = temp;
  }
  // remove rev head
  if (first) {
    second = second.next;
  }
  while (rev && second && rev.val == second.val) {
    rev = rev.next;
    second = second.next;
  }
  return !rev;
};

const l1 = buildLinkedList([1, 2]);
console.log(isPalindrome(l1));
// flase

const l2 = buildLinkedList([1, 2, 2, 1]);
console.log(isPalindrome(l2));
// true

const l3 = buildLinkedList([1, 2, 2, 2, 1]);
console.log(isPalindrome(l3));
// true

const l4 = buildLinkedList([1, 2, 3, 4, 1]);
console.log(isPalindrome(l4));
// true
