function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */

var serialize = function(root) {
  if (root) {
    return {
      val: root.val,
      left: serialize(root.left),
      right: serialize(root.right)
    };
  }
  return null;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */

var deserialize = function(data) {
  if (data !== null) {
    let root = new TreeNode(data.val);
    root.left = deserialize(data.left);
    root.right = deserialize(data.right);
    return root;
  }
  return null;
};

// second try
/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  let ret = [];

  const helper = node => {
    if (node) {
      ret.push(node.val);
      helper(node.left);
      helper(node.right);
    } else {
      ret.push(null);
    }
  };
  helper(root);
  return ret;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  if (data[0] === null) {
    data.shift();
    return null;
  }
  const root = new TreeNode(data[0]);
  data.shift();
  root.left = deserialize(data);
  root.right = deserialize(data);
  return root;
};

const buildTreeFromArray = arr => index => {
  let root = null;
  if (index - 1 < arr.length && arr[index - 1] !== null) {
    root = new TreeNode(arr[index - 1]);

    if (index * 2 <= arr.length) {
      root.left = buildTreeFromArray(arr)(index * 2);
    }

    if (index * 2 + 1 <= arr.length) {
      root.right = buildTreeFromArray(arr)(index * 2 + 1);
    }
  }

  return root;
};
const buildTree = arr => buildTreeFromArray(arr)(1);

const tree1 = buildTree([1, 2, 3, 4, 5, 6, 7]);

console.log(tree1);
console.log(deserialize(serialize(tree1)));

const tree2 = buildTree([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1]);
console.log(tree2);
console.log(deserialize(serialize(tree2)));
