/**
 * @param {string} s
 * @return {number}
 */

// easy to understand but is slow
// var numDecodings = function(s) {
//   if (s === '0') return 0;

//   let ret = [[]];
//   let temp = [];
//   for (let i = 0; i < s.length; i++) {
//     ret.forEach(d => {
//       if (d.length === 0 && s[i] !== '0') {
//         temp.push([s[i]]);
//       } else {
//         const last = d[d.length - 1];
//         const numStr = String(last + s[i]);
//         const next = Number(numStr);
//         if (next <= 26 && next > 0 && String(next) === numStr) {
//           const copy = d.slice();
//           copy[d.length - 1] = next;
//           temp.push(copy);
//         }
//         if (s[i] !== '0') {
//           const copy = d.slice();
//           copy.push(s[i]);
//           temp.push(copy);
//         }
//       }
//     });
//     // console.log('outt', temp);

//     ret = temp;
//     temp = [];
//   }

//   // console.log(ret);
//   return ret.length;
// };

// top-down DP
var numDecodings = function(s) {
  if (s[0] === '0') return 0;

  const cache = {};

  let invalid = false;

  const helper = i => {
    if (invalid) return 0;
    if (i === 0) {
      return 1;
    } else if (i === 1) {
      const numStr = s.substring(0, 2);
      if (Number(numStr) <= 26 && s[1] !== '0') {
        return 2;
      } else if (Number(numStr) > 26 && s[1] === '0') {
        return 0;
      } else {
        return 1;
      }
    } else if (cache[i]) {
      return cache[i];
    } else {
      // we need to handle 301 cases
      const nextStr = s.substring(i - 2, i);
      const numStr = s.substring(i - 1, i + 1);
      const nextInvalid = Number(nextStr) > 26 || s[i] === '0';
      const currentInvalid =
        s[i - 1] === '0' ||
        Number(numStr) > 26 ||
        String(Number(numStr)) !== numStr;

      const seprInValid = s[i - 2] === '0' || s[i - 1] === '0' || s[i] === '0';

      // console.log(
      //   s[i - 2],
      //   s[i - 1],
      //   s[i],
      //   nextInvalid,
      //   currentInvalid,
      //   seprInValid
      // );
      if (nextInvalid && currentInvalid && seprInValid) {
        invalid = true;
        return 0;
      }

      let ret = 0;
      if (s[i] !== '0') {
        ret += helper(i - 1);
      }

      if (!currentInvalid) {
        ret += helper(i - 2);
      }
      cache[i] = ret;
      return ret;
    }
  };

  let ret = helper(s.length - 1);

  return invalid ? 0 : ret;
};

// best sol from web
// var numDecodings = function(s) {
//   if (!s || !s.length || s[0] === '0') {
//     return 0;
//   }
//   var c1 = 1,
//     c2 = 1;
//   for (var i = 1; i < s.length; i++) {
//     if (s[i] === '0') {
//       c2 = 0;
//     }
//     if (s[i - 1] === '1' || (s[i - 1] === '2' && parseInt(s[i]) <= 6)) {
//       c2 = c1 + c2;
//       c1 = c2 - c1;
//     } else {
//       c1 = c2;
//     }
//   }
//   return c2;
// };

console.log(numDecodings('00'));
// 0

console.log(numDecodings('30'));
// 0

console.log(numDecodings('100'));
// 0

console.log(numDecodings('301'));
// 0

console.log(numDecodings('11000111'));
// 0

console.log(numDecodings('1000'));
// 0

console.log(numDecodings('10'));
// 1

console.log(numDecodings('101'));
// 1

console.log(numDecodings('12'));
// 2

console.log(numDecodings('226'));
// 3
// [2 2 6] [22 6] [2 26]

console.log(numDecodings('228'));
// 2
// [2 2 8] [22 8]

console.log(numDecodings('12321'));
// 6
// [1 2 3 2 1] [12 3 2 1] [12 3 21] [1 23 2 1] [1 23 21] [1 2 3 21]

console.log(
  numDecodings(
    '4757562545844617494555774581341211511296816786586787755257741178599337186486723247528324612117156948'
  )
);
// 589824
