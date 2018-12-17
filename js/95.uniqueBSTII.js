const treeUtil = require('./tree.util');
const { TreeNode, buildTree, printTree } = treeUtil;

/**
 * @param {number} n
 * @return {TreeNode[]}
 */

// const copyTree = root => {
//   if (root) {
//     let ret = new TreeNode(root.val);
//     ret.left = copyTree(root.left);
//     ret.right = copyTree(root.right);
//     return ret;
//   }
//   return null;
// };

var generateTrees = function(n) {
  if (n === 0) return [];
  const arr = new Array(n).fill(0).map((_, i) => i + 1);

  const buildBSTFromRange = (from, to) => {
    if (from === to) {
      return [null];
    } else if (to - from === 1) {
      return [new TreeNode(arr[from])];
    }
    let ret = [];
    for (let i = from; i < to; i++) {
      const leftTrees = buildBSTFromRange(from, i);
      const rightTrees = buildBSTFromRange(i + 1, to);
      // console.log('enter', i, leftTrees, rightTrees);
      for (let j = 0; j < leftTrees.length; j++) {
        for (let k = 0; k < rightTrees.length; k++) {
          const root = new TreeNode(arr[i]);
          root.left = leftTrees[j];
          root.right = rightTrees[k];
          // console.log('push', root);
          ret.push(root);
        }
      }
    }
    return ret;
  };

  return buildBSTFromRange(0, n);
};

// best sol from web
// it use cache!

// var generateTrees = function(n) {
//   if (n === 0) return [];
//   return gen(1, n);
// };
// const dp = {};
// function gen(start, end) {
//   if (start > end) {
//     return [null];
//   } else if (start === end) {
//     return [new TreeNode(start)];
//   } else if (dp[start] && dp[start][end]) {
//     return dp[start][end];
//   } else {
//     const result = [];
//     for (let i = start; i <= end; i++) {
//       const lefts = gen(start, i - 1);
//       const rights = gen(i + 1, end);
//       lefts.forEach(l => {
//         rights.forEach(r => {
//           const n = new TreeNode(i);
//           n.left = l;
//           n.right = r;
//           result.push(n);
//         });
//       });
//     }
//     if (!dp[start]) dp[start] = {};
//     dp[start][end] = result;
//     return result;
//   }
// }

// console.log(generateTrees(1).map(d => printTree(d)));
// // [[1]]

// console.log(generateTrees(2).map(d => printTree(d)));
// // [[1, null, 2] [2, 1]]

console.log(generateTrees(3).map(d => printTree(d)));
// [
//   [1, null, 2, null, 3],
//   [1, null, 3, 2],
//   [2, 1, 3],
//   [3, 1, null, null, 2],
//   [3, 2, null, 1]
// ];
