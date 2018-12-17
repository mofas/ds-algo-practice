/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  if (root) {
    let queue = [root];
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
    return ret;
  }
  return null;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(arr) {
  if (!arr) return null;
  const n = arr.length;
  if (n === 0) return null;

  let queue = [];
  let root = new TreeNode(arr[0]);
  queue.push(root);

  let i = 1;

  while (i < n && queue.length) {
    let current = queue.shift();
    if (arr[i] != null) {
      let ln = new TreeNode(arr[i]);
      queue.push(ln);
      current.left = ln;
    }
    i++;

    if (arr[i] != null) {
      let rn = new TreeNode(arr[i]);
      queue.push(rn);
      current.right = rn;
    }
    i++;
  }

  return root;
};
