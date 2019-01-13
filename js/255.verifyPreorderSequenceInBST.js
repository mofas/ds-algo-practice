// 92ms, beat 25%
var verifyPreorder = function(preorder) {
  const len = preorder.length;
  if (len === 0) return true;
  const stack = [preorder[0]];
  let min = Number.MIN_SAFE_INTEGER;
  for (let i = 1; i < len; i++) {
    const val = preorder[i];
    if (val < min) return false;
    while (stack[stack.length - 1] < val) {
      min = stack.pop();
      // console.log('pop', min);
    }
    stack.push(val);
    // console.log(stack, min);
  }
  return true;
};

// best
// 84ms
// var verifyPreorder = function(preorder) {
//   if (!preorder || !preorder.length) return true;
//   let stack = [];
//   let lowerBound;
//   for (let i = 0; i < preorder.length; i++) {
//     let val = preorder[i];
//     while (stack.length && val > stack[stack.length - 1]) {
//       lowerBound = stack.pop();
//     }
//     if (lowerBound !== undefined && val < lowerBound) return false;
//     stack.push(val);
//   }
//   return true;
// };

console.log(verifyPreorder([5, 2, 6, 1, 3]));
// false

console.log(verifyPreorder([1, 3, 4, 2]));
// false

console.log(verifyPreorder([1, 2, 3]));
// true

console.log(verifyPreorder([5, 2, 1, 3, 6]));
// true

// inorder
// /**
//  * @param {number[]} preorder
//  * @return {boolean}
//  */
// var verifyPreorder = function(preorder) {
//   const len = preorder.length;
//   const helper = idx => {
//     if (idx >= len) return true;
//     if (preorder[idx] == null) return true;
//     // val > left && val < right
//     const val = preorder[idx - 1];
//     const leftChild = idx * 2;
//     const rightChild = idx * 2 + 1;
//     // console.log(val, preorder[leftChild - 1], preorder[rightChild - 1]);
//     if (leftChild && preorder[leftChild - 1] > val) {
//       return false;
//     }
//     if (rightChild && preorder[rightChild - 1] < val) {
//       return false;
//     }
//     return helper(leftChild) && helper(rightChild);
//   };
//   return helper(1);
// };
