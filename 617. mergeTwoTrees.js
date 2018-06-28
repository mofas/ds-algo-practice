function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

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

const buildTree = arr => buildTreeFromArray(arr)(1);
const printTree = tree => {
  let stack = [tree];
  let ret = [];
  while (stack.length) {
    let t = stack.shift();
    if (t) {
      ret.push(t.val);
      if (t.left || t.right) stack.push(t.left);
      if (t.right) stack.push(t.right);
    } else {
      ret.push(null);
    }
  }

  return ret;
};

/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
  if (t1 || t2) {
    let vLeft = t1 ? t1.val : 0;
    let vRight = t2 ? t2.val : 0;
    let ll = t1 ? t1.left : null;
    let lr = t1 ? t1.right : null;
    let rl = t2 ? t2.left : null;
    let rr = t2 ? t2.right : null;
    let newNode = new TreeNode(vLeft + vRight);
    newNode.left = mergeTrees(ll, rl);
    newNode.right = mergeTrees(lr, rr);
    return newNode;
  }
  return null;
};

// best sol from web
// it reuse node

// var mergeTrees = function(t1, t2) {
//   if (t1 == null) return t2;
//   if (t2 == null) return t1;
//   t1.left = mergeTrees(t1.left, t2.left);
//   t1.val += t2.val;
//   t1.right = mergeTrees(t1.right, t2.right);
//   return t1;
// };

const tree1 = buildTree([1, 3, 2, 5]);
const tree2 = buildTree([2, 1, 3, null, 4, null, 7]);

// console.log(printTree(tree1));
// console.log(printTree(tree2));

console.log(printTree(mergeTrees(tree1, tree2)));
