/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function(words) {
  const hash = new Set(words);
  let ret = '';
  let max = 0;

  words.forEach(w => {
    if (w.length > max || (w.length === max && w < ret)) {
      let valid = true;
      for (let i = 1; i < w.length; i++) {
        if (!hash.has(w.substring(0, i))) {
          valid = false;
          break;
        }
      }
      if (valid) {
        max = w.length;
        ret = w;
        // console.log('is valid', w, ret);
      }
    }
  });

  return ret;
};

// best sol from web
// var longestWord = function(words) {
//   let longest = '';
//   const wordSet = new Set(words);
//   for (let word of words) {
//     if (
//       word.length > longest.length ||
//       (word.length === longest.length && word < longest)
//     ) {
//       let goodWord = true;
//       for (let i = 1; i < word.length; i++) {
//         if (!wordSet.has(word.slice(0, i))) {
//           goodWord = false;
//           break;
//         }
//       }
//       if (goodWord) {
//         longest = word;
//       }
//     }
//   }
//   return longest;
// };

console.log(longestWord(['w', 'wo', 'wor', 'worl', 'world']));
// world

console.log(
  longestWord(['a', 'banana', 'app', 'appl', 'ap', 'apply', 'apple'])
);
// apple
