const treeUtil = require('./tree.util');
const { TreeNode, buildTree, printTree } = treeUtil;

/**
 * @param {TreeNode} root
 * @return {number}
 */
// 108ms
var getMinimumDifference = function(root) {
  let res = Infinity;
  let prev = -Infinity;

  const traverse = root => {
    if (root) {
      traverse(root.left);
      res = Math.min(res, root.val - prev);
      prev = root.val;
      traverse(root.right);
    }
  };

  traverse(root);
  return res;
};

console.log(getMinimumDifference(buildTree([1, null, 2])));
// 1

console.log(getMinimumDifference(buildTree([1, null, 3, 2])));
// 1

console.log(getMinimumDifference(buildTree([5, 4, 7])));
// 1

console.log(getMinimumDifference(buildTree([1, null, 5, 3])));
// 2

console.log(
  getMinimumDifference(buildTree([236, 104, 701, null, 227, null, 911]))
);
// 9

console.log(
  getMinimumDifference(buildTree([543, 384, 652, null, 445, null, 699]))
);
// 47
