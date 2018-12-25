/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
  const helper = str => {
    let ret = [];
    for (const ch of str) {
      if (ch === '#') {
        if (ret.length > 0) ret.pop();
      } else {
        ret.push(ch);
      }
    }
    return ret.join('');
  };
  return helper(S) === helper(T);
};

console.log(backspaceCompare('ab#c', 'ad#c'));
console.log(backspaceCompare('ab##', 'c#d#'));
console.log(backspaceCompare('a##c', '#a#c'));
console.log(backspaceCompare('a#c', 'b'));
// false
