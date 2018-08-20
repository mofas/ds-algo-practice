/**
 * @param {number[][]} richer
 * @param {number[]} quiet
 * @return {number[]}
 */

// 2572ms
// too slow
var loudAndRich = function(richer, quiet) {
  const n = quiet.length;
  const richTable = new Array(n).fill(null).map(_ => new Set());
  for (const [x, y] of richer) {
    richTable[y].add(x);
  }
  // console.log('before', richTable);
  const helper = (parent, current, checked) => {
    for (const t of richTable[current]) {
      if (!checked.has(t)) {
        richTable[parent].add(t);
        checked.add(t);
        helper(parent, t, checked);
      }
    }
  };
  for (let i = 0; i < n; i++) {
    helper(i, i, new Set([i]));
  }
  let res = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    let cand = i;
    let min = quiet[i];
    for (const t of richTable[i]) {
      if (quiet[t] < min) {
        min = quiet[t];
        cand = t;
      }
    }
    res[i] = cand;
  }
  return res;
};

// dfs
// 92ms
// var loudAndRich = function(richer, quiet) {
//   const N = quiet.length;
//   const hash = {};
//   let results = [];
//   for (let i = 0; i < richer.length; ++i) {
//     const min = richer[i][1];
//     if (!hash[min]) {
//       hash[min] = [];
//     }
//     hash[min].push(richer[i][0]);
//   }

//   function dfs(index) {
//     if (results[index] === undefined) {
//       results[index] = index;
//       if (hash[index]) {
//         for (let i = 0; i < hash[index].length; ++i) {
//           let rindex = dfs(hash[index][i]);
//           if (quiet[rindex] < quiet[results[index]]) {
//             results[index] = rindex;
//           }
//         }
//       }
//     }
//     return results[index];
//   }
//   for (let i = 0; i < N; ++i) {
//     results[i] = dfs(i);
//   }
//   return results;
// };

// my own version dfs
// 116ms
var loudAndRich = function(richer, quiet) {
  const n = quiet.length;
  const richTable = new Array(n).fill(null).map(_ => new Set());
  for (const [x, y] of richer) {
    richTable[y].add(x);
  }

  let res = new Array(n).fill(null);

  const dfs = i => {
    if (res[i] != null) return res[i];
    let idx = i;
    for (const t of richTable[i]) {
      let tIdx = dfs(t);
      if (quiet[tIdx] < quiet[idx]) idx = tIdx;
    }
    res[i] = idx;
    return res[i];
  };

  for (let i = 0; i < n; i++) res[i] = dfs(i);
  return res;
};

console.log(
  loudAndRich(
    [[1, 0], [2, 1], [3, 1], [3, 7], [4, 3], [5, 3], [6, 3]],
    [3, 2, 5, 4, 6, 1, 7, 0]
  )
);
// [5,5,2,5,4,5,6,7]
