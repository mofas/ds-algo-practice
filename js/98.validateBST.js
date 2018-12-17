const treeUtil = require('./tree.util');
const { TreeNode, buildTree, printTree } = treeUtil;

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
  let queue = [{ l: -Infinity, node: root, h: Infinity }];
  // I use queue, so we can do early return
  while (queue.length) {
    const { l, node, h } = queue.pop();
    if (node) {
      // console.log(l, h, node.val);
      if (node.val >= h || node.val <= l) return false;
      queue.push({ l, node: node.left, h: Math.min(node.val, h) });
      queue.push({ l: Math.max(node.val, l), node: node.right, h });
    }
  }

  return true;
};

// the best sol from web
// Suprisingly, recursion version is faster, around 64ms
// my queue version is 72ms
// I guess the object create and destruct is the reason for slowness

// var isValidBST = function(root) {
//   return validate(root, -Infinity, Infinity);
// };

// const validate = (node, min, max) => {
//   if (node === null) {
//     return true;
//   }
//   if (node.val <= min || node.val >= max) {
//     return false;
//   }
//   return (
//     validate(node.left, min, node.val) && validate(node.right, node.val, max)
//   );
// };

console.log(isValidBST(buildTree([2, 1, 3])));
//true

console.log(isValidBST(buildTree([5, 1, 4, null, 3, 6])));
//false

console.log(isValidBST(buildTree([1, 1])));
//false

console.log(isValidBST(buildTree([10, 5, 15, null, null, 6, 20])));
// false
