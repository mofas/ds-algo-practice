/**
 * @param {string} expression
 * @return {string}
 */
const parseNumber = str => {
  const negative = str[0] === '-';
  let from = negative ? 1 : 0;
  let i = 0;
  while (str[i] !== '/') {
    i++;
  }

  return {
    negative,
    num: Number(str.substring(from, i)),
    den: Number(str.substring(i + 1, str.length))
  };
};

const getGcd = (e, f) => {
  while (e !== 0 && f !== 0) {
    if (e > f) e = e % f;
    else f = f % e;
  }
  return e || f;
};
const handleArith = (a, b) => {
  //
  let e = a.den;
  let f = b.den;
  let gcd = getGcd(e, f);
  const multiA = b.den / gcd;
  const multiB = a.den / gcd;
  let num = 0;
  let den = gcd * multiA * multiB;
  let negative = false;
  if (!a.negative && !b.negative) {
    num = a.num * multiA + b.num * multiB;
  } else if (!a.negative && b.negative) {
    num = a.num * multiA - b.num * multiB;
  } else if (a.negative && !b.negative) {
    num = -a.num * multiA + b.num * multiB;
  } else {
    num = a.num * multiA + b.num * multiB;
    negative = true;
  }

  if (num < 0) {
    num = Math.abs(num);
    negative = true;
  }

  gcd = getGcd(num, den);
  num /= gcd;
  den /= gcd;

  return {
    negative,
    num,
    den
  };
};

var fractionAddition = function(expression) {
  const n = expression.length;
  let i = 0;
  if (expression[0] === '-') {
    i = 1;
  }

  let lastPoint = 0;
  const numbers = [];
  while (i < n) {
    if (expression[i] === '-') {
      numbers.push(expression.substring(lastPoint, i));
      lastPoint = i;
    } else if (expression[i] === '+') {
      numbers.push(expression.substring(lastPoint, i));
      lastPoint = i + 1;
    }
    i++;
  }

  numbers.push(expression.substring(lastPoint, n));
  let current = parseNumber(numbers[0]);

  for (let i = 1; i < numbers.length; i++) {
    const target = parseNumber(numbers[i]);
    current = handleArith(current, target);
  }
  return `${current.negative ? '-' : ''}${current.num}/${current.den}`;
};

console.log(fractionAddition('-1/2+1/2'));
// '0/1'

console.log(fractionAddition('-1/2+1/2+1/3'));
// '1/3'

console.log(fractionAddition('1/3-1/2'));
// '-1/6'

console.log(fractionAddition('5/3+1/3'));
// '2/1'

console.log(fractionAddition('11/3+7/6'));
// '29/6'
