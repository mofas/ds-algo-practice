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

const compareTwoSide = left => right => {
  if (left && right) {
    return (
      left.val === right.val &&
      compareTwoSide(left.left)(right.right) &&
      compareTwoSide(left.right)(right.left)
    );
  } else if (!left && !right) {
    return true;
  }

  return false;
};

const isSymmetric = function(root) {
  return root ? compareTwoSide(root.left)(root.right) : true;
};

const tree1 = buildTreeFromArray([1, 2, 2, 3, 4, 4, 3])(1);
const tree2 = buildTreeFromArray([1, 2, 2, null, 3, null, 3])(1);

console.log(isSymmetric(tree1));
console.log(isSymmetric(tree2));
