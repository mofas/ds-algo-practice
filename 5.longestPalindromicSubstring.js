/**
 * @param {string} s
 * @return {string}
 */

// heavy optimized
var longestPalindrome = function(s) {
  let from = 0;
  let to = 0;

  const n = s.length;

  if (n === 0) return '';
  if (n == 1) return s;

  for (let i = 0; i < n; i++) {
    if (n - i <= (to - from) / 2) break;

    let j = i;
    let k = i;

    // skip duplicate
    while (k < n - 1 && s[k + 1] === s[k]) k++;
    i = k;

    while (j >= 0 && k < s.length && s[j] === s[k]) {
      j--;
      k++;
    }
    if (k - j > to - from) {
      from = j;
      to = k;
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

string longestPalindrome(string s) {
    if (s.empty()) return "";
    if (s.size() == 1) return s;
    int min_start = 0, max_len = 1;
    for (int i = 0; i < s.size();) {
      if (s.size() - i <= max_len / 2) break;
      int j = i, k = i;
      while (k < s.size()-1 && s[k+1] == s[k]) ++k; // Skip duplicate characters.
      i = k+1;
      while (k < s.size()-1 && j > 0 && s[k + 1] == s[j - 1]) { ++k; --j; } // Expand.
      int new_len = k - j + 1;
      if (new_len > max_len) { min_start = j; max_len = new_len; }
    }
    return s.substr(min_start, max_len);
}

 */

console.log(longestPalindrome('babad'));
// bab

console.log(longestPalindrome('cbbd'));
// bb

console.log(longestPalindrome('abcdedcba'));
// abcdedcba
