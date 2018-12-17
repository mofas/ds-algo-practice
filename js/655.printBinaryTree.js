const treeUtil = require('./tree.util');
const { TreeNode, buildTree } = treeUtil;

/**
 * @param {TreeNode} root
 * @return {string[][]}
 */
var printTree = function(root) {
  const rawRet = [];
  let maxDepth = 0;

  const helper = (root, depth, left) => {
    rawRet[depth] = rawRet[depth] || {};
    if (root) {
      if (depth > maxDepth) maxDepth = depth;
      rawRet[depth][left] = String(root.val);
      helper(root.left, depth + 1, left * 2);
      helper(root.right, depth + 1, left * 2 + 1);
    }
  };

  helper(root, 0, 0);
  rawRet.pop();

  // console.log(rawRet);

  const nodePerLayer = Math.pow(2, maxDepth + 1) - 1;
  // console.log('nodePerLayer', nodePerLayer);
  const ret = new Array(rawRet.length)
    .fill([])
    .map(_ => new Array(nodePerLayer).fill(''));

  rawRet.forEach((d, i) => {
    const leavesCount = Math.pow(2, i);
    const occupied = 2 * leavesCount - 1;
    const remaining = nodePerLayer - occupied;
    const padding = remaining / (occupied + 1);
    // console.log('occupied', d, padding);
    for (let j = 0; j < occupied; j++) {
      if (j % 2 === 0 && d[j / 2]) {
        ret[i][padding * j + j + padding] = d[j / 2];
      }
    }
  });

  return ret;
};

// best sol from web
// function getTreeHeight(root) {
//   if (!root) {
//     return 0;
//   }
//   return 1 + Math.max(getTreeHeight(root.left), getTreeHeight(root.right));
// }

// function printTreeHelper(arr, root, idx, begin, end) {
//   if (!root) {
//     return;
//   }

//   let mid = ~~((begin + end) / 2);
//   arr[idx][mid] = String(root.val);
//   printTreeHelper(arr, root.left, idx + 1, begin, mid - 1);
//   printTreeHelper(arr, root.right, idx + 1, mid + 1, end);
// }

// var printTree = function(root) {
//   //special case
//   if (!root || root.length === 0) {
//     return [];
//   }

//   let height = getTreeHeight(root);
//   //create ret array
//   let arr = [];
//   for (let i = 0; i < height; i++) {
//     arr.push(new Array(Math.pow(2, height) - 1).fill(''));
//   }
//   printTreeHelper(arr, root, 0, 0, Math.pow(2, height) - 1);
//   return arr;
// };

console.log(printTree(buildTree([1, 2])));
// [['', '1', ''], ['2', '', '']];

console.log(printTree(buildTree([1, 2, 3, null, 4])));
// [
//   ['', '', '', '1', '', '', ''],
//   ['', '2', '', '', '', '3', ''],
//   ['', '', '4', '', '', '', '']
// ];

console.log(printTree(buildTree([1, 2, 5, 3, null, null, null, 4])));
// [
//   ['', '', '', '', '', '', '', '1', '', '', '', '', '', '', ''][
//     ('', '', '', '2', '', '', '', '', '', '', '', '5', '', '', '')
//   ][('', '3', '', '', '', '', '', '', '', '', '', '', '', '', '')][
//     ('4', '', '', '', '', '', '', '', '', '', '', '', '', '', '')
//   ]
// ];

console.log(
  printTree(buildTree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]))
);
// [
//   ['', '', '', '', '', '', '', '1', '', '', '', '', '', '', ''],
//   ['', '', '', '2', '', '', '', '', '', '', '', '3', '', '', ''],
//   ['', '4', '', '', '', '5', '', '', '', '6', '', '', '', '7', ''],
//   ['8', '', '9', '', '10', '', '11', '', '12', '', '13', '', '14', '', '15']
// ];

console.log(printTree(buildTree([3, null, 30, null, 20])));
// [
//   ['', '', '', '3', '', '', ''],
//   ['', '', '', '', '', '30', ''],
//   ['', '', '', '', '', '', '20']
// ];
