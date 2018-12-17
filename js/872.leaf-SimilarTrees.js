const treeUtil = require('./tree.util');
const { TreeNode, buildTree, printTree } = treeUtil;

/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
  const getLeave = root => {
    const res = [];
    const traverse = node => {
      if (node) {
        if (!node.left && !node.right) res.push(node.val);
        else {
          traverse(node.left);
          traverse(node.right);
        }
      }
    };
    traverse(root);
    // console.log('res', res);
    return res;
  };
  const leaves1 = getLeave(root1);
  const leaves2 = getLeave(root2);
  if (leaves1.length !== leaves2.length) return false;
  for (let i = 0; i < leaves1.length; i++) {
    if (leaves1[i] !== leaves2[i]) return false;
  }
  return true;
};

console.log(
  leafSimilar(
    buildTree([3, 5, 1, 6, 2, 9, 8, null, null, 7, 4]),
    buildTree([3, 5, 1, 6, 7, 4, 2, null, null, null, null, null, null, 9, 8])
  )
);
// true
