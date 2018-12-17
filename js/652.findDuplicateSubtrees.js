const treeUtil = require('./tree.util');
const { TreeNode, buildTree, printTree } = treeUtil;

const serializedTree = tree => {
  let queue = [tree];
  let ret = [];

  while (queue.length) {
    let current = queue.shift();
    // console.log(current, queue, ret);
    if (current != null) {
      ret.push(current.val);
      queue.push(current.left);
      queue.push(current.right);
    } else {
      ret.push(null);
    }
  }

  while (ret[ret.length - 1] == null) {
    ret.pop();
  }
  return ret.join('-');
};

/**
 * @param {TreeNode} root
 * @return {TreeNode[]}
 */

// 3x slower than the best ans
var findDuplicateSubtrees = function(root) {
  let ret = [];
  const hash = {};
  const saved = {};
  const helper = root => {
    if (root) {
      let val = root.val;
      hash[val] = hash[val] || [];
      let isDup = false;
      const serTree = serializedTree(root);
      if (!saved[serTree]) {
        for (let i = 0; i < hash[val].length; i++) {
          if (serTree === hash[val][i]) {
            isDup = true;
            break;
          }
        }
        if (isDup) {
          ret.push(root);
          saved[serTree] = true;
        } else {
          hash[val].push(serTree);
        }
        helper(root.left);
        helper(root.right);
      }
    }
  };
  helper(root);
  // console.log(hash);
  return ret;
};

// best sol from web
// var findDuplicateSubtrees = function(root) {
//   const count = new Map();
//   const ans = [];
//   collect(root);
//   return ans;

//   function collect(node) {
//     if (node === null) return '#';
//     const serial =
//       node.val + ',' + collect(node.left) + ',' + collect(node.right);
//     count.set(serial, ~~count.get(serial) + 1);
//     if (count.get(serial) === 2) ans.push(node);
//     return serial;
//   }
// };

console.log(
  findDuplicateSubtrees(buildTree([1, 2, 3, 4, null, 2, 4, null, null, 4]))
);
// [[2, 4], [4]];

console.log(findDuplicateSubtrees(buildTree([2, 2, 2, 3, null, 3, null])));
// [[2,3],[3]]
