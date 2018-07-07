const treeUtil = require('./tree.util');
const { TreeNode, buildTree, printTree } = treeUtil;

/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */

// // using O(n) space sol
// var recoverTree = function(root) {
//   let nodes = [];
//   const collect = root => {
//     if (root) {
//       nodes.push(root.val);
//       collect(root.left);
//       collect(root.right);
//     }
//   };
//   collect(root);
//   nodes.sort((b, a) => b - a);
//   const dfsUpdate = root => {
//     if (root) {
//       dfsUpdate(root.left);
//       // console.log('hpp', root, nodes[0]);
//       root.val = nodes.shift();
//       dfsUpdate(root.right);
//     }
//   };

//   dfsUpdate(root);
// };

// sol inspired by discussion board
// as fast as the best sol
var recoverTree = function(root) {
  let firstEle = null;
  let secondEle = null;
  let prevEle = new TreeNode(-Infinity);
  const traverse = root => {
    if (root) {
      traverse(root.left);
      if (firstEle == null && prevEle.val >= root.val) {
        firstEle = prevEle;
      }

      if (firstEle && prevEle.val >= root.val) {
        secondEle = root;
      }
      prevEle = root;
      traverse(root.right);
    }
  };

  traverse(root);

  // console.log(firstEle, secondEle);

  let temp = firstEle.val;
  firstEle.val = secondEle.val;
  secondEle.val = temp;
};

// best sol from web
// var recoverTree = function(root) {
//   var inner = function(root) {
//     while (true) {
//       var left = { min: root, max: root };
//       var right = { min: root, max: root };
//       if (null != root.left) {
//         var left = inner(root.left);
//         if (root.val < left.max.val) {
//           var temp = left.max.val;
//           left.max.val = root.val;
//           root.val = temp;
//           continue;
//         }
//       }
//       if (null != root.right) {
//         right = inner(root.right);
//         if (right.min.val < root.val) {
//           var temp = right.min.val;
//           right.min.val = root.val;
//           root.val = temp;
//           continue;
//         }
//       }
//       break;
//     }
//     return { min: left.min, max: right.max };
//   };
//   inner(root);
// };

let tree = null;
tree = buildTree([2, 3, 1]);
recoverTree(tree);
console.log(printTree(tree));
// [2, 1, 3]

tree = buildTree([1, 3, null, null, 2]);
recoverTree(tree);
console.log(printTree(tree));
// [3,1,null,null,2]

tree = buildTree([3, 1, 4, null, null, 2]);
recoverTree(tree);
console.log(printTree(tree));
// // [2, 1, 4, null, null, 3]

tree = buildTree([
  68,
  41,
  null,
  -85,
  null,
  -73,
  -98,
  -49,
  null,
  null,
  null,
  -124
]);
recoverTree(tree);
console.log(printTree(tree));
// [ 68, 41, null, -73, null, -85, -49, -98, null, null, null, -124 ]
