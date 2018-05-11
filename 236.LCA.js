function TreeNode(val) {
  this.val = val;
  this.left = this.right = this.next = null;
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

const buildTree = arr => {
  return buildTreeFromArray(arr)(1);
};

const setParent = root => {
  if (root.left) {
    root.left.parent = root;
    setParent(root.left);
  }
  if (root.right) {
    root.right.parent = root;
    setParent(root.right);
  }
};

const isParent = (p, q) => {
  // console.log(p.val, q.val);
  if (p === q) {
    return true;
  } else if (!q.parent) {
    return false;
  } else {
    return isParent(p, q.parent);
  }
};

// we can improve performance by memorizing inTree
var lowestCommonAncestor = function(root, p, q) {
  setParent(root);
  let commonParent = p;
  while (commonParent && !isParent(commonParent, q)) {
    commonParent = commonParent.parent;
  }

  return commonParent;
};

const tree1 = buildTree([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]);

console.log(lowestCommonAncestor(tree1, tree1.left, tree1.right).val); // 3

console.log(
  lowestCommonAncestor(tree1, tree1.left, tree1.left.right.right).val
); // 5

const tree2 = buildTree([
  37,
  -34,
  -48,
  null,
  -100,
  -100,
  48,
  null,
  null,
  null,
  null,
  -54,
  null,
  -71,
  -22,
  null,
  null,
  null,
  8
]);

console.log(
  lowestCommonAncestor(tree2, tree2.left.right, tree2.right.left).val
);
