const treeUtil = require('./tree.util');
const { TreeNode, printTree } = treeUtil;

const linkListUtil = require('./linkList.util');
const { ListNode, buildLinkedList } = linkListUtil;

/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
  const printLinkedList = node => {
    let ret = [];
    let next = node;
    while (next) {
      ret.push(next.val);
      next = next.next;
    }
    return ret;
  };

  const arr = printLinkedList(head);
  // console.log(arr);
  const buildBSTFromRange = (from, to) => {
    if (from === to) {
      return null;
    } else if (to - from === 1) {
      return new TreeNode(arr[from]);
    }
    const i = Math.floor((to - from) / 2) + from;
    // console.log(i, '-----');
    const leftTrees = buildBSTFromRange(from, i);
    const rightTrees = buildBSTFromRange(i + 1, to);
    const root = new TreeNode(arr[i]);
    root.left = leftTrees;
    root.right = rightTrees;
    return root;
  };

  return buildBSTFromRange(0, arr.length);
};

// best sol from web
// no extra O(n) space
// var sortedListToBST = function(head) {
//   if (head === null) {
//     return head;
//   } else if (head.next === null) {
//     return new TreeNode(head.val);
//   }

//   // Get mid node of linked list
//   let prev = null;
//   let slow = head;
//   let fast = head;
//   while (fast !== null && fast.next !== null) {
//     prev = slow;
//     slow = slow.next;
//     fast = fast.next.next;
//   }
//   // Separate left half list from right half
//   prev.next = null;

//   // Set mid node as root and recursively create subtrees
//   const root = new TreeNode(slow.val);
//   root.left = sortedListToBST(head);
//   root.right = sortedListToBST(slow.next);

//   return root;
// };

const ll = buildLinkedList([-10, -3, 0, 5, 9]);
console.log(printTree(sortedListToBST(ll)));
// [0, -3, 9, -10, null, 5];
