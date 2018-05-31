/**
 * @param {string} S
 * @return {string[]}
 */
var ambiguousCoordinates = function(S) {
  const n = S.length;
  if (n < 2) return [];

  const isValid = p => {
    const m = p.length;

    // 00 000 is not valid
    // 0010
    const leadingZero = p[0] === '0';
    const trailingZero = p[m - 1] === '0';
    let notAllZero = false;
    if (m > 1) {
      // 0101 should be valid
      for (let i = 0; i < m; i++) {
        if (p[i] !== '0') {
          notAllZero = true;
          if (leadingZero && trailingZero) return false;
        }
      }
      return notAllZero;
    }
    return true;
  };

  const genComb = p => {
    const m = p.length;
    let ret = [];

    const leadingZero = p[0] === '0';
    const trailingZero = p[m - 1] === '0';

    // find last zero from back
    let trail = m;
    for (let i = m - 1; i >= 0; i--) {
      if (p[i] === '0') {
        trail = i;
      } else {
        break;
      }
    }

    if (m === 1) {
      ret.push(p);
    } else if (leadingZero) {
      ret.push(`${p.substring(0, 1)}.${p.substring(1, m)}`);
    } else {
      ret.push(p);
      if (!trailingZero) {
        for (let i = 1; i < m; i++) {
          ret.push(`${p.substring(0, i)}.${p.substring(i, m)}`);
        }
      }
    }

    return ret;
  };

  let ret = [];
  for (let i = 2; i < n - 1; i++) {
    let left = S.substring(1, i);
    let right = S.substring(i, n - 1);
    // console.log(left, right, isValid(left), isValid(right));
    if (isValid(left) && isValid(right)) {
      let leftComb = genComb(left);
      let rightComb = genComb(right);
      // console.log(left, leftComb, right, rightComb);
      leftComb.forEach(l => {
        rightComb.forEach(r => {
          ret.push(`(${l}, ${r})`);
        });
      });
    }
  }

  return ret;
};

console.log(ambiguousCoordinates('(123)'));
// ['(1, 23)', '(12, 3)', '(1.2, 3)', '(1, 2.3)'];

console.log(ambiguousCoordinates('(00011)'));
// ['(0.001, 1)', '(0, 0.011)'];

console.log(ambiguousCoordinates('(0123)'));
// ['(0, 123)', '(0, 12.3)', '(0, 1.23)', '(0.1, 23)', '(0.1, 2.3)', '(0.12, 3)'];

console.log(ambiguousCoordinates('(100)'));
// [(10, 0)];

console.log(ambiguousCoordinates('(0010)'));
// ['(0.01, 0)'];

console.log(ambiguousCoordinates('(00010)'));
// ['(0.01, 0)'];

console.log(ambiguousCoordinates('(0110)'));
// ['(0, 110)', '(0.1, 10)', '(0.11, 0)'];

console.log(ambiguousCoordinates('(00101)'));
// ['(0, 0.101)', '(0.01, 0.1)'];
