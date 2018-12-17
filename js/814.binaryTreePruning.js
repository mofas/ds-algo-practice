const treeUtil = require('./tree.util');
const { TreeNode, buildTree, printTree } = treeUtil;

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var pruneTree = function(root) {
  if (root) {
    let lb = pruneTree(root.left);
    let rb = pruneTree(root.right);
    if (lb || rb || root.val !== 0) {
      root.left = lb;
      root.right = rb;
      return root;
    }
  }
  return null;
};

console.log(printTree(pruneTree(buildTree([1, null, 0, 0, 1]))));
// [1,null,0,null,1]

console.log(printTree(pruneTree(buildTree([1, 0, 1, 0, 0, 0, 1]))));
// [1,null,1,null,1]

console.log(printTree(pruneTree(buildTree([1, 1, 0, 1, 1, 0, 1, 0]))));
// [1, 1, 0, 1, 1, null, 1];
