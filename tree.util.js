function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const buildTreeFromArray = arr => index => {
  const n = arr.length;
  let root = null;
  if (index - 1 < n && arr[index - 1] !== null) {
    root = new TreeNode(arr[index - 1]);

    if (index * 2 <= n) {
      root.left = buildTreeFromArray(arr)(index * 2);
    }

    if (index * 2 + 1 <= n) {
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

const buildBST = arr => {
  const n = arr.length;
  let root = null;
  let goRight = false;
  const insert = (tree, v) => {
    if (tree) {
      if (tree.val < v) {
        tree.right = insert(tree.right, v);
      } else if (tree.val > v) {
        tree.left = insert(tree.left, v);
      } else {
        // when v = tree.val
        if (goRight) {
          tree.right = insert(tree.right, v);
        } else {
          tree.left = insert(tree.left, v);
        }
      }
      return tree;
    }
    return new TreeNode(v);
  };

  arr.forEach(v => {
    if (v == null) {
      goRight = true;
    } else {
      root = insert(root, v);
      goRight = false;
    }
  });

  return root;
};

// console.log(printTree(buildBST([1, null, 2, 2])));
// // [ 1, null, 2, null, null, 2 ]

// console.log(printTree(buildBST([1, null, 2, null, 2])));
// // [ 1, null, 2, null, null, null, 2 ]

module.exports = {
  TreeNode,
  buildTree,
  printTree,
  buildBST
};
