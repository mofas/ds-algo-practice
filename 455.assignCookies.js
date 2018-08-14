/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
// 100 ms
var findContentChildren = function(g, s) {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  let res = 0;
  for (const ss of s) {
    for (let i = 0; i < g.length; i++) {
      if (ss >= g[i]) {
        res++;
        g.splice(i, 1);
        break;
      }
      if (g[i] > ss) break;
    }
    // console.log(ss, g);
  }
  return res;
};

// best sol from web
// 84ms
// var findContentChildren = (findContentChildren = function(g, s) {
//   g.sort((a, b) => a - b);
//   s.sort((a, b) => a - b);
//   let i, j;
//   for (i = 0, j = 0; j < s.length; j++) {
//     if (g[i] <= s[j]) i++;
//     if (i === g.length) break;
//   }
//   return i;
// });

console.log(findContentChildren([1, 2, 3], [1, 1]));
// 1

console.log(findContentChildren([1, 2], [1, 2, 3]));
// 2

console.log(findContentChildren([1, 2, 14, 5, 9], [4, 2, 3, 5]));
// 3
