const treeUtil = require('./tree.util');
const { TreeNode, buildTree, printTree } = treeUtil;

/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  let ret = [];

  const helper = (tree, path) => {
    if (tree) {
      if (!tree.left && !tree.right) {
        ret.push(path + tree.val);
      } else {
        path += tree.val + '->';
        helper(tree.left, path);
        helper(tree.right, path);
      }
    }
  };

  helper(root, '');

  return ret;
};

console.log(binaryTreePaths(buildTree([1, 2, 3, null, 5])));
// [ '1->2->5', '1->3' ]
