const treeUtil = require('./tree.util');
const { TreeNode, buildTree, printTree } = treeUtil;

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  let ret = [];
  const helper = (tree, d) => {
    if (tree) {
      ret[d] = ret[d] || [];
      ret[d].push(tree.val);
      helper(tree.left, d + 1);
      helper(tree.right, d + 1);
    }
  };

  helper(root, 0);

  return ret.reverse();
};

console.log(levelOrderBottom(buildTree([3, 9, 20, null, null, 15, 7])));
// [[15, 7], [9, 20], [3]];
