const treeUtil = require('./tree.util');
const { TreeNode, buildTree, printTree } = treeUtil;

const printTreeByLayer = root => {
  let print = `${root.val}`;
  let nextNode = root.next;
  while (nextNode) {
    print = `${print} ${nextNode.val}`;
    nextNode = nextNode.next;
  }
  console.log(print);
  if (root.left) {
    printTreeByLayer(root.left);
  }
};

const connectBetweenTree = (left, right) => {
  if (left.right && right.left) {
    left.right.next = right.left;
    connectBetweenTree(left.right, right.left);
  }
};

var connect = function(root) {
  if (root && root.left && root.right) {
    root.left.next = root.right;
    connect(root.left);
    connect(root.right);
    connectBetweenTree(root.left, root.right);
  }
};

const tree1 = buildTree([1, 2, 3, 4, 5, 6, 7]);

const tree2 = buildTree([-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);

connect(tree1);
printTreeByLayer(tree1);

connect(tree2);
printTreeByLayer(tree2);
