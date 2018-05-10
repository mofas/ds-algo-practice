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

// handle null tree, 0
var hasPathSum = function(root, sum) {
  if (root === null) {
    return false;
  } else if (
    sum - root.val === 0 &&
    root.left === null &&
    root.right === null
  ) {
    return true;
  } else {
    return (
      hasPathSum(root.left, sum - root.val) ||
      hasPathSum(root.right, sum - root.val)
    );
  }
};

const tree1 = buildTreeFromArray([
  5,
  4,
  8,
  11,
  null,
  13,
  4,
  7,
  2,
  null,
  null,
  null,
  1
])(1);

const tree2 = buildTreeFromArray([1, 2])(1);
const tree3 = buildTreeFromArray([-2, null, -3])(1);

// true
console.log(hasPathSum(tree1, 22));

// false
console.log(hasPathSum(null, 0));

// false
console.log(hasPathSum(tree2, 1));

// true
console.log(hasPathSum(tree3, -5));
