function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

// index from 1

var buildTree = function(inorder, postorder) {
  if (!inorder.length || !postorder.length) {
    return null;
  }

  const y = postorder.pop();

  // console.log(inorder, postorder);
  let root = new TreeNode(y);
  const inorderIndex = inorder.indexOf(y) + 1;
  const leftInorder = inorder.slice(0, inorderIndex - 1);
  const rightInorder = inorder.slice(inorderIndex);
  const leftPostorder = postorder.slice(0, inorderIndex - 1);
  const rightPostorder = postorder.slice(inorderIndex - 1);
  // console.log(leftInorder, rightInorder, '||||', leftPostorder, rightPostorder);
  // console.log('========');
  root.left = buildTree(leftInorder, leftPostorder);
  root.right = buildTree(rightInorder, rightPostorder);
  return root;
};

const inorder = [9, 3, 15, 20, 7];
const postorder = [9, 15, 7, 20, 3];

console.log(buildTree(inorder, postorder));
