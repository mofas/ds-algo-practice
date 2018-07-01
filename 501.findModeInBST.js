const treeUtil = require('./tree.util');
const { TreeNode, buildBST, printTree } = treeUtil;

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function(root) {
  let hash = {};
  let maxCount = 0;
  const helper = root => {
    if (root) {
      hash[root.val] = hash[root.val] || 0;
      hash[root.val]++;
      if (hash[root.val] > maxCount) maxCount = hash[root.val];
      helper(root.left);
      helper(root.right);
    }
  };

  helper(root);
  // console.log(hash, maxCount);
  return Object.keys(hash).reduce((acc, d) => {
    if (hash[d] === maxCount) acc.push(Number(d));
    return acc;
  }, []);
};

// best sol from web
// var findMode = function(root) {
//   var prev = null;
//   var count = 1;
//   var max = 0;
//   var result = [];

//   function travel(node) {
//     if (!node) return;
//     travel(node.left);

//     if (prev != null) {
//       if (prev == node.val) {
//         count++;
//       } else {
//         count = 1;
//       }
//     }
//     if (count > max) {
//       result = [];
//       result.push(node.val);
//       max = count;
//     } else if (count == max) {
//       result.push(node.val);
//     }
//     prev = node.val;
//     travel(node.right);
//   }

//   travel(root);
//   return result;
// };

console.log(findMode(buildBST([1, null, 2, 2])));
// [2]

console.log(findMode(buildBST([1, 1, 2, 2])));
// [1, 2]

console.log(findMode(buildBST([3, 2, 4, 1, 3, 3, 4])));
// [3]

console.log(findMode(buildBST([3, 2, 4, 1, 3, 4, 4])));
// [4]

console.log(findMode(buildBST([3, 3, 4, 1, 3, 4, 4])));
// [3, 4]
