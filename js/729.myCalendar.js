// we will preserve booking intervals as a binary tree.

// We can improve it by merging insert and search
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
  this.start = null;
  this.end = null;
  this.max = null;
}

const insert = (root, newNode) => {
  if (!root) {
    return newNode;
  } else if (root.val > newNode.val) {
    root.left = insert(root.left, newNode);
  } else if (root.val < newNode.val) {
    root.right = insert(root.right, newNode);
  }
  if (root.max < newNode.end) {
    root.max = newNode.end;
  }
  return root;
};

const overlap = (s1, e1, s2, e2) => {
  return (s1 <= s2 && e1 > s2) || (s1 >= s2 && e2 > s1);
};

// true is found, false is not found
const search = (root, target) => {
  if (!root) return false;
  if (!overlap(root.start, root.end, target.start, target.end)) {
    if (root.left && root.left.max > target.start) {
      return search(root.left, target);
    } else {
      return search(root.right, target);
    }
  } else {
    return true;
  }
};

var MyCalendar = function() {
  this.root = null;
};

/**
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function(start, end) {
  const newNode = new TreeNode(start);
  newNode.start = start;
  newNode.end = end;
  newNode.max = end;
  if (search(this.root, newNode)) {
    return false;
  } else {
    this.root = insert(this.root, newNode);
    // console.log(this.root);
    return true;
  }
};

// const myCalendar1 = new MyCalendar();

// console.log(myCalendar1.book(10, 20)); // true
// console.log(myCalendar1.book(15, 25)); // false
// console.log(myCalendar1.book(20, 30)); // true

const myCalendar2 = new MyCalendar();

console.log(myCalendar2.book(47, 50)); // true
console.log(myCalendar2.book(33, 41)); // true
console.log(myCalendar2.book(39, 45)); // false
console.log(myCalendar2.book(33, 42)); // false
console.log(myCalendar2.book(25, 32)); // true
console.log(myCalendar2.book(26, 35)); // false
console.log(myCalendar2.book(19, 25)); // true
console.log(myCalendar2.book(3, 8)); // true
console.log(myCalendar2.book(8, 13)); // true
console.log(myCalendar2.book(18, 27)); // false
