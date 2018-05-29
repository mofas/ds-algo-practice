/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const stack = [];
  const n = s.length;
  for (let i = 0; i < n; i++) {
    const t = s[i];
    if (t === '(') stack.unshift('(');
    else if (t === '[') stack.unshift('[');
    else if (t === '{') stack.unshift('{');
    else if (t === ')') {
      if (stack[0] !== '(') return false;
      stack.shift();
    } else if (t === ']') {
      if (stack[0] !== '[') return false;
      stack.shift();
    } else if (t === '}') {
      if (stack[0] !== '{') return false;
      stack.shift();
    }
  }

  return stack.length ? false : true;
};

console.log(isValid('()')); // true
console.log(isValid('()[]{}')); // true
console.log(isValid('{[]}')); // true

console.log(isValid('(]')); // false
console.log(isValid('([)]')); // false
console.log(isValid('(')); // false
