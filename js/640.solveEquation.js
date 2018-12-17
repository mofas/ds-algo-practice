/**
 * @param {string} equation
 * @return {string}
 */

const getGcd = (e, f) => {
  while (e !== 0 && f !== 0) {
    if (e > f) e = e % f;
    else f = f % e;
  }
  return e || f;
};

const parseForumula = s => {
  const n = s.length;
  let term = null;
  let last = 0;
  let coeff = 0;
  let constant = 0;
  let negative = s[0] === '-';

  const handleTerm = term => {
    if (term[term.length - 1] == 'x') {
      if (term.length === 1) {
        if (negative) coeff--;
        else coeff++;
      } else {
        if (negative) coeff -= Number(term.substring(0, term.length - 1));
        else coeff += Number(term.substring(0, term.length - 1));
      }
    } else {
      if (negative) constant -= Number(term);
      else constant += Number(term);
    }
  };

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '+' || s[i] === '-') {
      term = s.substring(last, i);
      handleTerm(term);
      // console.log('coeff/constant', term, coeff, constant);
      if (s[i] === '-') negative = true;
      else negative = false;

      last = i + 1;
    }
  }

  handleTerm(s.substring(last, n + 1));
  // console.log('coeff/constant', s.substring(last, n), coeff, constant);

  return {
    coeff,
    constant
  };
};

var solveEquation = function(equation) {
  const [left, right] = equation.split('=');
  // console.log(left, right);
  const leftResult = parseForumula(left);
  const rightResult = parseForumula(right);

  let finalCoeff = leftResult.coeff - rightResult.coeff;
  let finalConstant = rightResult.constant - leftResult.constant;

  if (finalCoeff === 0) {
    if (finalConstant !== 0) return 'No solution';
    return 'Infinite solutions';
  } else {
    let negative =
      (finalCoeff < 0 && finalConstant > 0) ||
      (finalCoeff > 0 && finalConstant < 0);

    finalCoeff = Math.abs(finalCoeff);
    finalConstant = Math.abs(finalConstant);
    const gcd = getGcd(finalCoeff, finalConstant);
    // console.log('gcd', gcd);
    finalCoeff /= gcd;
    finalConstant /= gcd;

    return `${finalCoeff === 1 ? '' : finalCoeff}x=${
      negative ? '-' : ''
    }${finalConstant}`;
  }
};

console.log(solveEquation('x+5-3+x=6+x-2'));
// 'x=2'

console.log(solveEquation('x=x'));
// 'Infinite solutions'

console.log(solveEquation('2x=x'));
// 'x=0'

console.log(solveEquation('2x+3x-6x=x+2'));
// 'x=-1'

console.log(solveEquation('x=x+2'));
// 'No solution'
