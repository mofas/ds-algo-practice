/**
 * @param {string} S
 * @return {number[]}
 */

const twoToPow31minus1 = 2147483647;
var splitIntoFibonacci = function(S) {
  const n = S.length;

  const restCheck = (first, second) => {
    const arr = [first, second, first + second];
    let matching = arr.join('');
    // console.log('in', matching);
    while (matching.length < n) {
      // console.log(matching);
      if (S.indexOf(matching) !== 0) return [];
      const next = arr[arr.length - 1] + arr[arr.length - 2];
      if (next > twoToPow31minus1) break;
      arr.push(next);

      matching = arr.join('');
    }

    return matching === S ? arr : [];
  };

  let firstNum = null;
  let secondNum = null;
  let thirdNumber = null;

  // i is the digit of the first number
  // j is the digit of the second number

  for (let i = 1; i < n - 2; i++) {
    firstNum = Number(S.substring(0, i));
    if (firstNum > twoToPow31minus1) break;
    for (let j = 1; j < n - i; j++) {
      secondNum = Number(S.substring(i, i + j));
      if (secondNum > twoToPow31minus1) break;
      thirdNumber = firstNum + secondNum;
      // console.log(
      //   firstNum,
      //   secondNum,
      //   S.substring(i + j, n).indexOf(thirdNumber)
      // );
      if (S.substring(i + j, n).indexOf(thirdNumber) === 0) {
        const result = restCheck(firstNum, secondNum);
        // console.log(result);
        if (result.length > 1) return result;
      }
    }
  }

  return [];
};

// console.log(splitIntoFibonacci('123456579'));
// [123,456,579]

// console.log(splitIntoFibonacci('11235813'));
// [1,1,2,3,5,8,13]

// console.log(splitIntoFibonacci('112358130'));
// []

// console.log(splitIntoFibonacci('0123'));
// []

console.log(splitIntoFibonacci('1101111'));
// [110, 1, 111] or [ 11, 0, 11, 11 ]

console.log(
  splitIntoFibonacci(
    '539834657215398346785398346991079669377161950407626991734534318677529701785098211336528511'
  )
);
// []
