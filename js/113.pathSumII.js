const treeUtil = require('./tree.util');
const { TreeNode, buildTree, printTree } = treeUtil;

/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
  const ret = [];
  const helper = (root, parents, total) => {
    if (root) {
      parents = parents.concat([root.val]);
      if (!root.left && !root.right && root.val + total === sum) {
        ret.push(parents);
      } else {
        helper(root.left, parents, root.val + total);
        helper(root.right, parents, root.val + total);
      }
    }
  };
  helper(root, [], 0);
  return ret;
};

// // best sol from web
// var pathSum = function(root, sum) {
//   return helper(root, sum, [], []);
// };

// /**
//  * A helper function that does the search
//  * @param {TreeNode} root
//  * @param {number} sum
//  * @param {number[]} solution - one path from root to a leaf
//  * @param {number[]} result - the final result
//  * @return {number[]} result
//  */
// function helper(root, sum, solution, result) {
//   if (!root) {
//     // sanity check
//     return result;
//   }

//   solution.push(root.val); // add current node's value to the solution

//   if (!root.left && !root.right && root.val === sum) {
//     result.push(solution.slice()); // found a solution
//   }

//   helper(root.left, sum - root.val, solution, result); // try left subtree
//   helper(root.right, sum - root.val, solution, result); // try right subtree

//   solution.pop(); // backtracking

//   return result;
// }

console.log(
  pathSum(buildTree([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1]), 22)
);
// [[5, 4, 11, 2], [5, 8, 4, 5]];
