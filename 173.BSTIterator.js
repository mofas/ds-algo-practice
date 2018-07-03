const treeUtil = require('./tree.util');
const { TreeNode, buildTree, printTree } = treeUtil;

/**
 * @constructor
 * @param {TreeNode} root - root of the binary search tree
 */
var BSTIterator = function(root) {
  this.path = [];
  this.current = null;

  this.dfs = root => {
    if (root) {
      this.current = root;
      if (root.left) {
        this.path.push(root);
        this.dfs(root.left);
      }
    }
  };
  this.dfs(root);
};

/**
 * @this BSTIterator
 * @returns {boolean} - whether we have a next smallest number
 */
BSTIterator.prototype.hasNext = function() {
  return !!this.current;
};

/**
 * @this BSTIterator
 * @returns {number} - the next smallest number
 */
BSTIterator.prototype.next = function() {
  const current = this.current;
  this.findNext = () => {
    if (current.right) {
      this.dfs(current.right);
    } else {
      this.current = this.path.pop();
    }
  };
  this.findNext();
  return current.val;
};

// best sol from web
// var BSTIterator = function(root) {
//   this.stack = [];
//   if (root) {
//     this.pushLeft(root);
//   }
// };

// BSTIterator.prototype.pushLeft = function(node) {
//   while (node) {
//     this.stack.push(node);
//     node = node.left;
//   }
// };

// BSTIterator.prototype.hasNext = function() {
//   return this.stack.length > 0;
// };

// BSTIterator.prototype.next = function() {
//   let node = this.stack.pop();
//   if (node.right) {
//     this.pushLeft(node.right);
//   }
//   return node.val;
// };

let bst = new BSTIterator(buildTree([4, 2, 7, 1, 3, 6, 8]));

console.log(bst.hasNext(), bst.next()); // 1
console.log(bst.hasNext(), bst.next()); // 2
console.log(bst.hasNext(), bst.next()); // 3
console.log(bst.hasNext(), bst.next()); // 4
console.log(bst.hasNext(), bst.next()); // 6
console.log(bst.hasNext(), bst.next()); // 7
console.log(bst.hasNext(), bst.next()); // 8
console.log(bst.hasNext()); // false
