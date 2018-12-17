const treeUtil = require('./tree.util');
const { TreeNode, buildTree, printTree } = treeUtil;
/**
 * @param {TreeNode} root
 * @return {number}
 */
// brute force
// too slow
// var countNodes = function(root) {
//   if (root) {
//     return 1 + countNodes(root.left) + countNodes(root.right);
//   }
//   return 0;
// };

// maybe fast a little bit
var countNodes = function(root) {
  let ret = 0;
  const queue = [root];
  while (queue.length > 0) {
    let node = queue.pop();
    if (node) {
      ret++;
      queue.push(node.left);
      queue.push(node.right);
    }
  }
  return ret;
};

// best sol from web
// it is O(2logn) instead of O(n)
// var countNodes = function(root) {
//   let count = 0,
//     node = root;
//   let h = height(node);
//   while (node) {
//     if (height(node.right) === h - 1) {
//       count += 1 << (h - 1);
//       node = node.right;
//     } else {
//       count += 1 << (h - 2);
//       node = node.left;
//     }
//     h--;
//   }
//   return count;
// };

// function height(node) {
//   let height = 0;
//   while (node) {
//     node = node.left;
//     height++;
//   }
//   return height;
// }

console.log(countNodes(buildTree([])));
// 0

console.log(countNodes(buildTree([1, 2, 3, 4, 5, 6])));
// 6

console.log(countNodes(buildTree([1, 2, 3, 4, 5, 6, 7])));
// 7

console.log(countNodes(buildTree([1, 2, 3, 4, 5])));
// 5
