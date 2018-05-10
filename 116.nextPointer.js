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

const printTreeByLayer = root => {
  let print = `${root.val}`;
  let nextNode = root.next;
  while (nextNode) {
    print = `${print} ${nextNode.val}`;
    nextNode = nextNode.next;
  }
  console.log(print);
  if (root.left) {
    printTreeByLayer(root.left);
  }
};

const connectBetweenTree = (left, right) => {
  if (left.right && right.left) {
    left.right.next = right.left;
    connectBetweenTree(left.right, right.left);
  }
};

var connect = function(root) {
  if (root && root.left && root.right) {
    root.left.next = root.right;
    connect(root.left);
    connect(root.right);
    connectBetweenTree(root.left, root.right);
  }
};

const tree1 = buildTreeFromArray([1, 2, 3, 4, 5, 6, 7])(1);

const tree2 = buildTreeFromArray([
  -1,
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13
])(1);

connect(tree1);
printTreeByLayer(tree1);

connect(tree2);
printTreeByLayer(tree2);
