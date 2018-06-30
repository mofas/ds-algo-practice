const treeUtil = require('./tree.util');
const { TreeNode, buildTree, printTree } = treeUtil;

/**
 * @param {TreeNode} root
 * @return {number}
 */
var findSecondMinimumValue = function(root) {
  let min = Infinity;
  let second = Infinity;

  const helper = tree => {
    if (tree) {
      if (tree.val < min) {
        second = min;
        min = tree.val;
      } else if (tree.val > min && tree.val < second) {
        second = tree.val;
      }
      helper(tree.left);
      helper(tree.right);
    }
  };

  helper(root);

  return second === Infinity ? -1 : second;
};

// best sol from web
// var findSecondMinimumValue = function(root) {
//   const min = root.val;
//   let secondMin = Number.POSITIVE_INFINITY;
//   function traverse(node) {
//     if (!node) {
//       return;
//     }
//     const { right, left, val } = node;
//     if (val > min && val < secondMin) {
//       secondMin = val;
//     }
//     traverse(right);
//     traverse(left);
//   }
//   traverse(root);
//   return isFinite(secondMin) ? secondMin : -1;
// };

console.log(findSecondMinimumValue(buildTree([2, 2, 5, null, null, 5, 7])));
// 5

console.log(findSecondMinimumValue(buildTree([2, 2, 2])));
// -1
