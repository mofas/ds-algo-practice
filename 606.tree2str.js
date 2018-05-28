function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

// index from 1
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
/**
 * @param {TreeNode} t
 * @return {string}
 */
var tree2str = function(t) {
  let ret = '';

  const helper = t => {
    if (t) {
      ret += t.val;
      if (t.left || t.right) {
        ret += '(';
        helper(t.left);
        ret += ')';
      }
      if (t.right) {
        ret += '(';
        helper(t.right);
        ret += ')';
      }
    }
  };

  helper(t);
  return ret;
};

const tree1 = buildTreeFromArray([1, 2, 3, 4])(1);
const tree2 = buildTreeFromArray([1, 2, 3, null, 4])(1);

console.log(tree2str(tree1)); // 1(2(4))(3)
console.log(tree2str(tree2)); // 1(2()(4))(3)
