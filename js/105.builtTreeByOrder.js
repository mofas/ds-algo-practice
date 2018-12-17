function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

// index from 1

var buildTree = function(preorder, inorder) {
  if (!preorder.length || !inorder.length) {
    return null;
  }

  const [y, ...ys] = preorder;

  let root = new TreeNode(y);
  const inorderIndex = inorder.indexOf(y) + 1;
  const leftInorder = inorder.slice(0, inorderIndex - 1);
  const rightInorder = inorder.slice(inorderIndex);
  const leftPreorder = ys.slice(0, inorderIndex - 1);
  const rightPreorder = ys.slice(inorderIndex - 1);
  // console.log(
  //   y,
  //   leftPreorder,
  //   rightPreorder,
  //   '||||',
  //   leftInorder,
  //   rightInorder
  // );
  // console.log('========');

  root.left = buildTree(leftPreorder, leftInorder);
  root.right = buildTree(rightPreorder, rightInorder);
  return root;
};

const preorder = [3, 9, 20, 15, 7];
const inorder = [9, 3, 15, 20, 7];

console.log(buildTree(preorder, inorder));
