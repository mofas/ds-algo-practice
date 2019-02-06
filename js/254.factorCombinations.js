/**
 * @param {number} n
 * @return {number[][]}
 */
// DFS search
// 76ms(67%), 15.1 MB(30%)
var getFactors = function(n) {
  let ret = [];
  const limit = Math.ceil(Math.sqrt(n));
  // console.log(limit / 2);
  const helper = (m, smallest, arr) => {
    // console.log(m, arr);
    if (arr.length > 0) {
      arr.push(m);
      ret.push(arr.slice());
      arr.pop();
    }

    for (let i = smallest; i <= limit; i++) {
      // console.log('loop', i);
      if (m % i === 0 && m / i > 1) {
        arr.push(i);
        if (m / i >= i) {
          helper(m / i, i, arr);
        }
        arr.pop();
      }
    }
  };

  helper(n, 2, []);
  return ret;
};

// best sol
// 56ms
var getFactors = function(n) {
  if (n < 2) {
    return [];
  }
  return helper(n, 2);
};

var helper = (num, start) => {
  let ret = [];
  for (let i = start; i <= Math.sqrt(num); i++) {
    if (num % i !== 0) {
      continue;
    }
    let rest = num / i;
    ret.push([i, rest]);
    let sub = helper(rest, i);
    for (let elem of sub) {
      elem.unshift(i);
      ret.push(elem);
    }
  }
  return ret;
};

console.log(getFactors(1));
// []

console.log(getFactors(37));
// []

console.log(getFactors(12));
// [
//   [2, 6],
//   [2, 2, 3],
//   [3, 4]
// ]

console.log(getFactors(32));
// [
//   [2, 16],
//   [2, 2, 8],
//   [2, 2, 2, 4],
//   [2, 2, 2, 2, 2],
//   [2, 4, 4],
//   [4, 8]
// ]
