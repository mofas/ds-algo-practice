const treeUtil = require('./tree.util');
const { TreeNode, buildTree, printTree } = treeUtil;

// /**
//  * @param {TreeNode} root
//  * @param {number} target
//  * @return {number}
//  */
// // 68ms beat 34%
// var closestValue = function(root, target) {
//   const helper = node => {
//     if (!node) return [null, Number.MAX_SAFE_INTEGER];
//     const [leftRet, leftCloset] = helper(node.left);
//     const [rightRet, rightCloset] = helper(node.right);
//     const diff = Math.abs(node.val - target);
//     let retCand = node;
//     let retVal = diff;
//     if (leftCloset < retVal) {
//       retVal = leftCloset;
//       retCand = leftRet;
//     }
//     if (rightCloset < retVal) {
//       retVal = rightCloset;
//       retCand = rightRet;
//     }

//     return [retCand, retVal];
//   };
//   return helper(root)[0].val;
// };

// actually it is binary tree!!
//64ms beat 100%
var closestValue = function(root, target) {
  let ret = root.val;
  let cursor = root;
  while (cursor) {
    if (Math.abs(target - cursor.val) < Math.abs(target - ret)) {
      ret = cursor.val;
    }
    cursor = cursor.val > target ? cursor.left : cursor.right;
  }
  return ret;
};

console.log(closestValue(buildTree([4, 2, 5, 1, 3]), 3.71));
