function RandomListNode(label) {
  this.label = label;
  this.next = this.random = null;
}

/**
 * @param {RandomListNode} head
 * @return {RandomListNode}
 */
// var copyRandomList = function(head) {
//   if (head) {
//     let newHead = new RandomListNode(head.label);
//     let currentCopy = newHead;
//     let current = head.next;
//     const hash = {};
//     const mapping = {};

//     if (head.random) {
//       hash[head.label] = head.random.label;
//     }
//     mapping[head.label] = currentCopy;

//     // copy
//     while (current) {
//       const newNode = new RandomListNode(current.label);
//       currentCopy.next = newNode;
//       currentCopy = newNode;
//       if (current.random) {
//         hash[current.label] = current.random.label;
//       }
//       mapping[current.label] = newNode;
//       current = current.next;
//     }
//     // console.log(hash, mapping);
//     //build random link
//     current = newHead;
//     while (current) {
//       if (hash[current.label]) {
//         current.random = mapping[hash[current.label]];
//       }
//       current = current.next;
//     }

//     return newHead;
//   }

//   return null;
// };

// this question is hard to test
// so I copy the answer from discussion
var copyRandomList = function(head) {
  let iter = head;
  let next = null;
  // copy node
  // oldA -> newA -> oldB -> newB ...
  while (iter) {
    next = iter.next;
    const copy = new RandomListNode(iter.label);
    iter.next = copy;
    copy.next = next;

    iter = next;
  }
  iter = head;
  // assign random pointer
  while (iter) {
    if (iter.random) {
      iter.next.random = iter.random.next;
    }
    iter = iter.next.next;
  }
  // restore original list
  iter = head;
  let pseudoHead = new RandomListNode(0);
  let copy = null;
  let copyIter = pseudoHead;
  while (iter) {
    next = iter.next.next;

    // extract copy
    copy = iter.next;
    copyIter.next = copy;
    copyIter = copy;

    // restore
    iter.next = next;
    iter = next;
  }
  return pseudoHead.next;
};

// the best sol from web
/**
 * @param {RandomListNode} head
 * @return {RandomListNode}
 */
/**
function copyList(head) {
  for (let p = head; p !== null; p = p.next.next) {
    const node = new RandomListNode(p.label);
    node.next = p.next;
    p.next = node;
  }
}

function copyRandomPointers(head) {
  for (let node = head; node !== null; node = node.next.next) {
    if (node.random !== null) {
      node.next.random = node.random.next;
    }
  }
}

function split(head) {
  let dummy = new RandomListNode();
  let tail = dummy;
  for (let node = head; node !== null; node = node.next) {
    tail.next = node.next;
    tail = tail.next;
    node.next = node.next.next;
  }
  return dummy.next;
}

const copyRandomList = function(head) {
  copyList(head);
  copyRandomPointers(head);
  return split(head);
};

*/

const printLinkedList = head => {
  if (head) {
    return `${head.label}[${
      head.random ? head.random.label : ''
    }]->${printLinkedList(head.next)}`;
  }
  return '';
};

const a = new RandomListNode('a');
const b = new RandomListNode('b');
const c = new RandomListNode('c');
a.next = b;
b.next = c;
b.random = b;
c.random = a;

console.log(printLinkedList(a));

let newCopy = copyRandomList(a);
// console.log(newCopy);
console.log(printLinkedList(newCopy));

newCopy = copyRandomList();
console.log(printLinkedList(newCopy));

const a2 = new RandomListNode('a');
a2.random = a2;

newCopy = copyRandomList(a2);
console.log(printLinkedList(a2));
console.log(printLinkedList(newCopy));
