const treeUtil = require('./tree.util');
const { TreeNode, buildTree, printTree } = treeUtil;

/**
 * @param {TreeNode} root
 * @return {number}
 */

// very slow
var rob = function(root) {
  const helper = (root, robParent) => {
    if (root) {
      if (robParent) {
        return helper(root.left, false) + helper(root.right, false);
      } else {
        let robSum =
          helper(root.left, true) + helper(root.right, true) + root.val;
        let notRobSum = helper(root.left, false) + helper(root.right, false);
        return Math.max(robSum, notRobSum);
      }
    }
    return 0;
  };

  return helper(root, false);
};

// best sol from web
// the same mechanism
// but it return object to avoid double recursive call function call
// var rob = function(root) {
//   function robing(node) {
//     if (node === null) {
//       return { r: 0, n: 0 };
//     }
//     var rl = robing(node.left);
//     var rr = robing(node.right);
//     var r = rl.n + rr.n + node.val;
//     var n = rl.r + rr.r;
//     if (n > r) {
//       r = n;
//     }
//     return { r: r, n: n };
//   }
//   var v = robing(root);
//   if (v.r > v.n) {
//     return v.r;
//   } else {
//     return v.n;
//   }
// };

console.log(rob(buildTree([3, 2, 3, null, 3, null, 1])));
// 7

console.log(rob(buildTree([3, 4, 5, 1, 3, null, 1])));
// 9

console.log(rob(buildTree([4, 1, null, 2, null, 3])));
// 7

console.log(rob(buildTree([2, 1, 3, null, 4])));
// 7
