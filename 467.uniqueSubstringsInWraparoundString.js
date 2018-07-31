/**
 * @param {string} p
 * @return {number}
 */

// zabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcd
// hashmap is slow for very long sequence
// TLE at 18
// var findSubstringInWraproundString = function(p) {
//   const record = new Set();
//   let current = '';
//   let last = null;
//   for (const c of p) {
//     if (!last || (last.charCodeAt(0) - 96) % 26 === c.charCodeAt(0) - 97) {
//       current += c;
//       if (!record.has(current)) {
//         // console.log('current', current);
//         record.add(current);
//         for (let i = current.length - 1; i >= 1; i--) {
//           const t = current.substring(i, current.length);
//           if (!record.has(t)) {
//             // console.log('add t', t);
//             record.add(t);
//           }
//         }
//         last = c;
//       } else {
//         last = null;
//         current = '';
//       }
//     } else {
//       current = c;
//       if (!record.has(current)) {
//         record.add(current);
//       }
//       last = c;
//     }
//   }
//   // console.log(record);

//   return record.size;
// };

// nice try but it is very hard to solve overlapping calculation in this way
// var findSubstringInWraproundString = function(p) {
//   const n = p.length;
//   if (n < 2) return n;

//   const sequences = new Set();
//   let str = '';

//   for (let i = 1; i < n; i++) {
//     if ((p.charCodeAt(i - 1) - 96) % 26 === p.charCodeAt(i) - 97) {
//       str += p[i - 1];
//     } else {
//       str += p[i - 1];
//       let isSubString = false;
//       for (const seq of sequences) {
//         if (seq.length < str.length && str.indexOf(seq) >= 0) {
//           sequences.delete(seq);
//         }
//         if (seq.length > str.length && seq.indexOf(str) >= 0) {
//           isSubString = true;
//           break;
//         }
//       }
//       if (!isSubString) sequences.add(str);
//       str = '';
//     }
//   }
//   str += p[n - 1];
//   let isSubString = false;
//   for (const seq of sequences) {
//     if (seq.length < str.length && str.indexOf(seq) >= 0) {
//       sequences.delete(seq);
//     }
//     if (seq.length > str.length && seq.indexOf(str) >= 0) {
//       isSubString = true;
//       break;
//     }
//   }
//   if (!isSubString) sequences.add(str);
//   console.log(sequences);
//   let ret = 0;
//   for (const seq of sequences) {
//     //
//   }

//   return ret;
// };

// inspired by discussion sol
// 64 ms
var findSubstringInWraproundString = function(p) {
  const n = p.length;
  if (n < 2) return n;
  const dp = new Array(26).fill(0);

  const updateDP = str => {
    if (str.length === 0) return;
    const n = str.length;
    const from = str.charCodeAt(0) - 97;
    for (let i = 0; i < n; i++) {
      dp[(from + i) % 26] = Math.max(dp[(from + i) % 26], n - i);
    }
    // console.log('update', str, dp);
  };

  let str = '';
  for (let i = 0; i < n; i++) {
    str += p[i];
    if (
      i < n - 1 &&
      !((p.charCodeAt(i) - 96) % 26 === p.charCodeAt(i + 1) - 97)
    ) {
      updateDP(str);
      str = '';
    }
  }

  updateDP(str);

  let ret = 0;
  // sum up
  dp.forEach(d => (ret += d));
  return ret;
};

// best sol from web
// 56ms
// var findSubstringInWraproundString = function(p) {
//   const a = 'a'.charCodeAt(0);
//   const ent = new Array(26).fill(0);
//   let summary = 0;

//   for (let i = 0, len = p.length; i < len; i++) {
//     const current = p.charCodeAt(i) - a;
//     if (i === 0) {
//       summary++;
//     } else {
//       const previous = p.charCodeAt(i - 1) - a;
//       if (current - previous === 1 || (previous === 25 && current === 0))
//         summary++;
//       else summary = 1;
//     }
//     ent[current] = Math.max(ent[current], summary);
//   }
//   return ent.reduce((c, n) => c + n, 0);
// };

console.log(findSubstringInWraproundString('a'));
// 1

console.log(findSubstringInWraproundString('cac'));
// 2

console.log(findSubstringInWraproundString('aabb'));
// 3 = a + b + ab

console.log(findSubstringInWraproundString('abc'));
// 6

console.log(findSubstringInWraproundString('abcba'));
// 6 = 3 + ab + bc + abc

console.log(findSubstringInWraproundString('zab'));
// 6

console.log(findSubstringInWraproundString('yza'));
// 6

console.log(findSubstringInWraproundString('abcbd'));
// 7 = 4 + ab + bc + bd

console.log(findSubstringInWraproundString('abchhabc'));
// 7 = 4 + ab + bc + abc

console.log(findSubstringInWraproundString('abcd'));
// 10 = 4 + ab + bc + cd + abc + bcd + abcd

console.log(findSubstringInWraproundString('bcdeabcd'));
// 14

console.log(findSubstringInWraproundString('cdefbcdeabcd'));
// 18

console.log(
  findSubstringInWraproundString(
    'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz'
  )
);
// 33475
