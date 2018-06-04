/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let from = 0;
  let to = 0;

  for (let i = 0; i < s.length; i++) {
    expand(i, i);
    expand(i, i + 1);
  }

  function expand(i, j) {
    let count = 0;
    while (i >= 0 && j < s.length && s[i] === s[j]) {
      i--;
      j++;
    }
    if (j - i > to - from) {
      from = i;
      to = j;
    }
  }

  return s.substring(from + 1, to);
};

// best sol from web
/**
var longestPalindrome = function(s) {
  var Maxlen = 0;
  var len = 0;
  var first;
  var start;
  var end;
  var offset;
  for (var i = 0; i < s.length; i++) {
    start = i;

    while (i < s.length - 1 && s.charAt(i) === s.charAt(i + 1)) {
      i++;
    }
    end = i;
    len = end - start + 1;
    // console.log(len);
    var offstart = start;
    var offend = end;
    for (
      offset = 1;
      offset <= Math.min(offstart, s.length - offend - 1);
      offset++
    ) {
      if (s[offstart - offset] === s[offend + offset]) {
        len += 2;
        start = start - 1;
        end = end + 1;
      } else {
        break;
      }
    }
    if (len > Maxlen) {
      Maxlen = len;
      first = start;
    }
  }

  return s.substring(first, first + Maxlen);
};
 */

console.log(longestPalindrome('babad'));
// bab

console.log(longestPalindrome('cbbd'));
// bb

console.log(longestPalindrome('abcdedcba'));
// abcdedcba
