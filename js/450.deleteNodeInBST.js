const treeUtil = require('./tree.util');
const { TreeNode, buildTree, printTree } = treeUtil;

/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
  const popup = root => {
    let newRoot = root;
    const helper = root => {
      if (root) {
        if (root.left) {
          root.left = helper(root.left);
          return root;
        } else {
          newRoot = root;
          return root.right;
        }
      }
      return null;
    };
    const rb = helper(root);
    newRoot.right = rb;
    // console.log(newRoot);

    return newRoot;
  };

  const helper = root => {
    if (root) {
      let lb = helper(root.left);
      let rb = helper(root.right);
      if (root.val === key) {
        if (!lb) {
          return rb;
        } else if (!rb) {
          return lb;
        } else {
          let newNode = popup(rb);
          newNode.left = lb;
          return newNode;
        }
      } else {
        root.left = lb;
        root.right = rb;
        return root;
      }
    }
    return null;
  };
  return helper(root);
};

console.log(printTree(deleteNode(buildTree([5, 3, 6, 2, 4, null, 7]), 6)));
// [5, 3, 7, 2, 4]

console.log(printTree(deleteNode(buildTree([5, 3, 6, 2, 4, null, 7]), 2)));
// [ 5, 3, 6, null, 4, null, 7 ]

console.log(printTree(deleteNode(buildTree([5, 3, 6, 2, 4, null, 7]), 3)));
// [5,4,6,2,null,null,7] or [5,2,6,null,4,null,7]

console.log(printTree(deleteNode(buildTree([5, 3, 6, 2, 4, null, 7]), 5)));
// [6, 3, 7, 2, 4]

console.log(
  printTree(
    deleteNode(
      buildTree([2, 0, 33, null, 1, 25, 40, null, null, 11, 31, 34, 45]),
      33
    )
  )
);
// [2,0,34,null,1,25,40,null,null,11,31,null,45]
