const treeUtil = require('./tree.util');
const { TreeNode, buildTree, printTree } = treeUtil;

/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
  let sum = 0;

  const helper = (tree, isLeft) => {
    if (tree) {
      if (!tree.left && !tree.right && isLeft) {
        // console.log(tree);
        sum += tree.val;
      }
      helper(tree.left, true);
      helper(tree.right, false);
    }
  };

  helper(root, false);

  return sum;
};

console.log(sumOfLeftLeaves(buildTree([1])));
// 0

console.log(sumOfLeftLeaves(buildTree([3, 9, 20, null, null, 15, 7])));
// 24

console.log(
  sumOfLeftLeaves(buildTree([0, 2, 4, 1, null, 3, -1, 5, 1, null, 6, null, 8]))
);
// 5
