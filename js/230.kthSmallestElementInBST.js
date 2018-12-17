const treeUtil = require('./tree.util');
const { TreeNode, buildTree, printTree } = treeUtil;

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
  let c = 0;
  let ret = null;
  const dfs = root => {
    if (root) {
      dfs(root.left);
      c++;
      if (c === k) ret = root.val;
      dfs(root.right);
    }
  };

  dfs(root);

  return ret;
};

console.log(kthSmallest(buildTree([3, 1, 4, null, 2]), 1));
// 1

console.log(kthSmallest(buildTree([5, 3, 6, 2, 4, null, null, 1]), 3));
// 3

console.log(kthSmallest(buildTree([5, 3, 6, 2, 4, null, null, 1]), 4));
// 4

console.log(kthSmallest(buildTree([5, 3, 6, 2, 4, null, null, 1]), 6));
// 6
