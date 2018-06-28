const treeUtil = require('./tree.util');
const { TreeNode, buildTree, printTree } = treeUtil;

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
  if (!root) return null;

  const swap = (l, r) => {
    if (r) {
      let [lb, rb] = swap(r.left, r.right);
      r.left = lb;
      r.right = rb;
    }
    if (l) {
      let [lb, rb] = swap(l.left, l.right);
      l.left = lb;
      l.right = rb;
    }
    return [r, l];
  };

  let [lb, rb] = swap(root.left, root.right);
  root.left = lb;
  root.right = rb;
  return root;
};

console.log(printTree(invertTree(buildTree([4, 2, 7, 1, 3, 6, 9]))));
// [4,7,2,9,6,3,1]

console.log(printTree(invertTree(buildTree([4, 2, 7, 1, 3, 6]))));
// [4,7,2,null,6,3,1]
