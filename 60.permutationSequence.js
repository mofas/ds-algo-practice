/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */

// brute force - generating all combination
// the last case cost 0.184 sec
// var getPermutation = function(n, k) {
//   const arr = new Array(n).fill(0).map((d, i) => i + 1);

//   const helper = a => {
//     if (a.length === 0) return [[]];
//     if (a.length === 1) return [a.slice()];

//     let ret = [];
//     for (let i = 0; i < a.length; i++) {
//       const rest = a.slice();
//       const target = rest.splice(i, 1);
//       const rec = helper(rest);
//       ret = ret.concat(rec.map(d => target.concat(d)));
//     }

//     return ret;
//   };

//   const comb = helper(arr);
//   // console.log(comb);
//   return comb[k - 1].join('');
// };

var getPermutation = function(n, k) {
  const arr = new Array(n).fill(0).map((d, i) => i + 1);
  const combCount = [];

  let acc = 1;
  for (let i = 1; i < n; i++) {
    acc *= i;
    combCount.push(acc);
  }

  combCount.reverse();
  // console.log(combCount);

  let seq = k;
  const ret = [];
  let rest = arr;
  for (let i = 0; i < combCount.length; i++) {
    // console.log('start of loop', seq, combCount[i]);
    let count = 0;
    while (seq > combCount[i]) {
      count++;
      seq -= combCount[i];
    }
    ret.push(rest[count]);
    rest.splice(count, 1);
    // console.log('end of loop', seq, count);
    // console.log('---', ret, rest);
  }

  ret.push(rest[0]);
  return ret.join('');
};

console.log(getPermutation(3, 3));
// '213'

console.log(getPermutation(4, 9));
// '2314'

console.log(getPermutation(7, 298));
// '1453672'

console.log(getPermutation(8, 35784));
// '81627543'
