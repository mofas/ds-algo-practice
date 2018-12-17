/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */

// // top-down DP
// // very slow
// // but the fastest is also top-down DP
// // I don't know why
// var isInterleave = function(s1, s2, s3) {
//   const n = s1.length;
//   const m = s2.length;
//   const o = s3.length;

//   if (o === 0) return true;
//   if ((s1 === s3 && s2 !== '') || (s2 === s3 && s1 !== '')) return false;

//   const cache = {};

//   const helper = (i, j, k) => {
//     if (k === 0) return true;
//     const t = s3[k - 1];

//     const key = `${i}_${j}`;

//     if (s1[i - 1] !== t && s2[j - 1] !== t) {
//       cache[key] = false;
//       return false;
//     } else if (s1[i - 1] === t && s2[j - 1] === t) {
//       let ret = helper(i - 1, j, k - 1) || helper(i, j - 1, k - 1);
//       cache[key] = ret;
//       return ret;
//     } else if (s1[i - 1] === t) {
//       const ret = helper(i - 1, j, k - 1);
//       cache[key] = ret;
//       return ret;
//     } else if (s2[j - 1] === t) {
//       const ret = helper(i, j - 1, k - 1);
//       cache[key] = ret;
//       return ret;
//     }
//   };

//   return helper(n, m, o);
// };

// // DFS
// // much faster
// // last case cost 4.7 sec
// var isInterleave = function(s1, s2, s3) {
//   const n = s1.length;
//   const m = s2.length;
//   const o = s3.length;

//   if (o === 0 || (s1 === s3 && s2 === '') || (s2 === s3 && s1 === ''))
//     return true;

//   const helper = (i, j, k) => {
//     // end condition
//     if (k === 0) {
//       if (i < n && j < m) {
//         return true;
//       } else {
//         return false;
//       }
//     }

//     if (i === 0) return s2.substring(0, j) === s3.substring(0, k);
//     if (j === 0) return s1.substring(0, i) === s3.substring(0, k);

//     if (s1[i - 1] === s3[k - 1]) {
//       const ret = helper(i - 1, j, k - 1);
//       if (ret) return true;
//     }

//     if (s2[j - 1] === s3[k - 1]) {
//       const ret = helper(i, j - 1, k - 1);
//       if (ret) return true;
//     }

//     return false;
//   };

//   return helper(n, m, o);
// };

// // bottom-up DP
// last case cost 0.08 sec
// var isInterleave = function(s1, s2, s3) {
//   const n = s1.length;
//   const m = s2.length;
//   const o = s3.length;

//   if (o === 0) return true;
//   if ((n === 0 && s2 !== s3) || ((m === 0 && s1 !== s3) || n + m !== o))
//     return false;
//   const table = new Array(n + 1).fill(0).map(d => new Array(m + 1).fill(null));

//   table[0][0] = true;

//   for (let i = 1; i <= n; i++) {
//     table[i][0] = table[i - 1][0] && s1[i - 1] === s3[i - 1];
//   }
//   for (let i = 1; i <= m; i++) {
//     table[0][i] = table[0][i - 1] && s2[i - 1] === s3[i - 1];
//   }

//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= m; j++) {
//       table[i][j] =
//         (table[i - 1][j] && s1[i - 1] === s3[i + j - 1]) ||
//         (table[i][j - 1] && s2[j - 1] === s3[i + j - 1]);
//     }
//   }
//   console.log(table);

//   return table[n][m];
// };

// best sol from web
// looklike is top-down DP
// I have no idea why it is blazing fast
// var isInterleave = function(s1, s2, s3) {
//   const map = {};
//   const len1 = s1.length;
//   const len2 = s2.length;
//   const len3 = s3.length;
//   if (len3 !== len1 + len2) {
//     return false;
//   }
//   if (len1 === 0 && len2 === 0) {
//     return true;
//   }
//   return helper(s1, 0, len1, s2, 0, len2, s3, 0, len3, map);
// };

// const helper = (
//   s1,
//   s1Start,
//   s1End,
//   s2,
//   s2Start,
//   s2End,
//   s3,
//   s3Start,
//   s3End,
//   map
// ) => {
//   const key = s1Start + ',' + s2Start;
//   if (s1Start > s1End && s2Start > s2End) {
//     return true;
//   }
//   if (map[key] !== undefined) {
//     return map[key];
//   }
//   if (s1Start > s1End || s1[s1Start] !== s3[s3Start]) {
//     if (s2[s2Start] !== s3[s3Start]) {
//       map[key] = false;
//       return false;
//     }
//     map[key] = helper(
//       s1,
//       s1Start,
//       s1End,
//       s2,
//       s2Start + 1,
//       s2End,
//       s3,
//       s3Start + 1,
//       s3End,
//       map
//     );
//     return map[key];
//   }
//   if (s2Start > s2End || s2[s2Start] !== s3[s3Start]) {
//     if (s1[s1Start] !== s3[s3Start]) {
//       map[key] = false;
//       return false;
//     }
//     map[key] = helper(
//       s1,
//       s1Start + 1,
//       s1End,
//       s2,
//       s2Start,
//       s2End,
//       s3,
//       s3Start + 1,
//       s3End,
//       map
//     );
//     return map[key];
//   }
//   map[key] =
//     helper(
//       s1,
//       s1Start,
//       s1End,
//       s2,
//       s2Start + 1,
//       s2End,
//       s3,
//       s3Start + 1,
//       s3End,
//       map
//     ) ||
//     helper(
//       s1,
//       s1Start + 1,
//       s1End,
//       s2,
//       s2Start,
//       s2End,
//       s3,
//       s3Start + 1,
//       s3End,
//       map
//     );
//   return map[key];
// };

// BFS fatest
var isInterleave = function(s1, s2, s3) {
  const n = s1.length;
  const m = s2.length;
  const o = s3.length;

  if (n + m !== o) return false;

  const visited = {};
  const queue = [[0, 0]];

  while (queue.length > 0) {
    const top = queue.pop();
    const key = top.join(',');

    if (visited[key]) {
      continue;
    }

    if (top[0] == n && top[1] == m) return true;

    if (top[0] < n && s1[top[0]] == s3[top[0] + top[1]]) {
      queue.push([top[0] + 1, top[1]]);
    }

    if (top[1] < m && s2[top[1]] == s3[top[0] + top[1]]) {
      queue.push([top[0], top[1] + 1]);
    }

    visited[key] = true;
  }

  return false;
};

console.log(isInterleave('', '', ''));
// true

console.log(isInterleave('a', '', 'a'));
// true

console.log(isInterleave('aabcc', 'dbbca', 'aadbbcbcac'));
// true

console.log(isInterleave('a', 'b', 'a'));
// false

console.log(isInterleave('', '', 'a'));
// false

console.log(isInterleave('a', 'b', 'aba'));
// false

console.log(isInterleave('aabcc', 'dbbca', 'aadbbbaccc'));
// false

console.log(
  isInterleave(
    'baababbabbababbaaababbbbbbbbbbbaabaabaaaabaaabbaaabaaaababaabaaabaabbbbaabbaabaabbbbabbbababbaaaabab',
    'aababaaabbbababababaabbbababaababbababbbbabbbbbababbbabaaaaabaaabbabbaaabbababbaaaababaababbbbabbbbb',
    'babbabbabbababbaaababbbbaababbaabbbbabbbbbaaabbabaababaabaaabaabbbaaaabbabbaaaaabbabbaabaaaabbbbababbbababbabaabababbababaaaaaabbababaaabbaabbbbaaaaabbbaaabbbabbbbaaabaababbaabababbbbababbaaabbbabbbab'
  )
);
// false
