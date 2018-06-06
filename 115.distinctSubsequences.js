/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */

// top-down DP
// slow
// the last case take more than 100 sec
// var numDistinct = function(s, t) {
//   const n = s.length;
//   const m = t.length;

//   const cache = {};

//   const helper = (i, j) => {
//     if (i < j) return 0;

//     let ret = 0;
//     const key = i + ',' + j;

//     if (cache[key]) return cache[key];

//     if (j === 1) {
//       for (let k = i; k > 0; k--) {
//         if (s[k - 1] === t[0]) {
//           ret++;
//         }
//       }
//     } else {
//       for (let k = i; k >= j; k--) {
//         if (s[k - 1] === t[j - 1]) {
//           ret += helper(k - 1, j - 1);
//         }
//       }
//     }
//     cache[key] = ret;
//     return ret;
//   };

//   let ret = helper(n, m);
//   // console.log(cache);

//   return ret;
// };

// bottom-up DP
// the last case less than 0.1 sec
var numDistinct = function(s, t) {
  const n = s.length;
  const m = t.length;

  const table = new Array(m).fill(0).map(d => new Array(n + 1).fill(0));

  let c = 0;
  for (let i = 0; i <= n; i++) {
    if (s[i] === t[0]) c++;
    table[0][i] = c;
  }

  for (let j = 1; j < m; j++) {
    for (let i = j; i <= n; i++) {
      if (s[i] === t[j]) {
        table[j][i] = table[j][i - 1] + table[j - 1][i - 1];
      } else {
        table[j][i] = table[j][i - 1];
      }
    }
  }

  // console.log(table);
  return table[m - 1][n];
};

// best sol from web
// the last case less than 0.08 sec
// it is an amazing algo!

// var numDistinct = function(S, T) {
//   var counts = [];
//   // counters use to track the number of prefix of T
//   // ig. given T="ABC", count[0] = count of "A", count[1] = count of "AB", count[2] = count of "ABC".
//   for (var i = 0; i < T.length; i++) counts[i] = 0;

//   for (var i = 0; i < S.length; i++) {
//     for (var j = T.length - 1; j >= 0; j--) {
//       if (T[j] == S[i]) {
//         if (j == 0) counts[j]++;
//         else counts[j] += counts[j - 1];
//       }
//     }
//   }
//   return counts[T.length - 1];
// };

console.log(numDistinct('abb', 'abc'));
// 0

console.log(numDistinct('abcd', 'abcd'));
// 1

console.log(numDistinct('abcc', 'abc'));
// 2

console.log(numDistinct('abb', 'ab'));
// 2

console.log(numDistinct('acbcdc', 'c'));
// 3

console.log(numDistinct('rabbbit', 'rabbit'));
// 3

console.log(numDistinct('babgbag', 'bag'));
// 5

console.log(
  numDistinct(
    'xslledayhxhadmctrliaxqpokyezcfhzaskeykchkmhpyjipxtsuljkwkovmvelvwxzwieeuqnjozrfwmzsylcwvsthnxujvrkszqwtglewkycikdaiocglwzukwovsghkhyidevhbgffoqkpabthmqihcfxxzdejletqjoxmwftlxfcxgxgvpperwbqvhxgsbbkmphyomtbjzdjhcrcsggleiczpbfjcgtpycpmrjnckslrwduqlccqmgrdhxolfjafmsrfdghnatexyanldrdpxvvgujsztuffoymrfteholgonuaqndinadtumnuhkboyzaqguwqijwxxszngextfcozpetyownmyneehdwqmtpjloztswmzzdzqhuoxrblppqvyvsqhnhryvqsqogpnlqfulurexdtovqpqkfxxnqykgscxaskmksivoazlducanrqxynxlgvwonalpsyddqmaemcrrwvrjmjjnygyebwtqxehrclwsxzylbqexnxjcgspeynlbmetlkacnnbhmaizbadynajpibepbuacggxrqavfnwpcwxbzxfymhjcslghmajrirqzjqxpgtgisfjreqrqabssobbadmtmdknmakdigjqyqcruujlwmfoagrckdwyiglviyyrekjealvvigiesnvuumxgsveadrxlpwetioxibtdjblowblqvzpbrmhupyrdophjxvhgzclidzybajuxllacyhyphssvhcffxonysahvzhzbttyeeyiefhunbokiqrpqfcoxdxvefugapeevdoakxwzykmhbdytjbhigffkmbqmqxsoaiomgmmgwapzdosorcxxhejvgajyzdmzlcntqbapbpofdjtulstuzdrffafedufqwsknumcxbschdybosxkrabyfdejgyozwillcxpcaiehlelczioskqtptzaczobvyojdlyflilvwqgyrqmjaeepydrcchfyftjighntqzoo',
    'rwmimatmhydhbujebqehjprrwfkoebcxxqfktayaaeheys'
  )
);
// 543744000;
