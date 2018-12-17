/**
 * @param {number} n
 * @return {number}
 */
var nextGreaterElement = function(n) {
  const arr = String(n)
    .split('')
    .map(d => Number(d));

  const len = arr.length;

  let point = null;
  for (let i = len - 1; i >= 0; i--) {
    if (arr[i] > arr[i - 1]) {
      point = i - 1;
      break;
    }
  }

  if (point == null) return -1;

  let swap = arr[point];
  let tobeSwapped = null;

  for (let i = len - 1; i >= 0; i--) {
    if (arr[i] > swap) {
      tobeSwapped = i;
      break;
    }
  }

  const temp = arr[point];
  arr[point] = arr[tobeSwapped];
  arr[tobeSwapped] = temp;

  sub = arr.slice(point + 1, len).sort((a, b) => a - b);

  // console.log('arr', arr, sub, point);

  for (let i = 0; i < sub.length; i++) {
    arr[point + i + 1] = sub[i];
  }

  const ret = Number(arr.join(''));

  return ret > 2147483647 ? -1 : ret;
};

console.log(nextGreaterElement(12));
// 21

console.log(nextGreaterElement(21));
// -1

console.log(nextGreaterElement(4123));
// 4132

console.log(nextGreaterElement(94876));
// 96478

console.log(nextGreaterElement(1999999999));
// -1

console.log(nextGreaterElement(2147483647));
// -1
