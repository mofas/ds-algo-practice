/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */

const primeMap = {
  2: 0,
  3: 1,
  5: 2,
  7: 3
};

const checkSelfDiv = num => {
  const lcmFact = [0, 0, 0, 0];
  const strNum = String(num);
  for (let i = 0; i < strNum.length; i++) {
    if (strNum[i] === '0') return false;
    else if (strNum[i] === '2')
      lcmFact[primeMap[2]] = Math.max(lcmFact[primeMap[2]], 1);
    else if (strNum[i] === '3')
      lcmFact[primeMap[3]] = Math.max(lcmFact[primeMap[3]], 1);
    else if (strNum[i] === '4')
      lcmFact[primeMap[2]] = Math.max(lcmFact[primeMap[2]], 2);
    else if (strNum[i] === '5')
      lcmFact[primeMap[5]] = Math.max(lcmFact[primeMap[5]], 1);
    else if (strNum[i] === '6') {
      lcmFact[primeMap[2]] = Math.max(lcmFact[primeMap[2]], 1);
      lcmFact[primeMap[3]] = Math.max(lcmFact[primeMap[3]], 1);
    } else if (strNum[i] === '7')
      lcmFact[primeMap[7]] = Math.max(lcmFact[primeMap[7]], 1);
    else if (strNum[i] === '8')
      lcmFact[primeMap[2]] = Math.max(lcmFact[primeMap[2]], 3);
    else if (strNum[i] === '9')
      lcmFact[primeMap[3]] = Math.max(lcmFact[primeMap[3]], 2);
  }

  let lcm =
    Math.pow(2, lcmFact[0]) *
    Math.pow(3, lcmFact[1]) *
    Math.pow(5, lcmFact[2]) *
    Math.pow(7, lcmFact[3]);

  return num % lcm === 0;
};

var selfDividingNumbers = function(left, right) {
  let ret = [];

  for (let i = left; i <= right; i++) {
    if (checkSelfDiv(i)) ret.push(i);
  }
  return ret;
};

// brute force is actually fast!!
// var selfDividingNumbers = function(left, right) {
//   var output = [];
//   for (var i = left; i <= right; i++) {
//     var stringified = i.toString();
//     var noRemainder = false;
//     for (var j = 0; j < stringified.length; j++) {
//       if (i % Number(stringified[j]) === 0 && stringified[j] !== '0') {
//         noRemainder = true;
//       } else {
//         noRemainder = false;
//         break;
//       }
//     }
//     if (noRemainder) {
//       output.push(i);
//     }
//   }

//   return output;
// };

console.log(selfDividingNumbers(1, 22));
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22];
