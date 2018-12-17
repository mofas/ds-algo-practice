/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  const charCount = {};

  const n = magazine.length;
  for (let i = 0; i < n; i++) {
    charCount[magazine[i]] = charCount[magazine[i]]
      ? charCount[magazine[i]] + 1
      : 1;
  }

  // console.log(charCount);
  const m = ransomNote.length;
  for (let i = 0; i < m; i++) {
    if (!charCount[ransomNote[i]]) {
      return false;
    }
    charCount[ransomNote[i]]--;
  }
  return true;
};

// best ans from web
// using bucket to acclerate!!

// var canConstruct = function(ransomNote, magazine) {
//   let count1 = new Array(26).fill(0);
//   let count2 = new Array(26).fill(0);

//   for (let i = 0; i < ransomNote.length; i++) {
//     count1[ransomNote.charCodeAt(i) - 97]++;
//   }

//   for (let i = 0; i < magazine.length; i++) {
//     count2[magazine.charCodeAt(i) - 97]++;
//   }

//   for (let i = 0; i < 26; i++) {
//     if (count2[i] < count1[i]) return false;
//   }
//   return true;
// };

console.log(canConstruct('a', 'b')); // false
console.log(canConstruct('aa', 'ab')); // false
console.log(canConstruct('aa', 'aab')); // true
