const treeUtil = require('./tree.util');
const { TreeNode, buildTree, printTree } = treeUtil;

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function(root) {
  let nums = [];
  let hash = {};

  const collect = tree => {
    if (tree) {
      nums.push(tree.val);
      collect(tree.left);
      collect(tree.right);
    }
  };

  const update = tree => {
    if (tree) {
      tree.val = hash[tree.val];
      update(tree.left);
      update(tree.right);
    }
  };

  collect(root);
  nums.sort((a, b) => b - a);
  let acc = 0;
  nums.forEach(d => {
    acc += d;
    hash[d] = acc;
  });
  // console.log(nums, hash);

  update(root);
  return root;
};

// best sol from the web
// because it is a BST!!!
// var convertBST = function(root) {
//   var sum = 0;
//   function helper(node) {
//     if (node === null) return;

//     helper(node.right);
//     node.val += sum;
//     sum = node.val;
//     helper(node.left);
//   }
//   helper(root);
//   return root;
// };

console.log(printTree(convertBST(buildTree([5, 2, 13]))));
// [18, 20, 13]
