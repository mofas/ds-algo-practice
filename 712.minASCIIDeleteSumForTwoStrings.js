/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */

const getStrScore = str => {
  let acc = 0;
  for (let i = 0; i < str.length; i++) {
    acc += str.charCodeAt(i);
  }
  return acc;
};
// recusrion
var minimumDeleteSum = function(s1, s2) {
  if (s1.length === 0) {
    return getStrScore(s2);
  }
  if (s2.length === 0) {
    return getStrScore(s1);
  }
  if (s1[s1.length - 1] === s2[s2.length - 1]) {
    return minimumDeleteSum(
      s1.substring(0, s1.length - 1),
      s2.substring(0, s2.length - 1)
    );
  }
  return Math.min(
    minimumDeleteSum(s1.substring(0, s1.length - 1), s2) +
      s1.charCodeAt(s1.length - 1),
    minimumDeleteSum(s1, s2.substring(0, s2.length - 1)) +
      s2.charCodeAt(s2.length - 1)
  );
};

// iteration
// 164ms
var minimumDeleteSum = function(s1, s2) {
  const n1 = s1.length;
  const n2 = s2.length;
  const dp = new Array(n1 + 1).fill(null).map(_ => new Array(n2 + 1).fill(0));
  let acc = 0;
  for (let i = 1; i <= n1; i++) {
    acc += s1.charCodeAt(i - 1);
    dp[i][0] = acc;
  }
  acc = 0;
  for (let i = 1; i <= n2; i++) {
    acc += s2.charCodeAt(i - 1);
    dp[0][i] = acc;
  }

  for (let i = 0; i < n1; i++) {
    for (let j = 0; j < n2; j++) {
      if (s1[i] === s2[j]) dp[i + 1][j + 1] = dp[i][j];
      else
        dp[i + 1][j + 1] = Math.min(
          dp[i + 1][j] + s2.charCodeAt(j),
          dp[i][j + 1] + s1.charCodeAt(i)
        );
    }
  }
  // console.log(dp);
  return dp[n1][n2];
};

// best sol from web
// 84 ms
// var minimumDeleteSum = function(s1, s2) {
//   let l1 = s1.length;
//   let l2 = s2.length;
//   let mem = new Array(l1 + 1);
//   for (let i = 0; i < mem.length; i++) {
//     mem[i] = new Array(l2 + 1);
//     for (let j = 0; j < mem[i].length; j++) {
//       mem[i][j] = 0;
//     }
//   }
//   for (let i = 1; i <= l1; i++) {
//     mem[i][0] = s1.charCodeAt(i - 1) + mem[i - 1][0];
//   }
//   for (let i = 1; i <= l2; i++) {
//     mem[0][i] = s2.charCodeAt(i - 1) + mem[0][i - 1];
//   }
//   for (let i = 1; i <= l1; i++) {
//     for (let j = 1; j <= l2; j++) {
//       if (s1.charCodeAt(i - 1) === s2.charCodeAt(j - 1)) {
//         mem[i][j] = mem[i - 1][j - 1];
//       } else {
//         mem[i][j] = Math.min(
//           mem[i - 1][j] + s1.charCodeAt(i - 1),
//           mem[i][j - 1] + s2.charCodeAt(j - 1)
//         );
//       }
//     }
//   }
//   return mem[l1][l2];
// };

console.log(minimumDeleteSum('a', ''));
// 97

console.log(minimumDeleteSum('', 'bc'));
// 197

console.log(minimumDeleteSum('sea', 'eat'));
// 231

console.log(minimumDeleteSum('delete', 'leet'));
// 403
