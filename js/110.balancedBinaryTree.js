const treeUtil = require('./tree.util');
const { TreeNode, buildTree, printTree } = treeUtil;

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
  let ret = true;
  const getHeight = tree => {
    if (tree) {
      let lh = getHeight(tree.left);
      let rh = getHeight(tree.right);
      if (Math.abs(lh - rh) > 1) {
        // console.log('tr', lh, rh, tree.val);
        ret = false;
        return 0;
      }
      return Math.max(lh, rh) + 1;
    }
    return 0;
  };

  getHeight(root);

  return ret;
};

console.log(isBalanced(buildTree([3, 9, 20, null, null, 15, 7])));
// true

console.log(isBalanced(buildTree([1, 2, 2, 3, 3, null, null, 4, 4])));
// false
