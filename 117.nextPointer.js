const treeUtil = require('./tree.util');
const { TreeNode, buildTree, printTree } = treeUtil;

const printTreeByLayer = root => {
  let print = `${root.val}`;
  let nextNode = root.next;
  while (nextNode) {
    print = `${print} ${nextNode.val}`;
    nextNode = nextNode.next;
  }
  console.log(print + ' null');
  if (root.left) {
    printTreeByLayer(root.left);
  }
};

var connect = function(root) {
  let currentHead = root;
  while (currentHead) {
    let tempChildren = new TreeNode(-1);
    let currentChildren = tempChildren;
    while (currentHead) {
      if (currentHead.left) {
        tempChildren.next = currentHead.left;
        tempChildren = currentHead.left;
      }
      if (currentHead.right) {
        tempChildren.next = currentHead.right;
        tempChildren = currentHead.right;
      }
      currentHead = currentHead.next;
    }
    currentHead = currentChildren.next;
  }
};

const tree1 = buildTree([1, 2, 3, 4, 5, null, 7]);
const tree2 = buildTree([1, 2, 3, 4, null, null, 5]);

connect(tree1);
printTreeByLayer(tree1);

connect(tree2);
printTreeByLayer(tree2);
