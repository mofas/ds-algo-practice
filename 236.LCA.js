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

const inTree = (root, q) => {
  if (!root) {
    return false;
  } else if (root === q) {
    return true;
  } else if (root) {
    return inTree(root.left, q) || inTree(root.right, q);
  }
};

// we can improve performance by memorizing inTree
var lowestCommonAncestor = function(root, p, q) {
  let pInLeftTree = inTree(root.left, p);
  let qInLeftTree = inTree(root.left, q);
  let pInRightTree = inTree(root.right, p);
  let qInRightTree = inTree(root.right, q);
  if (root === p || root === q) {
    return root;
  } else if (
    (pInLeftTree && qInRightTree && !pInRightTree && !qInLeftTree) ||
    (pInRightTree && qInLeftTree && !pInLeftTree && !qInRightTree)
  ) {
    return root;
  } else if (pInLeftTree && qInLeftTree) {
    return lowestCommonAncestor(root.left, p, q);
  } else if (pInRightTree && qInRightTree) {
    return lowestCommonAncestor(root.right, p, q);
  }
};

const tree1 = buildTree([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]);
console.log(tree1);
console.log(lowestCommonAncestor(tree1, tree1.left, tree1.right).val); // 3
console.log(
  lowestCommonAncestor(tree1, tree1.left, tree1.left.right.right).val
); // 5

// console.log(
//   lowestCommonAncestor(buildTree([1, 2]), new TreeNode(1), new TreeNode(2)).val
// );

// console.log(
//   lowestCommonAncestor(
//     buildTree([
//       37,
//       -34,
//       -48,
//       null,
//       -100,
//       -100,
//       48,
//       null,
//       null,
//       null,
//       null,
//       -54,
//       null,
//       -71,
//       -22,
//       null,
//       null,
//       null,
//       8
//     ]),
//     new TreeNode(-100),
//     new TreeNode(-71)
//   ).val
// );

// console.log(
//   lowestCommonAncestor(
//     buildTree([
//       37,
//       -34,
//       -48,
//       null,
//       -100,
//       -100,
//       48,
//       null,
//       null,
//       null,
//       null,
//       -54,
//       null,
//       -71,
//       -22,
//       null,
//       null,
//       null,
//       8
//     ]),
//     new TreeNode(-100),
//     new TreeNode(-100)
//   ).val
// );

// // the above algorithm cannot solve the following case
// //          4
// //      2      3
// //    1     91    5
// //  91  93      6   93
