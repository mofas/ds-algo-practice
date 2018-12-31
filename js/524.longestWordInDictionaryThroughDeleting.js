/**
 * @param {string} s
 * @param {string[]} d
 * @return {string}
 */
// 72ms, beat 100%
var findLongestWord = function(s, d) {
  const sLen = s.length;
  let minCount = s.length;
  let minCandidate = '';
  for (const word of d) {
    const wLen = word.length;
    let scanIdx = 0;
    let j = 0;
    while (j < wLen) {
      scanIdx = s.indexOf(word[j], scanIdx);
      if (scanIdx === -1) {
        break;
      }
      scanIdx++;
      j++;
    }
    if (scanIdx > -1) {
      const deleteCount = sLen - wLen;
      // console.log(word, deleteCount);
      if (deleteCount < minCount) {
        minCount = deleteCount;
        minCandidate = word;
      } else if (deleteCount === minCount && word < minCandidate) {
        minCandidate = word;
      }
    }
  }
  return minCandidate;
};

console.log(findLongestWord('abpcplea', ['ale', 'apple', 'monkey', 'plea']));
// apple

console.log(findLongestWord('abpcplea', ['a', 'b', 'c']));
// a

console.log(findLongestWord('bab', ['ba', 'ab', 'a', 'b']));
// ab
