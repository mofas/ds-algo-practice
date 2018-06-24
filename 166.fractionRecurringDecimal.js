/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function(numerator, denominator) {
  let quot = 0;
  let neg = false;
  if (
    (numerator < 0 && denominator > 0) ||
    (numerator > 0 && denominator < 0)
  ) {
    neg = true;
  }

  numerator = Math.abs(numerator);
  denominator = Math.abs(denominator);

  if (numerator > denominator) {
    quot = Math.floor(numerator / denominator);
    numerator -= denominator * quot;
  }

  let ret = `${neg ? '-' : ''}${String(quot)}`;

  let remainder = [];
  // console.log('numerator', numerator);
  let numeratorExisted = [];
  let repeatFrom = 0;

  while (numeratorExisted.indexOf(numerator) < 0 && numerator > 0) {
    numeratorExisted.push(numerator);
    remainder.push(Math.floor((numerator * 10) / denominator));
    numerator = (numerator * 10) % denominator;
    // console.log(numerator);
  }

  // console.log(remainder);

  repeatFrom = numeratorExisted.indexOf(
    // Math.floor((numerator * 10) / denominator)
    numerator
  );

  // console.log('repeatFrom', repeatFrom);

  if (remainder.length) {
    ret += '.';
    if (numerator > 0) {
      if (repeatFrom >= 0) {
        ret += remainder.splice(0, repeatFrom).join('');
      }
      ret += `(${remainder.join('')})`;
    } else ret += `${remainder.join('')}`;
  }

  return ret;
};

console.log(fractionToDecimal(1, 2));
// "0.5"

console.log(fractionToDecimal(2, 1));
// "2"

console.log(fractionToDecimal(2, 3));
// "0.(6)"

console.log(fractionToDecimal(1, 42));
// "0.0(238095)"

console.log(fractionToDecimal(15, 6));
// "2.5"

console.log(fractionToDecimal(1, 6));
// "0.1(6)"

console.log(fractionToDecimal(30, 21));
// "1.(428571)"

console.log(fractionToDecimal(4, 333));
// "0.(012)"

console.log(fractionToDecimal(1, 333));
// "0.(003)"

console.log(fractionToDecimal(1, 17));
// "0.(0588235294117647)"

console.log(fractionToDecimal(7, 12));
// "0.58(3)"

console.log(fractionToDecimal(-50, 8));
// "-6.25"

console.log(fractionToDecimal(-22, -2));
// "11"

console.log(fractionToDecimal(1, 214748364));
// "0.00(000000465661289042462740251655654056577585848337359161441621040707904997124914069194026549138227660723878669455195477065427143370461252966751355553982241280310754777158628319049732085502639731402098131932683780538602845887105337854867197032523144157689601770377165713821223802198558308923834223016478952081795603341592860749337303449725)"
