/**
 * @param {string[]} strs
 * @return {string[][]}
 */

// extremely slow.
var groupAnagrams = function(strs) {
  let cache = {};
  strs.forEach(d => {
    let bucket = new Array(26).fill(0);
    for (let i = 0; i < d.length; i++) {
      bucket[d.charCodeAt(i) - 97]++;
    }
    let hash = '';
    for (let i = 0; i < 26; i++) {
      hash += String.fromCharCode(i + 97).repeat(bucket[i]);
    }
    cache[hash] = cache[hash] || [];
    cache[hash].push(d);
  });
  // console.log(cache);

  return Object.values(cache);
};

// best sol from web, using prime to
// const primes = [
//   2,
//   3,
//   5,
//   7,
//   11,
//   13,
//   17,
//   19,
//   23,
//   29,
//   31,
//   37,
//   41,
//   43,
//   47,
//   53,
//   59,
//   61,
//   67,
//   71,
//   73,
//   79,
//   83,
//   89,
//   97,
//   101
// ];

// const alphaToInteger = x => x.charCodeAt(0) - 97;
// const alphaToPrime = x => primes[alphaToInteger(x)];

// /**
//  * @param {string[]} strs
//  * @return {string[][]}
//  */
// var groupAnagrams = function(strs) {
//   const hashStr = s => {
//     let hash = 1;
//     for (let i = 0; i < s.length; i++) {
//       hash *= alphaToPrime(s[i]);
//     }
//     return hash;
//   };

//   const map = {};
//   for (let i = 0; i < strs.length; i++) {
//     const curr = strs[i];
//     const hash = hashStr(curr);
//     if (map[hash]) {
//       map[hash].push(curr);
//     } else {
//       map[hash] = [curr];
//     }
//   }

//   return Object.values(map);
// };

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
// [['ate', 'eat', 'tea'], ['nat', 'tan'], ['bat']];
