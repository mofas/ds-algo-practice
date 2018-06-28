const treeUtil = require('./tree.util');
const { TreeNode, buildTree, printTree } = treeUtil;

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function(root) {
  let sums = [];
  let nodes = [];
  const helper = (tree, i) => {
    if (tree) {
      nodes[i] = nodes[i] ? nodes[i] + 1 : 1;
      sums[i] = sums[i] ? sums[i] + tree.val : tree.val;
      helper(tree.left, i + 1);
      helper(tree.right, i + 1);
    }
  };

  helper(root, 0);

  return sums.map((d, i) => {
    return d / nodes[i];
  });
};

console.log(averageOfLevels(buildTree([3, 9, 20, 15, 7])));
// [3, 14.5, 11]
