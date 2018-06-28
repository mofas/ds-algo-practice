const treeUtil = require('./tree.util');
const { TreeNode, buildTree, printTree } = treeUtil;

var findTarget = function(root, k) {
  const hash = {};
  let success = false;
  const helper = tree => {
    if (success) return;

    if (tree) {
      if (hash[tree.val]) {
        success = true;
        return;
      }
      hash[k - tree.val] = true;
      helper(tree.left);
      helper(tree.right);
    }
  };
  helper(root);
  // console.log(hash);
  return success;
};

console.log(findTarget(buildTree([5, 3, 6, 2, 4, null, 7]), 9));
// true

console.log(findTarget(buildTree([5, 3, 6, 2, 4, null, 7]), 11));
// true

console.log(findTarget(buildTree([5, 3, 6, 2, 4, null, 7]), 4));
// false

console.log(findTarget(buildTree([5, 3, 6, 2, 4, null, 7]), 28));
// false
