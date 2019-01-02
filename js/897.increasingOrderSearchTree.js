const treeUtil = require('./tree.util');
const { TreeNode, buildTree, printTree } = treeUtil;

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
// 140ms
var increasingBST = function(root) {
  const dummyHead = new TreeNode(0);
  let cursor = dummyHead;
  const helper = root => {
    if (root) {
      helper(root.left);
      cursor.right = root;
      root.left = null;
      cursor = cursor.right;
      helper(root.right);
    }
  };
  helper(root);
  return dummyHead.right;
};

// best sol
// 132ms
var increasingBST = function(root) {
  return helper(root, null);
  function helper(root, tail) {
    if (!root) {
      return tail;
    } else {
      let result = helper(root.left, root);
      root.left = null;
      root.right = helper(root.right, tail);
      return result;
    }
  }
};

console.log(printTree(increasingBST(buildTree([1, 2, 3]))));
// [1, null, 2, null, null, null, 3]

console.log(
  printTree(
    increasingBST(
      buildTree([5, 3, 6, 2, 4, null, 8, 1, null, null, null, 7, 9])
    )
  )
);
// [1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]
