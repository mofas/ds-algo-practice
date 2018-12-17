/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
  const n = word.length;

  let c = 0;
  for (let i = n - 1; i > 0; i--) {
    if (word[i].toLocaleLowerCase() !== word[i]) {
      c++;
    }
    if (c !== 0 && c !== n - i) {
      // console.log(c, n - i);
      return false;
    }
  }

  if (c !== 0 && word[0].toLocaleLowerCase() === word[0]) {
    return false;
  }

  return true;
};

// best sol from web
// var detectCapitalUse = function(word) {
//   return (
//     word.slice(1).toLowerCase() === word.slice(1) || word.toUpperCase() === word
//   );
// };

console.log(detectCapitalUse('USA')); //true

console.log(detectCapitalUse('QOOOOO')); //true

console.log(detectCapitalUse('Mr')); //true

console.log(detectCapitalUse('leetcode')); //true

console.log(detectCapitalUse('whosyourdaddy')); //true

console.log(detectCapitalUse('FFFf')); //false

console.log(detectCapitalUse('FlaG')); //false

console.log(detectCapitalUse('mL')); //false
