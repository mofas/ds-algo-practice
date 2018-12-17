const treeUtil = require('./tree.util');
const { TreeNode, buildTree, printTree } = treeUtil;

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  const helper = (a, b) => {
    if (!a && !b) return true;
    else if (a && b && a.val === b.val) {
      return helper(a.left, b.left) && helper(a.right, b.right);
    }
    return false;
  };

  return helper(p, q);
};

console.log(isSameTree(buildTree([1, 2, 3]), buildTree([1, 2, 3])));
// true

console.log(isSameTree(buildTree([1, 2, 1]), buildTree([1, 1, 2])));
// false
