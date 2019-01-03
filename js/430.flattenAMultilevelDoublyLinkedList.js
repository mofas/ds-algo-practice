function Node(val, prev, next, child) {
  this.val = val;
  this.prev = prev;
  this.next = next;
  this.child = child;
}

/**
 * @param {Node} head
 * @return {Node}
 */

// 1152ms
var flatten = function(head) {
  const flatChild = (node, tail) => {
    if (!node) return tail;
    if (node.next) {
      tail = flatChild(node.next, tail);
    }
    if (node.child) {
      node.next = flatChild(node.child, tail);
    } else {
      node.next = tail;
    }

    node.child = null;
    return node;
  };

  const rebuildPrev = (node, prev) => {
    if (node) {
      node.prev = prev;
      rebuildPrev(node.next, node);
    }
  };

  flatChild(head, null);
  rebuildPrev(head, null);
  return head;
};

// 1108ms
var flatten = function(head) {
  const handle = (node, next = null) => {
    if (!node) return null;
    handle(node.next, next);
    const child = handle(node.child, node.next);
    if (!node.next && next) {
      node.next = next;
      next.prev = node;
    }
    if (child) {
      node.next = child;
      node.child = null;
      child.prev = node;
    }
    return node;
  };
  return handle(head);
};

// 1 - 2 - 3 - 4
//     - 5 - 6
//     - 7
const node1 = new Node(1, null, null, null);
const node2 = new Node(2, null, null, null);
const node3 = new Node(3, null, null, null);
const node4 = new Node(4, null, null, null);
const node5 = new Node(5, null, null, null);
const node6 = new Node(6, null, null, null);
const node7 = new Node(7, null, null, null);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node5.next = node6;

node2.prev = node1;
node3.prev = node2;
node4.prev = node3;
node6.prev = node5;

node2.child = node5;
node5.child = node7;

const ret = flatten(node1);
let cursor = ret;
while (cursor) {
  if (cursor.prev) {
    console.log(cursor.val, cursor.prev.val);
  } else {
    console.log(cursor.val, null);
  }
  console.log(cursor.child);
  cursor = cursor.next;
}
