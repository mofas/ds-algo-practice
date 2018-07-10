/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
// too slow!!!
// the test time is 5000ms
var findAnagrams = function(s, p) {
  let hash = {};
  p.split('').forEach(d => {
    if (hash[d]) hash[d]++;
    else hash[d] = 1;
  });
  // console.log(hash);

  let ret = [];
  let checkHash = {};

  for (let i = 0; i < s.length - p.length + 1; i++) {
    if (!hash[s[i]]) continue;

    Object.keys(hash).forEach(key => {
      checkHash[key] = hash[key];
    });

    let valid = true;
    for (let j = 0; j < p.length; j++) {
      // console.log(s[i + j], checkHash[s[i + j]]);
      if (checkHash[s[i + j]]) {
        checkHash[s[i + j]]--;
      } else {
        valid = false;
        break;
      }
    }
    // console.log('i', i, valid);
    if (valid) {
      ret.push(i);
    }
  }
  return ret;
};

// best sol from web
// test time is 76ms
// let findAnagrams = function(s, p) {
//   let pLen = p.length;
//   let sLen = s.length;

//   let hash = new Array(256).fill(0);
//   for (let i = 0; i < pLen; i++) {
//     hash[p.charCodeAt(i)]++;
//   }

//   let result = [];

//   let left = 0;
//   let right = 0;
//   let count = pLen;
//   while (right < sLen) {
//     if (hash[s.charCodeAt(right++)]-- > 0) {
//       count--;
//     }
//     if (count === 0) {
//       result.push(left);
//     }
//     if (right - left === pLen && hash[s.charCodeAt(left++)]++ >= 0) {
//       count++;
//     }
//   }
//   return result;
// };

// my own version
// test time is 96ms
var findAnagrams = function(s, p) {
  let hash = {};
  p.split('').forEach(d => {
    if (hash[d]) hash[d]++;
    else hash[d] = 1;
  });

  let ret = [];

  let matchCount = p.length;
  let left = 0;
  for (let i = 0; i < s.length; i++) {
    // console.log('enter', left, i, s.substring(left, i), hash, matchCount);
    if (hash[s[i]] != null) {
      if (hash[s[i]] > 0) matchCount--;
      hash[s[i]]--;
      // console.log('match', s[i], hash, matchCount);
      if (matchCount === 0) ret.push(left);
    }
    if (i - left === p.length - 1) {
      if (hash[s[left]] != null) {
        if (hash[s[left]] >= 0) matchCount++;
        hash[s[left]]++;
      }
      left++;
    }
  }
  return ret;
};

console.log(findAnagrams('cbaebabacd', 'abc'));
// [0, 6]

console.log(findAnagrams('abab', 'ab'));
// [0, 1, 2]

console.log(findAnagrams('aaaaabaaaaa', 'aaaaa'));
// [0, 6];
