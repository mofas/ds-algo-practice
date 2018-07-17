function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const buildTree = arr => {
  const n = arr.length;
  if (n === 0) return null;

  let queue = [];
  let root = new TreeNode(arr[0]);
  queue.push(root);
  // console.log('init', queue, n);

  let i = 1;

  while (i < n && queue.length) {
    let current = queue.shift();
    // console.log('loop', current, queue);
    if (arr[i] != null) {
      let ln = new TreeNode(arr[i]);
      queue.push(ln);
      current.left = ln;
    }
    i++;

    if (arr[i] != null) {
      let rn = new TreeNode(arr[i]);
      queue.push(rn);
      current.right = rn;
    }
    i++;
  }

  return root;
};

const printTree = tree => {
  let queue = [tree];
  let ret = [];

  while (queue.length) {
    let current = queue.shift();
    // console.log(current, queue, ret);
    if (current != null) {
      ret.push(current.val);
      queue.push(current.left);
      queue.push(current.right);
    } else {
      ret.push(null);
    }
  }

  while (ret[ret.length - 1] == null && ret.length > 0) {
    ret.pop();
  }
  return ret;
};

// console.log(printTree(buildTree([1, null, 0, 0, 1])));
// // [1, null, 0, 0, 1]

// console.log(printTree(buildTree([3, 0, 4, null, 2, null, 1])));
// // [3, 0, 4, null, 2, null, 1]

// console.log(printTree(buildTree([3, 2, null, 1])));
// // [3, 2, null, 1]

// console.log(printTree(buildTree([1, null, 2, 2])));

// console.log(printTree(buildTree([1, null, 2, null, 2])));

module.exports = {
  TreeNode,
  buildTree,
  printTree
};
