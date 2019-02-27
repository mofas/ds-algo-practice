/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

// 136ms (57%) 24.1MB (17%)
var checkInclusion = function(s1, s2) {
  const s1Len = s1.length;
  const s2Len = s2.length;
  const reSet = {};
  for (const c of s1) {
    reSet[c] = reSet[c] || 0;
    reSet[c]++;
  }

  const checkIsSubset = (s1, s2) => {
    for (const key in s1) {
      if (!s2[key] || s2[key] < s1[key]) return false;
    }
    return true;
  };

  const testSet = {};
  for (let i = 0; i < s2Len; i++) {
    const c = s2[i];
    testSet[c] = testSet[c] || 0;
    if (i < s1Len) {
      testSet[c]++;
    } else {
      if (i === s1Len && checkIsSubset(reSet, testSet)) return true;
      const ch = s2[i - s1Len];
      testSet[ch]--;
      testSet[c]++;
      // only check if c is in s1
      if (reSet[c] && checkIsSubset(reSet, testSet)) return true;
    }
  }
  return checkIsSubset(reSet, testSet);
};

// best sol
// 60ms
var checkInclusion = function(s1, s2) {
  let map = new Array(26).fill(0);
  let aCode = 'a'.charCodeAt(0);
  let len1 = s1.length,
    len2 = s2.length;

  function checkAllZero(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== 0) return false;
    }
    return true;
  }

  for (let i = 0; i < len1; i++) {
    map[s1.charCodeAt(i) - aCode]--;
    map[s2.charCodeAt(i) - aCode]++;
  }
  if (checkAllZero(map)) return true;

  for (let i = len1; i < len2; i++) {
    map[s2.charCodeAt(i - len1) - aCode]--;
    map[s2.charCodeAt(i) - aCode]++;
    if (checkAllZero(map)) return true;
  }
  return false;
};

console.log(checkInclusion('ab', 'eidbaooo'));
// true
console.log(checkInclusion('a', 'ab'));
// true
console.log(checkInclusion('ab', 'ab'));
// true

console.log(checkInclusion('ab', 'eidboaoo'));
// false
