const treeUtil = require('./tree.util');
const { TreeNode, buildTree, printTree } = treeUtil;

/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} K
 * @return {number[]}
 */
var distanceK = function(root, target, K) {
  let ret = [];

  const findChildrenNeigh = (root, dist) => {
    if (root) {
      if (dist === 0) {
        ret.push(root.val);
      } else {
        findChildrenNeigh(root.left, dist - 1);
        findChildrenNeigh(root.right, dist - 1);
      }
    }
  };

  const findSiblingNeigh = (parents, dist) => {
    const limit = Math.min(dist + 1, parents.length);
    const n = parents.length - 1;
    // console.log(parents, dist, limit);
    for (let i = 0; i < limit; i++) {
      if (dist - i > 0) {
        if (parents[n - i].left) {
          findChildrenNeigh(parents[n - i].root.right, dist - i - 1);
        } else {
          findChildrenNeigh(parents[n - i].root.left, dist - i - 1);
        }
      } else if (dist === i) {
        ret.push(parents[n - i].root.val);
      }
    }
  };

  const locate = (root, parents) => {
    if (root) {
      if (root === target) {
        findChildrenNeigh(root, K);
        findSiblingNeigh(parents, K - 1);
      } else {
        locate(root.left, parents.concat([{ root, left: true }]));
        locate(root.right, parents.concat([{ root, left: false }]));
      }
    }
  };

  locate(root, []);

  return ret;
};

const tree1 = buildTree([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]);
console.log(distanceK(tree1, tree1.left, 2));
// [7, 4, 1]

console.log(distanceK(tree1, tree1.left.right, 2));
// [3, 6]

console.log(distanceK(tree1, tree1, 2));
// [6, 2, 0, 8]
