const treeUtil = require('./tree.util');
const { TreeNode, buildTree, printTree } = treeUtil;

/**
 * @param {TreeNode} root
 * @return {number}
 */
var widthOfBinaryTree = function(root) {
  let maxDepth = 0;
  let hash = {};

  const helper = (root, depth, order) => {
    if (root) {
      if (depth > maxDepth) maxDepth = depth;
      hash[depth] = hash[depth] || [];
      hash[depth].push(order);
      if (root.left || root.right) {
        helper(root.left, depth + 1, order * 2);
        helper(root.right, depth + 1, order * 2 + 1);
      }
    }
  };
  helper(root, 0, 0);

  let maxDiff = 0;
  for (let i = 0; i <= maxDepth; i++) {
    if (hash[i][hash[i].length - 1] - hash[i][0] > maxDiff) {
      maxDiff = hash[i][hash[i].length - 1] - hash[i][0];
    }
  }

  // console.log(hash);

  return maxDiff + 1;
};

// console.log(
//   widthOfBinaryTree(
//     buildTree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])
//   )
// );
// 8

console.log(widthOfBinaryTree(buildTree([2, 3, null, 1])));
// 1

console.log(widthOfBinaryTree(buildTree([1, 3, null, 5, 3])));
// 2

console.log(widthOfBinaryTree(buildTree([1, 3, 2, 5])));
// 2

console.log(widthOfBinaryTree(buildTree([2, 1, 4, 3, null, 5])));
// 3

console.log(widthOfBinaryTree(buildTree([1, 3, 2, 5, 3, null, 9])));
// 4

console.log(
  widthOfBinaryTree(buildTree([1, 3, 2, 5, null, null, 9, 6, null, null, 7]))
);
// 8

console.log(
  widthOfBinaryTree(
    buildTree([
      37,
      -34,
      -48,
      null,
      -100,
      -100,
      48,
      null,
      null,
      null,
      null,
      -54,
      null,
      -71,
      -22,
      null,
      null,
      null,
      8
    ])
  )
);
// 3
