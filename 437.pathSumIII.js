const treeUtil = require('./tree.util');
const { TreeNode, buildTree, printTree } = treeUtil;

/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
var pathSum = function(root, sum) {
  let ret = 0;
  const helper = (tree, current, path) => {
    if (tree) {
      if (tree.val + current === sum) {
        console.log('find:', path + tree.val);
        ret++;
      }
      helper(tree.left, 0, '');
      helper(tree.right, 0, '');
      searchConser(tree.left, current + tree.val, path + tree.val + '->');
      searchConser(tree.right, current + tree.val, path + tree.val + '->');
    }
  };

  const searchConser = (tree, current, path) => {
    if (tree) {
      if (tree.val + current === sum) {
        console.log('find:', path + tree.val);
        ret++;
      }
      searchConser(tree.left, current + tree.val, path + tree.val + '->');
      searchConser(tree.right, current + tree.val, path + tree.val + '->');
    }
  };

  helper(root, 0, '');
  return ret;
};

// var pathSum = function(root, sum) {
//   let ret = 0;
//   const helper = (tree, current) => {
//     if (tree) {
//       if (tree.val + current === sum) {
//         ret++;
//       }
//       searchConser(tree.left, current + tree.val);
//       searchConser(tree.right, current + tree.val);
//       helper(tree.left, 0);
//       helper(tree.right, 0);
//     }
//   };

//   const searchConser = (tree, current) => {
//     if (tree) {
//       if (tree.val + current === sum) {
//         ret++;
//       }
//       searchConser(tree.left, current + tree.val);
//       searchConser(tree.right, current + tree.val);
//     }
//   };

//   helper(root, 0, '');
//   return ret;
// };

// best sol from web
var pathSum = function(root, sum) {
  return pathSumHelper(root, sum, 0, { 0: 1 });
};

function pathSumHelper(root, sum, total, hash) {
  let count = 0;
  if (root) {
    total += root.val;
    if (hash[total - sum]) count = hash[total - sum];
    hash[total] = hash[total] ? hash[total] + 1 : 1;
    count += pathSumHelper(root.left, sum, total, hash);
    count += pathSumHelper(root.right, sum, total, hash);
    hash[total]--;
  }
  return count;
}

console.log(pathSum(buildTree([10, 5, -3, null, null, null, 11]), 8));
// 1

console.log(pathSum(buildTree([10, 5, -3, 3, 2, null, 11, 3, -2, null, 1]), 8));
// 3

console.log(
  pathSum(buildTree([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1]), 22)
);
// 3

console.log(pathSum(buildTree([1, -2, -3, 1, 3, -2, null, -1]), -1));
// 4
