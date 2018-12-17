/**
 * @param {string} bottom
 * @param {string[]} allowed
 * @return {boolean}
 */
// DP sol
// too slow
// var pyramidTransition = function(bottom, allowed) {
//   const map = new Map();
//   allowed.forEach(d => {
//     const btm = d.substring(0, 2);
//     if (!map.get(btm)) {
//       map.set(btm, [d[2]]);
//     } else {
//       map.set(btm, map.get(btm).concat(d[2]));
//     }
//   });
//   let cands = [bottom];
//   let newCands = [];

//   while (cands.length) {
//     for (let i = 0; i < cands.length; i++) {
//       const test = cands[i];
//       let next = [];

//       let temp = [''];
//       for (let i = 0; i < test.length - 1; i++) {
//         const btm = test.substring(i, i + 2);
//         if (map.has(btm)) {
//           let nextTemp = [];
//           map.get(btm).forEach(c => {
//             temp.forEach(n => {
//               nextTemp.push(n + c);
//             });
//           });
//           temp = nextTemp;
//         } else {
//           temp = [];
//           break;
//         }
//       }
//       // console.log('temp', test, temp);
//       if (temp[0] && temp[0].length === 1) return true;
//       next = temp;
//       // console.log('next', next);
//       newCands = newCands.concat(next);
//     }
//     // console.log('next cand', newCands);
//     if (newCands.length === 0) return false;
//     cands = newCands;
//     newCands = [];
//   }

//   return true;
// };

// // DFS from discussion
// // 76 ms
var pyramidTransition = function(bottom, allowed) {
  const map = new Map();
  allowed.forEach(d => {
    const btm = d.substring(0, 2);
    if (!map.get(btm)) {
      map.set(btm, [d[2]]);
    } else {
      map.set(btm, map.get(btm).concat(d[2]));
    }
  });

  const getList = (bottom, idx, str) => {
    if (idx === bottom.length - 1) {
      return [str];
    }

    let ret = [];
    const targetStr = bottom.substring(idx, idx + 2);
    const next = map.get(targetStr);
    for (let i = 0; i < next.length; i++) {
      const newStr = str + next[i];
      ret = ret.concat(getList(bottom, idx + 1, newStr));
    }
    // console.log('ret', bottom, idx, str, ret);
    return ret;
  };

  const helper = bottom => {
    if (bottom.length === 1) return true;
    for (let i = 0; i < bottom.length - 1; i++) {
      if (!map.get(bottom.substring(i, i + 2))) return false;
    }
    let next = getList(bottom, 0, '');
    // console.log('next', next);
    for (let i = 0; i < next.length; i++) {
      if (helper(next[i])) return true;
    }

    return false;
  };

  let ret = helper(bottom);
  // console.log(cache);

  return ret;
};

// best sol from web
// 56ms
// var pyramidTransition = function(bottom, allowed) {
//   let options = {};

//   for (const option of allowed) {
//     let key = option.substring(0, 2);
//     let value = option.charAt(2);
//     options[key] ? options[key].push(value) : (options[key] = [value]);
//   }

//   if (fillRows(bottom, (nextRow = ''), (substringIdx = 0), options)) {
//     return true;
//   }
//   return false;
// };

// var fillRows = (bottomRow, nextRow, substringIdx, options) => {
//   if (bottomRow.length === 1) {
//     return true;
//   }
//   if (substringIdx === bottomRow.length - 1) {
//     return fillRows(nextRow, '', 0, options);
//   }

//   let prefix = bottomRow.substring(substringIdx, substringIdx + 2);
//   let nextOptions = options[prefix];
//   if (!nextOptions || !nextOptions.length) return false;
//   for (const option of nextOptions) {
//     if (fillRows(bottomRow, nextRow + option, substringIdx + 1, options)) {
//       return true;
//     }
//     nextRow = nextRow.substring(0, nextRow.length - 1); // pop the last character
//   }
//   return false;
// };

// console.log(pyramidTransition('XYZ', ['XYD', 'YZE', 'DEA', 'FFF']));
// // true

// console.log(pyramidTransition('XYZ', ['XYD', 'YZE', 'DEC']));
// // true

// console.log(pyramidTransition('XYZ', ['XYD', 'YZE', 'EDC']));
// // false

// console.log(pyramidTransition('XYZ', ['XYD', 'YZE', 'XYC', 'XYA', 'YZF']));
// // false

console.log(
  pyramidTransition('CCC', [
    'CBB',
    'ACB',
    'ABD',
    'CDB',
    'BDC',
    'CBC',
    'DBA',
    'DBB',
    'CAB',
    'BCB',
    'BCC',
    'BAA',
    'CCD',
    'BDD',
    'DDD',
    'CCA',
    'CAA',
    'CCC',
    'CCB'
  ])
);
// true

console.log(
  pyramidTransition('BDBBAA', [
    'ACB',
    'ACA',
    'AAA',
    'ACD',
    'BCD',
    'BAA',
    'BCB',
    'BCC',
    'BAD',
    'BAB',
    'BAC',
    'CAB',
    'CCD',
    'CAA',
    'CCA',
    'CCC',
    'CAD',
    'DAD',
    'DAA',
    'DAC',
    'DCD',
    'DCC',
    'DCA',
    'DDD',
    'BDD',
    'ABB',
    'ABC',
    'ABD',
    'BDB',
    'BBD',
    'BBC',
    'BBA',
    'ADD',
    'ADC',
    'ADA',
    'DDC',
    'DDB',
    'DDA',
    'CDA',
    'CDD',
    'CBA',
    'CDB',
    'CBD',
    'DBA',
    'DBC',
    'DBD',
    'BDA'
  ])
);

// true
