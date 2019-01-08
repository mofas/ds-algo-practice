const treeUtil = require('./tree.util');
const { TreeNode, buildTree, printTree } = treeUtil;

/**
 * @param {TreeNode} root
 * @return {number}
 */
// 80ms, beat 100%
var longestConsecutive = function(root) {
  let max = 0;

  const helper = (node, preVal, conseq) => {
    if (node) {
      let next = 1;
      if (node.val === preVal + 1) {
        next = conseq + 1;
      }
      helper(node.left, node.val, next);
      helper(node.right, node.val, next);
    }
    if (conseq > max) max = conseq;
  };

  helper(root, null, 0);
  return max;
};

console.log(
  longestConsecutive(buildTree([1, null, 3, 2, 4, null, null, null, 5]))
);
// 3

console.log(longestConsecutive(buildTree([1, 2, 3, 4, 5])));
// 2
