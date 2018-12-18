const linkListUtil = require('./linkList.util');
const { buildLinkedList, printLinkedList } = linkListUtil;

// 264ms
var numComponents = function(head, G) {
  let gSet = new Set(G);
  let c = 0;
  let current = 0;
  let cursor = head;
  while (cursor) {
    if (gSet.has(cursor.val)) {
      current++;
    } else {
      if (current > 0) {
        c++;
        current = 0;
      }
    }
    cursor = cursor.next;
  }
  if (current > 0) c++;
  return c;
};

console.log(numComponents(buildLinkedList([0]), [0]));
// 1

console.log(numComponents(buildLinkedList([0, 1, 2, 3]), [0, 1, 3]));
// 2

console.log(numComponents(buildLinkedList([0, 1, 2, 3, 4]), [0, 3, 1, 4]));
// 2

console.log(numComponents(buildLinkedList([0, 1, 2]), [0, 2]));
// 2
