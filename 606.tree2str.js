const treeUtil = require('./tree.util');
const { TreeNode, buildTree, printTree } = treeUtil;

/**
 * @param {TreeNode} t
 * @return {string}
 */
var tree2str = function(t) {
  let ret = '';

  const helper = t => {
    if (t) {
      ret += t.val;
      if (t.left || t.right) {
        ret += '(';
        helper(t.left);
        ret += ')';
      }
      if (t.right) {
        ret += '(';
        helper(t.right);
        ret += ')';
      }
    }
  };

  helper(t);
  return ret;
};

const tree1 = buildTree([1, 2, 3, 4]);
const tree2 = buildTree([1, 2, 3, null, 4]);

console.log(tree2str(tree1)); // 1(2(4))(3)
console.log(tree2str(tree2)); // 1(2()(4))(3)
