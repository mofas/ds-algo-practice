const treeUtil = require('./tree.util');
const { TreeNode, buildTree, printTree } = treeUtil;

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  let min = Math.min(p.val, q.val);
  let max = Math.max(p.val, q.val);
  const helper = tree => {
    if (root.val > max) {
      return lowestCommonAncestor(root.left, p, q);
    } else if (root.val < min) {
      return lowestCommonAncestor(root.right, p, q);
    }
    return root;
  };
  return helper(root);
};

console.log(
  lowestCommonAncestor(
    buildTree([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]),
    new TreeNode(2),
    new TreeNode(8)
  ).val
);
// 6

console.log(
  lowestCommonAncestor(
    buildTree([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]),
    new TreeNode(2),
    new TreeNode(4)
  ).val
);
// 2

console.log(
  lowestCommonAncestor(buildTree([2, 1]), new TreeNode(2), new TreeNode(1)).val
);
// 2
