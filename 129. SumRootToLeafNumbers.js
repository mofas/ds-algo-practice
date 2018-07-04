const treeUtil = require('./tree.util');
const { TreeNode, buildTree, printTree } = treeUtil;

/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function(root) {
  let ret = 0;
  const helper = (root, parents) => {
    if (root) {
      if (!root.left && !root.right) {
        ret += Number(parents + root.val);
      } else {
        helper(root.left, parents + root.val);
        helper(root.right, parents + root.val);
      }
    }
  };

  helper(root, '');
  return ret;
};

console.log(sumNumbers(buildTree([1, 2, 3])));
// 25

console.log(sumNumbers(buildTree([4, 9, 0, 5, 1])));
// 1026
