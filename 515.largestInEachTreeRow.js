const treeUtil = require('./tree.util');
const { TreeNode, buildTree, printTree } = treeUtil;

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function(root) {
  const ret = [];
  const helper = (root, depth) => {
    if (root) {
      ret[depth] = ret[depth] === undefined ? root.val : ret[depth];
      if (root.val > ret[depth]) ret[depth] = root.val;
      helper(root.left, depth + 1);
      helper(root.right, depth + 1);
    }
  };

  helper(root, 0);
  return ret;
};

console.log(largestValues(buildTree([1, 3, 2, 5, 3, null, 9])));
// [1, 3, 9]
