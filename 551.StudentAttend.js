/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
  let ac = 1;
  let lc = 2;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'A') {
      ac--;
      lc = 2;
      if (ac === -1) return false;
    } else if (s[i] === 'L') {
      lc--;
      if (lc === -1) return false;
    } else {
      lc = 2;
    }
  }

  return true;
};

console.log(checkRecord('PPALLP')); // true
console.log(checkRecord('PPALLL')); // false
console.log(checkRecord('LALL')); // true
