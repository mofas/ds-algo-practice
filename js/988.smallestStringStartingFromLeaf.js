const treeUtil = require('./tree.util');
const { TreeNode, buildTree, printTree } = treeUtil;

/**
 * @param {TreeNode} root
 * @return {string}
 */
// 84ms
var smallestFromLeaf = function(root) {
  const helper = node => {
    if (!node) return [];
    const lb = helper(node.left);
    const rb = helper(node.right);
    const ln = lb.length;
    const rn = rb.length;
    if (ln === 0 && rn > 0) {
      rb.push(node.val);
      return rb;
    } else if (rn === 0 && ln > 0) {
      lb.push(node.val);
      return lb;
    } else {
      // console.log('compared', node.val, lb, rb);
      const n = Math.min(ln, rn);
      if (n === 0) return [node.val];
      let ret = null;
      for (let i = 0; i < n; i++) {
        if (lb[i] > rb[i]) {
          ret = rb;
          break;
        }
        if (lb[i] < rb[i]) {
          ret = lb;
          break;
        }
      }
      if (!ret) {
        if (ln > rn) {
          ret = rb;
        } else {
          ret = lb;
        }
      }
      ret.push(node.val);
      return ret;
    }
  };
  const seq = helper(root);
  return seq.map(d => String.fromCharCode(d + 97)).join('');
};

// best sol
// 76ms
const chars = 'abcdefghijklmnopqrstuvwxyz';
var smallestFromLeaf = function(root) {
  const left = root.left;
  const right = root.right;
  let temp = '';
  if (left && right) {
    const leftAns = smallestFromLeaf(left);
    const rightAns = smallestFromLeaf(right);
    temp = leftAns < rightAns ? leftAns : rightAns;
  } else if (left || right) {
    temp = left ? smallestFromLeaf(root.left) : smallestFromLeaf(right);
  }
  return temp + chars[root.val];
};
console.log(smallestFromLeaf(buildTree([0, 1, 2, 3, 4, 3, 4])));
// 'dba'

console.log(smallestFromLeaf(buildTree([25, 1, 3, 1, 3, 0, 2])));
// 'adz'

console.log(smallestFromLeaf(buildTree([2, 2, 1, null, 1, 0, null, 0])));
// 'abc'

console.log(smallestFromLeaf(buildTree([3, 9, 20, null, null, 15, 7])));
// 'hud'
console.log(
  smallestFromLeaf(
    buildTree([
      10,
      2,
      23,
      12,
      21,
      25,
      8,
      12,
      18,
      11,
      7,
      19,
      23,
      23,
      16,
      9,
      25,
      16,
      1,
      2,
      19,
      1,
      0,
      10,
      13,
      11,
      12,
      15,
      17,
      10,
      9,
      25,
      6,
      20,
      11,
      9,
      1,
      22,
      18,
      23,
      11,
      17,
      3,
      10,
      5,
      1,
      24,
      5,
      3,
      5,
      9,
      14,
      3,
      25,
      25,
      3,
      10,
      17,
      22,
      12,
      23,
      8,
      12
    ])
  )
);
