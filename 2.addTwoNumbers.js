/**
 * Definition for singly-linked list.
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

const createlinkedListByArr = arr => {
  let head = null;
  let temp;
  for (let i = arr.length - 1; i >= 0; i--) {
    temp = new ListNode(arr[i]);
    temp.next = head;
    head = temp;
  }

  return head;
};

// console.log(createlinkedListByArr([2, 4, 3]));

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let carry = 0;
  let head = null;
  let current = null;
  while (l1 || l2) {
    // console.log(l1, l2, head);
    let d1 = l1 ? l1.val : 0;
    let d2 = l2 ? l2.val : 0;
    let result = d1 + d2 + carry;
    carry = result >= 10 ? 1 : 0;
    result %= 10;
    const digitNode = new ListNode(result);
    if (head) {
      current.next = digitNode;
      current = digitNode;
    } else {
      head = digitNode;
      current = digitNode;
    }
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  if (carry === 1) {
    const digitNode = new ListNode(1);
    current.next = digitNode;
    current = digitNode;
  }

  return head;
};

console.log(
  addTwoNumbers(
    createlinkedListByArr([2, 4, 3]),
    createlinkedListByArr([5, 6, 4])
  )
);
// 7 -> 0 -> 8

console.log(
  addTwoNumbers(createlinkedListByArr([5]), createlinkedListByArr([5]))
);
// 0 -> 1

console.log(
  addTwoNumbers(createlinkedListByArr([1, 8]), createlinkedListByArr([0]))
);
// 1 -> 8
