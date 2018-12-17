var plusOne = function(digits) {
  const len = digits.length;
  digits[len - 1] = digits[len - 1] + 1;
  // normalize
  let carry = 0;
  for (let i = len - 1; i >= 0; i--) {
    digits[i] += carry;
    if (digits[i] > 9) {
      carry = 1;
      digits[i] = 0;
    } else {
      carry = 0;
      break;
    }
  }
  if (carry === 1) {
    digits.unshift(1);
  }
  return digits;
};

console.log(plusOne([1, 2, 3])); // 124
console.log(plusOne([4, 3, 2, 1])); // 4322
console.log(plusOne([9, 9, 9])); // 1000

console.log(plusOne([9, 1, 9])); // 920
