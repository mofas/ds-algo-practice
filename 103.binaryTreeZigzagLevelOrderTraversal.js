const treeUtil = require('./tree.util');
const { TreeNode, buildTree, printTree } = treeUtil;

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
  const layer = [];
  const helper = (root, depth) => {
    if (root) {
      layer[depth] = layer[depth] || [];
      layer[depth].push(root.val);
      helper(root.left, depth + 1);
      helper(root.right, depth + 1);
    }
  };
  helper(root, 0);
  // console.log(layer);
  let ret = [];
  for (let i = 0; i < layer.length; i++) {
    if (i % 2 === 0) {
      ret.push(layer[i]);
    } else {
      ret.push(layer[i].reverse());
    }
  }

  return ret;
};

console.log(zigzagLevelOrder(buildTree([3, 9, 20, null, null, 15, 7])));
// [[3], [20, 9], [15, 7]];
