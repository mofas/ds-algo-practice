function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const r3 = new TreeNode(3);
const r9 = new TreeNode(9);
const r20 = new TreeNode(20);
const r15 = new TreeNode(15);
const r7 = new TreeNode(7);

r3.left = r9;
r3.right = r20;
r20.left = r15;
r20.right = r7;

const r1_1 = new TreeNode(1);
const r1_2 = new TreeNode(2);
const r1_3 = new TreeNode(3);
const r1_4 = new TreeNode(4);
const r1_5 = new TreeNode(5);
r1_1.left = r1_2;
r1_2.left = r1_3;
r1_3.left = r1_4;
r1_4.left = r1_5;

const r2_7 = new TreeNode(7);
const r2_n7 = new TreeNode(-7);
const r2_8 = new TreeNode(8);
const r2_n3 = new TreeNode(-3);
const r2_6 = new TreeNode(6);
const r2_9 = new TreeNode(9);
const r2_n5 = new TreeNode(-5);

r2_7.left = r2_n7;
r2_7.right = r2_8;
r2_8.left = r2_n3;
r2_8.right = r2_6;
r2_n3.right = r2_9;
r2_9.right = r2_n5;

var levelOrder = function(root) {
  let ret = [];

  if (root) {
    ret.push([root.val]);
    const leftC = levelOrder(root.left);
    const rightC = levelOrder(root.right);
    const maxDepth = Math.max(leftC.length, rightC.length);
    for (var i = 0; i <= maxDepth; i++) {
      const flatRet = (leftC[i] || []).concat(rightC[i] || []);
      if (flatRet.length) {
        ret.push(flatRet);
      }
    }
  }

  return ret;
};

console.log(levelOrder(r3));
console.log(levelOrder(r1_1));
console.log(levelOrder(r2_7));
