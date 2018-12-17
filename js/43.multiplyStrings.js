/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  const a1 = num1.split('').map(d => Number(d));
  const a2 = num2.split('').map(d => Number(d));
  const n1 = a1.length;
  const n2 = a2.length;
  let ret = new Array(n1 + n2).fill(0);

  for (let i = n1 - 1; i >= 0; i--) {
    const d1 = a1[i];
    for (let j = n2 - 1; j >= 0; j--) {
      const d2 = a2[j];
      let carry = 0;
      let result = d1 * d2;
      let insertIndex = i + j + 1;
      // console.log(d1, d2, result, 'insertIndex', insertIndex);
      while (result > 0 || carry > 0) {
        ret[insertIndex] += result % 10 + carry;
        carry = 0;
        if (ret[insertIndex] >= 10) {
          carry = Math.floor(ret[insertIndex] / 10);
          ret[insertIndex] = ret[insertIndex] % 10;
        }

        result = Math.floor(result / 10);
        insertIndex--;
      }
      // console.log(ret);
    }
  }

  while (ret[0] === 0 && ret.length > 1) {
    ret.shift();
  }

  return ret.join('');
};

// best sol from web

// var multiply = function(num1, num2) {
//   // need to check if one of number is 0;
//   if (num1.length === 1 && num1.charAt(0) === '0') {
//     return '0';
//   } else if (num2.length === 1 && num2.charAt(0) === '0') {
//     return '0';
//   }

//   let carry = 0;
//   const result = [];

//   for (let i = num1.length - 1; i >= 0; i--) {
//     const n1 = Number.parseInt(num1.charAt(i));
//     let insertPos = num1.length - 1 - i;

//     for (let j = num2.length - 1; j >= 0; j--) {
//       const n2 = Number.parseInt(num2.charAt(j));

//       const multi = n1 * n2;
//       const value = result[insertPos] === undefined ? 0 : result[insertPos];
//       const sum = multi + carry + value;

//       result[insertPos] = sum % 10;
//       carry = Math.floor(sum / 10);
//       insertPos++;
//     }

//     if (carry !== 0) {
//       result[insertPos] = carry;
//     }

//     carry = 0;
//   }

//   return result.reverse().join('');
// };

console.log(multiply('0', '0'));
// 0

console.log(multiply('100', '10'));
// 1000

console.log(multiply('200', '110'));
// 22000

console.log(multiply('345', '678'));
// 233910

console.log(multiply('999', '998'));
// 997002

console.log(multiply('449', '761'));
// 341689
