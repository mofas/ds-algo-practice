/**
 * @param {string} dominoes
 * @return {string}
 */

// 96 ms
var pushDominoes = function(dominoes) {
  const ret = dominoes.split('');
  const n = dominoes.length;
  for (let i = 0; i < n; i++) {
    if (ret[i] === 'L') {
      let j = i - 1;
      while (j >= 0 && ret[j] === '.') {
        ret[j] = 'L';
        j--;
      }
    } else if (ret[i] === 'R') {
      let j = i + 1;
      while (j < n && ret[j] === '.') {
        j++;
      }
      if (ret[j] === 'L') {
        let k = i + 1;
        i = j;
        j--;
        while (k < j) {
          ret[k++] = 'R';
          ret[j--] = 'L';
        }
        // console.log('mmm', ret);
      } else {
        let k = i + 1;
        while (ret[k] === '.') {
          ret[k++] = 'R';
        }
        i = k - 1;
      }
    }
  }
  return ret.join('');
};

console.log(pushDominoes('.RR...'));
// '.RRRRR'

console.log(pushDominoes('.L.R...LR..L..'));
// 'LL.RR.LLRRLL..'

console.log(pushDominoes('RR.L'));
// 'RR.L'

console.log(pushDominoes('.RR....L'));
// '.RRRRLLL'
