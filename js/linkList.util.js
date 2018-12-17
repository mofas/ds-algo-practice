// Definition for singly-linked list.
function ListNode(val) {
  this.val = val;
  this.next = null;
}

const buildLinkedList = arr => {
  let pseudoHead = new ListNode(null);
  let current = pseudoHead;

  arr.forEach(d => {
    let node = new ListNode(d);
    current.next = node;
    current = node;
  });
  return pseudoHead.next;
};

const printLinkedList = node => {
  let ret = [];
  let next = node;
  while (next) {
    ret.push(next.val);
    next = next.next;
  }
  return ret;
};

// console.log(buildLinkedList([1, 2, 3]));
// console.log(printLinkedList(buildLinkedList([1, 2, 3])));

module.exports = {
  ListNode,
  buildLinkedList,
  printLinkedList
};
