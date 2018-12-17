const treeUtil = require('./tree.util');
const { TreeNode, buildTree, printTree } = treeUtil;

// we can improve performance by memorizing inTree
var lowestCommonAncestor = function(root, p, q) {
  if (root == null || root === p || root === q) {
    return root;
  }
  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);
  if (left && right) return root;
  if (!left && right) return right;
  return left;
};

const tree1 = buildTree([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]);

console.log(lowestCommonAncestor(tree1, tree1.left, tree1.right).val);
// 3

console.log(
  lowestCommonAncestor(tree1, tree1.left, tree1.left.right.right).val
);
// 5

const tree2 = buildTree([
  37,
  -34,
  -48,
  null,
  -100,
  -100,
  48,
  null,
  null,
  null,
  null,
  -54,
  null,
  -71,
  -22,
  null,
  null,
  null,
  8
]);

console.log(
  lowestCommonAncestor(tree2, tree2.left.right, tree2.right.left).val
);
// 37
