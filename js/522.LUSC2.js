/**
 * @param {string[]} strs
 * @return {number}
 */
var findLUSlength = function(strs) {
  let cache = {};

  for (const s of strs) {
    cache[s] = cache[s] ? cache[s] + 1 : 1;
  }

  // console.log(cache);
  const isSubsequence = (str, query) => {
    // i is scan for str, j is scan query
    const n = str.length,
      m = query.length;
    let i = 0,
      j = 0;
    while (i < n) {
      const t = query.charAt(j++);
      i = str.indexOf(t, i);
      if (i === -1) {
        return false;
      }
      i++;
    }
    return j >= m;
  };

  strs.sort((a, b) => b.length - a.length);
  for (let i = 0; i < strs.length; i++) {
    const s = strs[i];
    if (cache[s] === 1) {
      // check s is not the substring of all other previous strings.
      let isSubSeq = false;
      for (let j = 0; j < i; j++) {
        const s2 = strs[j];
        // console.log(s2, s, isSubsequence(s2, s));
        if (isSubsequence(s2, s)) {
          isSubSeq = true;
          break;
        }
      }
      if (!isSubSeq) {
        return s.length;
      }
    }
  }

  return -1;
};

console.log(findLUSlength(['aba', 'cdc', 'eae']));
// 3

console.log(findLUSlength(['aaa', 'aaa', 'aa']));
// -1

console.log(findLUSlength(['aabbcc', 'aabbcc', 'cb', 'abc']));
// 2
