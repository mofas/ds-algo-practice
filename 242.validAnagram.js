/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  const hash = {};
  for (let i = 0; i < s.length; i++) {
    hash[s[i]] = hash[s[i]] || 0;
    hash[s[i]]++;
  }
  for (let i = 0; i < t.length; i++) {
    if (!hash[t[i]]) return false;
    hash[t[i]]--;
  }

  let chars = Object.keys(hash);

  for (let i = 0; i < chars.length; i++) {
    if (hash[chars[i]]) return false;
  }

  return true;
};

// best sol from web
// var isAnagram = function(s, t) {
//   if (s.length != t.length) return false;

//   let table = new Array(26).fill(0);

//   for (let i = 0; i < s.length; i++) {
//     table[s.charCodeAt(i) - 97]++;
//     table[t.charCodeAt(i) - 97]--;
//   }

//   for (let j = 0; j < 26; j++) {
//     if (table[j] != 0) return false;
//   }

//   return true;
// };

console.log(isAnagram('anagram', 'nagaram'));
// true

console.log(isAnagram('rat', 'car'));
// false

console.log(isAnagram('ab', 'a'));
// false
