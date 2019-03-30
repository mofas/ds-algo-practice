/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  let ret = [{ str: '', left: n, right: 0 }];
  let next = [];
  for (let i = 0; i < 2 * n; i++) {
    const m = ret.length;
    for (let j = 0; j < m; j++) {
      const d = ret[j];
      if (d.left > 0) {
        next.push({ str: d.str + '(', left: d.left - 1, right: d.right + 1 });
      }
      if (d.right > 0) {
        next.push({ str: d.str + ')', left: d.left, right: d.right - 1 });
      }
    }
    ret = next;
    next = [];
    // console.log('loop', ret);
  }

  return ret.map(d => d.str);
};

// best sol from web
// similiar idea, but it don't create obj.
// so it is faster!
// var generateParenthesis = function(n) {
//   var result = [];

//   function test(left, right, cache, str) {
//     if (left === 0 && right === 0) {
//       cache.push(str);
//       return;
//     }

//     if (left === right) {
//       test(left - 1, right, cache, str + '(');
//     } else if (left === 0) {
//       test(0, right - 1, cache, str + ')');
//     } else {
//       test(left - 1, right, cache, str + '(');
//       test(left, right - 1, cache, str + ')');
//     }
//   }

//   test(n, n, result, '');

//   return result;
// };

// second
var generateParenthesis = function(n) {
  let queue = [{ s: '', left: n, right: n }];
  let ret = [];
  while (queue.length) {
    const c = queue.pop();
    if (c.left > 0 || c.right > 0) {
      if (c.left > 0) {
        queue.push({ s: c.s + '(', left: c.left - 1, right: c.right });
      }
      if (c.left < c.right) {
        queue.push({ s: c.s + ')', left: c.left, right: c.right - 1 });
      }
    } else {
      ret.push(c.s);
    }
  }
  return ret;
};

// console.log(generateParenthesis(1));

// console.log(generateParenthesis(2));

// console.log(generateParenthesis(3));
// ['((()))', '(()())', '(())()', '()(())', '()()()'];

console.log(generateParenthesis(4));
// [
//   '(((())))',
//   '((()()))',
//   '((())())',
//   '((()))()',
//   '(()(()))',
//   '(()()())',
//   '(()())()',
//   '(())(())',
//   '(())()()',
//   '()((()))',
//   '()(()())',
//   '()(())()',
//   '()()(())',
//   '()()()()'
// ];
[
  '(((())))',
  '((()()))',
  '((())())',
  '((()))()',
  '(()(()))',
  '(()()())',
  '(()())()',
  '(())(())',
  '(())()()',
  '()((()))',
  '()(()())',
  '()(())()',
  '()()(())',
  '()()()()'
];
// console.log(generateParenthesis(5));
