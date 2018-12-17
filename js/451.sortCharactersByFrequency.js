/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
  const hash = {};
  for (let i = 0; i < s.length; i++) {
    if (hash[s[i]]) hash[s[i]]++;
    else hash[s[i]] = 1;
  }
  let charArr = Object.keys(hash).map(key => {
    return key.repeat(hash[key]);
  });

  charArr.sort((a, b) => b.length - a.length);
  // console.log(charArr);
  return charArr.join('');
};

// best sol from web
// var frequencySort = function(s) {
//   let result = '';
//   let count = s.split('').reduce((obj, ch) => {
//     obj[ch] = (obj[ch] || 0) + 1;
//     return obj;
//   }, {});
//   let sorted = Object.keys(count).sort((a, b) => count[b] - count[a]);
//   sorted.forEach(char => (result += char.repeat(count[char])));
//   return result;
// };

console.log(frequencySort('tree'));
// eert

console.log(frequencySort('cccaaa'));
// cccaaa

console.log(frequencySort('Aabb'));
// bbAa
