const treeUtil = require('./tree.util');
const { TreeNode, buildTree, printTree } = treeUtil;

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
  let ret = [];
  let rightIdx = [];

  const helper = (root, depth, right) => {
    if (root) {
      rightIdx[depth] = rightIdx[depth] || -1;
      if (right > rightIdx[depth]) {
        ret[depth] = root.val;
        rightIdx[depth] = right;
      }
      helper(root.left, depth + 1, right * 2);
      helper(root.right, depth + 1, right * 2 + 1);
    }
  };
  helper(root, 0, 0);
  return ret;
};

console.log(rightSideView(buildTree([1, 2, 3, null, 5, null, 4])));
// [1, 3, 4]

console.log(rightSideView(buildTree([1, 2, null, 5, null, 4])));
// [1, 2, 5 , 4]

console.log(rightSideView(buildTree([1, 2, 3, 4])));
// [1, 3, 4]

console.log(rightSideView(buildTree([1, 2, 3, 4, null, null, 5])));
// [1, 3, 5]

console.log(rightSideView(buildTree([1, 2, 3, null, 5, 6])));
// [1, 3, 6]
