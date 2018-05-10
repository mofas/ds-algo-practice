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
  console.log(print + ' null');
  if (root.left) {
    printTreeByLayer(root.left);
  }
};

var connect = function(root) {
  let currentHead = root;
  while (currentHead) {
    let tempChildren = new TreeNode(-1);
    let currentChildren = tempChildren;
    while (currentHead) {
      if (currentHead.left) {
        tempChildren.next = currentHead.left;
        tempChildren = currentHead.left;
      }
      if (currentHead.right) {
        tempChildren.next = currentHead.right;
        tempChildren = currentHead.right;
      }
      currentHead = currentHead.next;
    }
    currentHead = currentChildren.next;
  }
};

const tree1 = buildTreeFromArray([1, 2, 3, 4, 5, null, 7])(1);
const tree2 = buildTreeFromArray([1, 2, 3, 4, null, null, 5])(1);

connect(tree1);
printTreeByLayer(tree1);

connect(tree2);
printTreeByLayer(tree2);
