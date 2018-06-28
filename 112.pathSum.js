const treeUtil = require('./tree.util');
const { TreeNode, buildTree, printTree } = treeUtil;

// handle null tree, 0
var hasPathSum = function(root, sum) {
  if (root === null) {
    return false;
  } else if (
    sum - root.val === 0 &&
    root.left === null &&
    root.right === null
  ) {
    return true;
  } else {
    return (
      hasPathSum(root.left, sum - root.val) ||
      hasPathSum(root.right, sum - root.val)
    );
  }
};

const tree1 = buildTree([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1]);
const tree2 = buildTree([1, 2]);
const tree3 = buildTree([-2, null, -3]);

console.log(hasPathSum(tree1, 22));
// true

console.log(hasPathSum(tree3, -5));
// true

console.log(hasPathSum(null, 0));
// false

console.log(hasPathSum(tree2, 1));
// false
