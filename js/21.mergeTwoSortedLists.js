const linkListUtil = require('./linkList.util');
const { ListNode, buildLinkedList, printLinkedList } = linkListUtil;

//recursion
// 100ms
// var mergeTwoLists = function(l1, l2) {
//   if (l1 && l2) {
//     if (l1.val <= l2.val) {
//       l1.next = mergeTwoLists(l1.next, l2);
//       return l1;
//     } else {
//       l2.next = mergeTwoLists(l1, l2.next);
//       return l2;
//     }
//   } else if (l1) {
//     return l1;
//   } else {
//     return l2;
//   }
// };

//iteration
var mergeTwoLists = function(l1, l2) {
  let dummy = new ListNode(0);
  let ret = dummy;

  while (l1 || l2) {
    if (!(l1 && l2)) {
      dummy.next = l1 || l2;
      break;
    } else if (l1.val <= l2.val) {
      dummy.next = l1;
      l1 = l1.next;
    } else {
      dummy.next = l2;
      l2 = l2.next;
    }
    dummy = dummy.next;
  }
  return ret.next;
};

const l1 = buildLinkedList([1, 2, 4]);
const l2 = buildLinkedList([1, 3, 4]);
console.log(printLinkedList(mergeTwoLists(l1, l2)));
// 1,1,2,3,4,4
