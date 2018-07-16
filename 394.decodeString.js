/**
 * @param {string} s
 * @return {string}
 */

// 84 ms
var decodeString = function(s) {
  const isNumber = /[0-9]/;
  const isId = /[a-zA-Z]/;

  const n = s.length;
  const factors = [];
  const prevs = [];

  let i = 0;
  let c = s[i];
  let prev = '';
  let str = '';
  let number = null;

  while (i < n) {
    if (c === '[') {
      c = s[++i];
      // console.log('push', str);
      prevs.push(str);
      str = '';
      factors.push(number || 1);
    } else if (c === ']') {
      const multi = factors.pop();
      let prev = prevs.pop();
      // console.log(str, prev, multi);
      str = prev + str.repeat(multi);
      num = null;
      c = s[++i];
      // console.log('imd', str);
    } else if (isNumber.test(c)) {
      let num = '';
      while (isNumber.test(c) && i < n) {
        num += c;
        c = s[++i];
      }
      number = Number(num);
    } else if (isId.test(c)) {
      let temp = '';
      while (isId.test(c) && i < n) {
        temp += c;
        c = s[++i];
      }
      str += temp;
    }
  }

  return prev + str;
};

// the best sol from web
// very beautiful stack
var decodeString = function(s) {
  let stack = [];
  for (let c of s) {
    if (c !== ']') {
      stack.push(c);
    } else {
      let str = '';
      while (stack[stack.length - 1] !== '[') {
        str = stack.pop() + str;
      }
      stack.pop();
      let count = '';
      while (stack.length > 0 && stack[stack.length - 1].match(/[0-9]/)) {
        count = stack.pop() + count;
      }
      count = parseInt(count);
      let temp = '';
      while (count > 0) {
        temp += str;
        count--;
      }
      stack.push(temp);
    }
  }
  return stack.join('');

console.log(decodeString('3[a]2[bc]'));
// "aaabcbc".

console.log(decodeString('3[a2[c]]'));
// "accaccacc"

console.log(decodeString('2[abc]3[cd]ef'));
// "abcabccdcdcdef".

console.log(decodeString('3[a]2[b4[F]c]'));
// aaabFFFFcbFFFFc
