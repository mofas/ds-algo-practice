/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const n = s.length;

  let i = 0;
  let ret = 0;
  while (i < n) {
    const c = s[i];
    if (c === 'C' && s[i + 1] === 'M') {
      ret += 900;
      i++;
    } else if (c === 'C' && s[i + 1] === 'D') {
      ret += 400;
      i++;
    } else if (c === 'X' && s[i + 1] === 'C') {
      ret += 90;
      i++;
    } else if (c === 'X' && s[i + 1] === 'L') {
      ret += 40;
      i++;
    } else if (c === 'I' && s[i + 1] === 'X') {
      ret += 9;
      i++;
    } else if (c === 'I' && s[i + 1] === 'V') {
      ret += 4;
      i++;
    } else {
      if (c === 'I') {
        ret += 1;
      }
      if (c === 'V') {
        ret += 5;
      }
      if (c === 'X') {
        ret += 10;
      }
      if (c === 'L') {
        ret += 50;
      }
      if (c === 'C') {
        ret += 100;
      }
      if (c === 'D') {
        ret += 500;
      }
      if (c === 'M') {
        ret += 1000;
      }
    }

    i++;
  }

  return ret;
};

// best sol from web
// var romanNumerals = {
//   I: 1,
//   V: 5,
//   X: 10,
//   L: 50,
//   C: 100,
//   D: 500,
//   M: 1000
// };
// var romanToInt = function(s) {
//   if (s.length < 1) {
//     return null;
//   }
//   var result = 0;
//   for (var i = 0; i < s.length - 1; i++) {
//     if (romanNumerals[s[i]] < romanNumerals[s[i + 1]]) {
//       result -= romanNumerals[s[i]];
//     } else {
//       result += romanNumerals[s[i]];
//     }
//   }
//   result += romanNumerals[s[s.length - 1]];
//   return result;
// };

console.log(romanToInt('III')); // 3
console.log(romanToInt('IV')); // 4
console.log(romanToInt('VI')); // 6
console.log(romanToInt('IX')); // 9
console.log(romanToInt('XI')); // 11
console.log(romanToInt('LVIII')); // 58
console.log(romanToInt('MCMXCIV')); // 1994
