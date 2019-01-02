const treeUtil = require('./n-tree.util');
const { Node } = treeUtil;

/**
 * @param {Node} root
 * @return {number[][]}
 */
// 980ms
var levelOrder = function(root) {
  let ret = [];
  const helper = (node, depth) => {
    if (node) {
      ret[depth] = ret[depth] || [];
      ret[depth].push(node.val);
      for (const child of node.children) {
        helper(child, depth + 1);
      }
    }
  };
  helper(root, 0);
  return ret;
};

const root = new Node(1, [
  new Node(3, [new Node(5, []), new Node(6, [])]),
  new Node(2, []),
  new Node(4, [])
]);

console.log(levelOrder(root));
// [
//   [1],
//   [3,2,4],
//   [5,6]
// ]
