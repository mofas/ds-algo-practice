const linkListUtil = require('./linkList.util');
const { buildLinkedList, printLinkedList, ListNode } = linkListUtil;

// 132ms
var insertionSortList = function(head) {
  let dummy = new ListNode(0);
  let prev = dummy;
  let cursor = head;

  while (cursor) {
    let next = cursor.next;
    while (prev.next && prev.next.val < cursor.val) {
      prev = prev.next;
    }
    cursor.next = prev.next;
    prev.next = cursor;

    cursor = next;
    // rest
    prev = dummy;
  }
  return dummy.next;
};

// best sol
// 68ms
// var insertionSortList = function(head) {
//   if (head == null) return null;
//   var dummy = new ListNode(0);

//   var pre = dummy,
//     curr = head;
//   while (curr != null) {
//     var next = curr.next;
//     // this is the optimization!
//     if (pre.next == null || pre.next.val >= curr.val) {
//       pre = dummy;
//     }
//     while (pre.next != null && pre.next.val < curr.val) {
//       pre = pre.next;
//     }
//     curr.next = pre.next;
//     pre.next = curr;
//     curr = next;
//   }
//   return dummy.next;
// };

console.log(printLinkedList(insertionSortList(buildLinkedList([4, 2, 1, 3]))));
// [1,2,3,4]

console.log(
  printLinkedList(insertionSortList(buildLinkedList([-1, 5, 3, 4, 0])))
);

// [-1,0,3,4,5]
