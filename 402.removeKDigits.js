/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */

// 108ms
var removeKdigits = function(num, k) {
  let arr = num.split('');

  while (k > 0) {
    k--;
    if (arr.length === 0 || arr.length === 1) return '0';
    // check first two bits
    for (let i = 0; i < arr.length; i++) {
      if (i === arr.length - 1 || arr[i] > arr[i + 1]) {
        arr.splice(i, 1);
        break;
      }
    }
    // console.log(arr);
  }

  while (arr.length > 0 && arr[0] === '0') {
    arr.shift();
  }
  if (arr.length === 0) return '0';
  return arr.join('');
};

// best sol from web
// 56ms
var removeKdigits = function(num, k) {
  let stack = [],
    numDigits = num.length;
  for (let i = 0; i < numDigits; i++) {
    while (k > 0 && stack.length && stack[stack.length - 1] > num[i]) {
      stack.pop();
      k--;
    }
    stack.push(num[i]);
  }
  stack = k > 0 ? stack.slice(0, -k) : stack;
  return stack.join('').replace(/^0+/, '') || '0';
};

console.log(removeKdigits('178376', 1));
// 17376

console.log(removeKdigits('112', 1));
// 11

console.log(removeKdigits('1107', 1));
// 107

console.log(removeKdigits('1432219', 3));
// '1219'

console.log(removeKdigits('10200', 1));
// '200'

console.log(removeKdigits('10', 2));
// '0'
