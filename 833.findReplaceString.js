/**
 * @param {string} S
 * @param {number[]} indexes
 * @param {string[]} sources
 * @param {string[]} targets
 * @return {string}
 */
var findReplaceString = function(S, indexes, sources, targets) {
  let ret = S;

  const package = indexes
    .map((idx, i) => {
      return {
        idx,
        source: sources[i],
        target: targets[i]
      };
    })
    .sort((a, b) => b.idx - a.idx);

  // console.log(package);

  package.forEach(({ idx, source, target }) => {
    // console.log(S.indexOf(source, idx));
    if (S.indexOf(source, idx) === idx) {
      ret = ret.substring(0, idx) + target + ret.substring(idx + source.length);
      // console.log(ret);
    }
  });

  return ret;
};

console.log(findReplaceString('abcd', [0, 2], ['a', 'cd'], ['eee', 'ffff']));
// 'eeebffff'

console.log(findReplaceString('abcd', [0, 2], ['ab', 'ec'], ['eee', 'ffff']));
// 'eeecd

console.log(
  findReplaceString(
    'vmokgggqzp',
    [3, 5, 1],
    ['kg', 'ggq', 'mo'],
    ['s', 'so', 'bfr']
  )
);
// 'vbfrssozp'
