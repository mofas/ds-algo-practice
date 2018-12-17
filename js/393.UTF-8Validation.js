/**
 * @param {number[]} data
 * @return {boolean}
 */

// 92ms
var validUtf8 = function(data) {
  const bits = data.map(d => ('0000000' + d.toString(2)).slice(-8));

  let checkInd = 0;
  // console.log(bits);
  while (checkInd < bits.length) {
    let seqLength = 0;
    // check the first
    while (bits[checkInd][seqLength] === '1') {
      seqLength++;
    }
    // console.log(
    //   checkInd,
    //   seqLength,
    //   bits.slice(checkInd, checkInd + seqLength)
    // );

    if (seqLength === 0) {
      checkInd++;
      continue;
    }

    if (seqLength > 4) return false;

    if (seqLength > bits.length || seqLength === 1) return false;

    for (let i = checkInd + 1; i < checkInd + seqLength; i++) {
      if (bits[i][0] !== '1' || bits[i][1] !== '0') return false;
    }
    checkInd += seqLength;
  }

  return true;
};

// the best sol from web
// I don't know we can use 0b to represent bin integer
// var validUtf8 = function(data) {
//   let charIndex = 0;
//   while (charIndex < data.length) {
//     let checkAdditional = 0;
//     if (data[charIndex] >= 0b11111000) {
//       // 0b11110000
//       return false;
//     } else if (data[charIndex] >= 0b11110000) {
//       // 0b11110000
//       checkAdditional = 3;
//     } else if (data[charIndex] >= 0b11100000) {
//       // 0b11110000
//       checkAdditional = 2;
//     } else if (data[charIndex] >= 0b11000000) {
//       // 0b11110000
//       checkAdditional = 1;
//     } else if (data[charIndex] >= 0b10000000) {
//       // 0b11110000
//       return false;
//     }
//     if (charIndex + checkAdditional >= data.length) {
//       return false;
//     }
//     for (let i = 1; i <= checkAdditional; i++) {
//       if (
//         data[charIndex + i] < 0b10000000 ||
//         data[charIndex + i] >= 0b11000000
//       ) {
//         return false;
//       }
//     }
//     charIndex += 1 + checkAdditional;
//   }
//   return true;
// };

console.log(validUtf8([197, 130, 1]));
// true [ '11000101', '10000010', '00000001' ]

console.log(validUtf8([230, 136, 145]));
// true [ '11100110', '10001000', '10010001' ]

console.log(validUtf8([228, 189, 160, 229, 165, 189, 13, 10]));
// true
// [
//   '11100100',
//   '10111101',
//   '10100000',
//   '11100101',
//   '10100101',
//   '10111101',
//   '00001101',
//   '00001010'
// ];

console.log(validUtf8([235, 140, 4]));
// false [ '11101011', '10001100', '00000100' ]

console.log(validUtf8([145]));
// false [ '10010001' ]

console.log(validUtf8([240, 162, 138, 147, 145]));
// false [ '11110000', '10100010', '10001010', '10010011', '10010001' ]

console.log(validUtf8([250, 145, 145, 145, 145]));
// false [ '11111010', '10010001', '10010001', '10010001', '10010001' ]
