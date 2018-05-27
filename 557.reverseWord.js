/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  return s
    .split(' ')
    .map(d =>
      d
        .split('')
        .reverse()
        .join('')
    )
    .join(' ');
};

// fatest sol from web

// var reverseWords = function(s) {
//   s = s.split(' ');
//   let temp = '';

//   for (i = 0; i < s.length; i++) {
//     let subTemp = '';
//     for (j = s[i].length - 1; j >= 0; j--) {
//       subTemp += s[i][j];
//     }

//     temp += subTemp;
//     if (i != s.length - 1) temp += ' ';
//   }

//   return temp;
// };

console.log(reverseWords("Let's take LeetCode contest"));
