const treeUtil = require('./tree.util');
const { TreeNode, buildTree, printTree } = treeUtil;

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function(root) {
  //
};

console.log(findMode(buildTree([1, null, 2, 2])));
// [2]

console.log(findMode(buildTree([1, 1, 2, 2])));
// [1, 2]

console.log(findMode(buildTree([3, 2, 4, 1, 3, 3, 4])));
// [3]

console.log(findMode(buildTree([3, 2, 4, 1, 3, 4, 4])));
// [3]

console.log(findMode(buildTree([3, 3, 4, 1, 3, 4, 4])));
// [3, 4]
