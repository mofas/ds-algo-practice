const treeUtil = require('./tree.util');
const { TreeNode, buildTree, printTree } = treeUtil;

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findFrequentTreeSum = function(root) {
  const hash = {};
  let max = 0;
  const helper = root => {
    if (root) {
      let ls = helper(root.left);
      let rs = helper(root.right);
      let sum = root.val + ls + rs;
      hash[sum] = hash[sum] || 0;
      hash[sum]++;
      if (hash[sum] > max) max = hash[sum];
      return sum;
    }
    return 0;
  };

  helper(root);
  // console.log(hash);

  let ret = [];
  Object.keys(hash).forEach(key => {
    if (hash[key] === max) ret.push(Number(key));
  });

  return ret;
};

console.log(findFrequentTreeSum(buildTree([5, 2, -3])));
// [2, -3, 4]

console.log(findFrequentTreeSum(buildTree([5, 2, -5])));
// [2]
