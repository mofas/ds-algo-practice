const treeUtil = require('./tree.util');
const { TreeNode, buildTree, printTree } = treeUtil;

/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  const queue = [];

  const helper = root => {
    if (root) {
      if (root.right) {
        queue.push(root.right);
        root.right = null;
      }
      if (root.left) {
        queue.push(root.left);
        root.left = null;
      }
      // console.log('queue', root, queue);
      if (queue.length > 0) {
        root.right = queue.pop();
        helper(root.right);
      }
    }
  };

  helper(root);
};

// best sol from web
// we can avoid function call!
// var flatten = function(root) {
//   if (root == null) {
//     return;
//   }
//   var stack = [];
//   stack.push(root);
//   while (stack.length > 0) {
//     var cur = stack.pop();
//     if (cur.right) {
//       stack.push(cur.right);
//     }
//     if (cur.left) {
//       stack.push(cur.left);
//     }
//     if (stack.length > 0) {
//       cur.right = stack[stack.length - 1];
//     }
//     cur.left = null;
//   }
// };

const tree = buildTree([1, 2, 5, 3, 4, null, 6]);

flatten(tree);
console.log(printTree(tree));
// [1, null, 2, null, 3, null, 4, null, 5, null, 6]
