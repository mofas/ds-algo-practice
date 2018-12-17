/**
 * @param {string} S
 * @return {number[]}
 */
// 64ms
var partitionLabels = function(S) {
  const n = S.length;
  let res = [];
  for (let i = 0; i < n; i++) {
    let str = S[i];
    const set = new Set([S[i]]);
    const cand = [S[i]];
    let start = i;

    while (cand.length > 0) {
      const searchTarget = cand.pop();
      for (let j = n - 1; j > i; j--) {
        if (S[j] === searchTarget) {
          for (let k = i + 1; k < j; k++) {
            if (!set.has(S[k])) {
              cand.push(S[k]);
              set.add(S[k]);
            }
          }
          i = j;
          break;
        }
      }
    }

    // console.log(start, i, S.substring(start, i + 1));
    res.push(i - start + 1);
  }

  return res;
};

console.log(partitionLabels('ababcbacadefegdehijhklij'));
// [9, 7, 8] "ababcbaca", "defegde", "hijhklij".

console.log(partitionLabels('caedbdedda'));
// [1, 9]
