const treeUtil = require('./tree.util');
const { TreeNode, buildTree, printTree } = treeUtil;

/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {TreeNode}
 */
var trimBST = function(root, L, R) {
  let ret = null;
  if (root) {
    let left = trimBST(root.left, L, R);
    let right = trimBST(root.right, L, R);
    if (root.val >= L && root.val <= R) {
      ret = root;
      ret.left = left;
      ret.right = right;
    } else {
      if (left) {
        ret = left;
      } else if (right) {
        ret = right;
      }
    }
  }
  return ret;
};

console.log(printTree(trimBST(buildTree([1, 0, 2]), 1, 2)));
// [1, null, 2]

console.log(
  printTree(
    trimBST(buildTree([3, 0, 4, null, 2, null, null, null, null, 1]), 1, 3)
  )
);

// [3, 2, null, 1]
