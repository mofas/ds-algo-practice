/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
  const n = s.length;
  let simplified = [];
  for (let i = 0; i < n; i++) {
    simplified[i] = s[i];
    if (s[i] === ')') {
      // look back
      let starC = 0;
      for (let j = i - 1; j >= 0; j--) {
        if (simplified[j] === '(') {
          simplified[j] = '-';
          simplified[i] = '-';
          break;
        } else if (simplified[j] === '*') {
          starC++;
        }
      }
      if (simplified[i] !== '-' && starC === 0) {
        return false;
      }
    }
  }

  const m = simplified.length;

  let valid = true;
  for (let i = 0; i < m; i++) {
    // scan from left
    if (simplified[i] === ')') {
      valid = false;
      for (let j = i - 1; j >= 0; j--) {
        if (simplified[j] === '*') {
          simplified[j] = '-';
          simplified[i] = '-';
          valid = true;
          break;
        }
      }
      if (!valid) return false;
    }
    // scan from right
    if (simplified[m - i - 1] === '(') {
      valid = false;
      for (let j = m - i; j < m; j++) {
        if (simplified[j] === '*') {
          simplified[j] = '-';
          simplified[m - i - 1] = '-';
          valid = true;
          break;
        }
      }
      if (!valid) return false;
    }
  }

  return true;
};

console.log(checkValidString('((*)'));
// true

console.log(checkValidString('*())'));

console.log(checkValidString('(*((**'));
// true

console.log(checkValidString('()'));
// true

console.log(checkValidString('(*)'));
// true

console.log(checkValidString('(*))'));
// true

console.log(checkValidString('**)'));
// true

console.log(checkValidString('()*)'));
// true

console.log(checkValidString('***'));
// true

console.log(checkValidString('((*()*)'));
// true

console.log(checkValidString('()(*))'));
// true

console.log('======');

console.log(checkValidString(')('));
// false

console.log(checkValidString('(('));
// false

console.log(checkValidString(')*'));
// false

console.log(checkValidString('*((*'));
// false

console.log(checkValidString('(**((*'));
// false

console.log(checkValidString('(*)((*'));
// false

console.log(checkValidString('((*)(*))((*'));
// false
