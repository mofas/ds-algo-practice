function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

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

const printTree = tree => {
  let ret = [];
  const helper = (tree, i) => {
    if (tree) {
      ret[i - 1] = tree.val;
      helper(tree.left, i * 2);
      helper(tree.right, i * 2 + 1);
    } else {
      ret[i - 1] = null;
    }
  };

  helper(tree, 1);

  for (let i = 0; i < ret.length; i++) {
    if (ret[i] == null) ret[i] = null;
  }

  while (ret[ret.length - 1] == null) {
    ret.pop();
  }

  return ret;
};

// console.log(
//   printTree(buildTree([3, 0, 4, null, 2, null, null, null, null, 1]))
// );

// console.log(printTree(buildTree([3, 2, null, 1])));

// console.log(printTree(buildTree([0, null, 2, null, null, null, 6])));

module.exports = {
  TreeNode,
  buildTree,
  printTree
};
