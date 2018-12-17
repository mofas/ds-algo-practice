/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
  const reg1 = /^[qwertyuiop]+$/i;
  const reg2 = /^[asdfghjkl]+$/i;
  const reg3 = /^[zxcvbnm]+$/i;
  return words.filter(d => {
    return reg1.test(d) || reg2.test(d) || reg3.test(d);
  });
};

console.log(findWords(['Hello', 'Alaska', 'Dad', 'Peace']));
// ["Alaska", "Dad"]
