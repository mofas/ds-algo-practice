const treeUtil = require('./tree.util');
const { TreeNode, buildTree, printTree } = treeUtil;

/**
 * @param {TreeNode} root
 * @param {number} v
 * @param {number} d
 * @return {TreeNode}
 */
var addOneRow = function(root, v, d) {
  const helper = (root, v, d, left) => {
    if (d > 1) {
      if (root) {
        root.left = helper(root.left, v, d - 1, true);
        root.right = helper(root.right, v, d - 1, false);
        return root;
      }
      return null;
    } else {
      // console.log(root.val, left);
      let ret = new TreeNode(v);
      if (root) {
        if (left) {
          ret.left = root;
        } else {
          ret.right = root;
        }
      }
      return ret;
    }
  };

  root = helper(root, v, d, true);

  return root;
};

// best sol from web
// var addOneRow = function(root, v, d, branch = 'left') {
//   if (d === 1) {
//     const newRoot = new TreeNode(v);
//     newRoot[branch] = root;
//     return newRoot;
//   }

//   if (!root) return null;

//   root.left = addOneRow(root.left, v, d - 1, 'left');
//   root.right = addOneRow(root.right, v, d - 1, 'right');

//   return root;
// };

console.log(printTree(addOneRow(buildTree([4, 2, 6, 3, 1, 5]), 1, 2)));
// [4, 1, 1, 2, null, null, 6, 3, 1, 5];

console.log(printTree(addOneRow(buildTree([4, 2, null, 3, 1]), 1, 3)));
// [4, 2, null, 1, 1, 3, null, null, 1];

console.log(printTree(addOneRow(buildTree([4, 2, 6, 3, 1, 5]), 1, 1)));
// [1, 4, null, 2, 6, 3, 1, 5];
