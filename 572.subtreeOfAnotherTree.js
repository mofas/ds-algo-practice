const treeUtil = require('./tree.util');
const { TreeNode, buildTree, printTree } = treeUtil;

/**
 * @param {TreeNode} s
 * @param {TreeNode} t
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

var isSubtree = function(s, t) {
  if (s) {
    if (s.val === t.val) {
      if (isSameTree(s, t)) {
        return true;
      }
    }
    return isSubtree(s.left, t) || isSubtree(s.right, t);
  }
  return false;
};

console.log(isSubtree(buildTree([3, 4, 5, 1, 2]), buildTree([4, 1, 2])));
// true

console.log(
  isSubtree(
    buildTree([3, 4, 5, 1, 2, null, null, null, null, 0]),
    buildTree([4, 1, 2])
  )
);
// false
