/**
 * @param {string} s
 * @return {string[]}
 */

// too slow
var restoreIpAddresses = function(s) {
  const n = s.length;

  let ret = [[[]]];
  let temp = [];
  for (let i = 0; i < n; i++) {
    ret.forEach(d => {
      const last = d[d.length - 1];
      if (last.length === 0) {
        temp.push([[s[i]]]);
      } else {
        const numStr = String(last + s[i]);
        const next = Number(numStr);
        if (next <= 255 && String(next) === numStr) {
          const copy = d.slice();
          copy[d.length - 1] = [next];
          temp.push(copy);
        }
        if (d.length < 4) {
          const copy = d.slice();
          copy.push([s[i]]);
          temp.push(copy);
        }
      }
    });
    console.log(i, temp);
    ret = temp;
    temp = [];
  }

  return ret.filter(d => d.length === 4).map(d => d.join('.'));
};

// best sol from web
// even look like there is 4 nested loops
// it still pretty fast because it only run 4*3*2 times.

// var restoreIpAddresses = function(s) {
//   if (s.length < 4) return [];
//   let res = [];
//   for (let i = 1; i < 4; i++) {
//     for (let j = i + 1; j < i + 4; j++) {
//       for (let k = j + 1; k < j + 4 && k < s.length; k++) {
//         let sub1 = s.substring(0, i),
//           sub2 = s.substring(i, j),
//           sub3 = s.substring(j, k),
//           sub4 = s.substring(k);
//         if (
//           partValid(sub1) &&
//           partValid(sub2) &&
//           partValid(sub3) &&
//           partValid(sub4)
//         ) {
//           res.push(sub1 + '.' + sub2 + '.' + sub3 + '.' + sub4);
//         }
//       }
//     }
//   }
//   return res;
// };

// let partValid = function(sub) {
//   if (
//     sub.length > 3 ||
//     parseInt(sub) > 255 ||
//     (sub[0] === '0' && sub.length > 1)
//   ) {
//     return false;
//   }
//   return true;
// };

console.log(restoreIpAddresses('123'));
// [[123]] [[12][3]] [[1][2][3]] [[[1] [23]]]

console.log(restoreIpAddresses('25525511135'));
// ['255.255.11.135', '255.255.111.35'];

console.log(restoreIpAddresses('0000'));
// ['0.0.0.0'];

console.log(restoreIpAddresses('010010'));
// [ '0.100.1.0', '0.10.0.10' ]
