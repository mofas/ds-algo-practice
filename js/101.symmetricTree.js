const treeUtil = require('./tree.util');
const { TreeNode, buildTree, printTree } = treeUtil;

const compareTwoSide = left => right => {
  if (left && right) {
    return (
      left.val === right.val &&
      compareTwoSide(left.left)(right.right) &&
      compareTwoSide(left.right)(right.left)
    );
  } else if (!left && !right) {
    return true;
  }

  return false;
};

const isSymmetric = function(root) {
  return root ? compareTwoSide(root.left)(root.right) : true;
};

const tree1 = buildTree([1, 2, 2, 3, 4, 4, 3]);
const tree2 = buildTree([1, 2, 2, null, 3, null, 3]);

console.log(isSymmetric(tree1));
// true

console.log(isSymmetric(tree2));
// false
