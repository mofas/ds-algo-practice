/**
 * @param {string} formula
 * @return {string}
 */

const isNumber = /[0-9]/;
const isEleHead = /[A-Z]/;
const isEle = /[a-z]/;

// 60 ms
var countOfAtoms = function(formula) {
  let hash = {};
  let temp = {};
  const scoped = [];
  let ele = null;
  let number = null;

  let i = 0;
  const n = formula.length;
  while (i < n) {
    let c = formula[i];
    if (c === '(') {
      if (ele) {
        temp[ele] += 1;
        ele = null;
      }
      scoped.push(temp);
      temp = {};
      c = formula[++i];
    } else if (c === ')') {
      if (ele) {
        temp[ele] += 1;
        ele = null;
      }
      c = formula[++i];
      number = '';
      while (isNumber.test(c) && i < n) {
        number += c;
        c = formula[++i];
      }
      // console.log('handle', scoped, temp, number);
      Object.keys(temp).forEach(d => {
        temp[d] *= Number(number);
      });
      // merge with prev scope
      if (scoped.length) {
        let prev = scoped.pop();
        Object.keys(prev).forEach(d => {
          temp[d] = temp[d] || 0;
          temp[d] += prev[d];
        });
        // console.log(temp);
      }
    } else if (isEleHead.test(c)) {
      if (ele) {
        temp[ele] += 1;
      }
      ele = c;
      c = formula[++i];
      while (isEle.test(c) && i < n) {
        ele += c;
        c = formula[++i];
      }
      temp[ele] = temp[ele] || 0;
    } else if (isNumber.test(c)) {
      number = '';
      while (isNumber.test(c) && i < n) {
        number += c;
        i++;
        c = formula[i];
      }
      temp[ele] += Number(number);
      ele = null;
      number = null;
    }
    // console.log(temp, hash);
  }

  if (ele) {
    if (number) temp[ele] += Number(number);
    else temp[ele] += 1;
  }

  Object.keys(temp).forEach(d => {
    hash[d] = hash[d] || 0;
    hash[d] += temp[d];
  });

  const eles = Object.keys(hash).sort();
  return eles.reduce((acc, d) => {
    return `${acc}${d}${hash[d] > 1 ? hash[d] : ''}`;
  }, '');
};

console.log(countOfAtoms('H2O'));
// H2O

console.log(countOfAtoms('Mg(OH)2'));
// H2MgO2

console.log(countOfAtoms('K4(ON(SO3)2)2'));
// K4N2O14S4
