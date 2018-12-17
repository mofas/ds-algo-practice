const treeUtil = require('./tree.util');
const { TreeNode, buildTree, printTree } = treeUtil;

/**
 * @param {TreeNode} root
 * @return {number}
 */
var findTilt = function(root) {
  let tilt = 0;
  const helper = tree => {
    if (tree) {
      let lsum = helper(tree.left);
      let rsum = helper(tree.right);
      tilt += Math.abs(lsum - rsum);
      return tree.val + lsum + rsum;
    }
    return 0;
  };

  helper(root);

  return tilt;
};

console.log(findTilt(buildTree([])));
// 0

console.log(findTilt(buildTree([1, 2, 3])));
// 1

console.log(findTilt(buildTree([1, 2, 3, 4, null, 5])));
// 11 = 5 + 4 + (8-7)
