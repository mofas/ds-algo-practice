const treeUtil = require('./tree.util');
const { TreeNode, buildTree, printTree } = treeUtil;

/**
 * @param {TreeNode} root
 * @return {number}
 */
var findBottomLeftValue = function(root) {
  let maxDep = 0;
  let maxLeft = 0;
  let ret = root.val;

  const helper = (root, dep, left) => {
    if (root) {
      // console.log(root.val, dep, left);
      if (dep > maxDep) {
        maxDep = dep;
        maxLeft = left;
        ret = root.val;
      } else if (dep === maxDep) {
        if (left > maxLeft) {
          maxLeft = left;
          ret = root.val;
        }
      }
      helper(root.left, dep + 1, left + 1);
      helper(root.right, dep + 1, left);
    }
  };

  helper(root, 0, 0);

  return ret;
};

console.log(findBottomLeftValue(buildTree([2, 1, 3])));
// 1

console.log(findBottomLeftValue(buildTree([1, 2, 3, 4, 5, 6, null, null, 7])));
// 7
