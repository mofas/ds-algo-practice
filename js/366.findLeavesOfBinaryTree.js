const treeUtil = require('./tree.util');
const { TreeNode, buildTree, printTree } = treeUtil;

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
// 52ms beat 100%
var findLeaves = function(root) {
  let ret = [];

  const helper = node => {
    if (node) {
      const deep = Math.max(helper(node.left), helper(node.right));
      ret[deep] = ret[deep] || [];
      ret[deep].push(node.val);
      return deep + 1;
    }
    return 0;
  };
  helper(root);
  return ret;
};

console.log(findLeaves(buildTree([1, 2, 3, 4, 5])));
// [[4, 5, 3], [2], [1]]
