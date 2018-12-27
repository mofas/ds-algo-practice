/**
 * @param {string} preorder
 * @return {boolean}
 */
// 56ms
var isValidSerialization = function(preorder) {
  let stack = preorder.split(',');
  let next = [];

  while (stack.length > 2) {
    let i = 0;
    while (i < stack.length - 2) {
      //
      if (stack[i] !== '#' && stack[i + 1] === '#' && stack[i + 2] === '#') {
        next.push('#');
        i += 3;
      } else {
        next.push(stack[i]);
        i++;
      }
    }
    while (i < stack.length) {
      next.push(stack[i++]);
    }
    // console.log(next);
    // cannot reduce
    if (stack.length === next.length) return false;
    stack = next;
    next = [];
  }
  return stack.length === 1 && stack[0] === '#';
};

// 56ms
// almost the same algorithm
// but it used regular replace
// var isValidSerialization = function(preorder) {
//   var oldTree = '',
//     newTree = preorder;
//   while (oldTree !== newTree) {
//     oldTree = newTree;
//     newTree = oldTree.replace(/\d+,#,#/g, '#');
//   }
//   if (newTree === '#') return true;
//   else return false;
// };

console.log(isValidSerialization('9,3,4,#,#,1,#,#,2,#,6,#,#'));
// true

console.log(isValidSerialization('1,#'));
// false

console.log(isValidSerialization('9,#,#,1'));
// false

console.log(isValidSerialization('1,#,#,#,#'));
// false
