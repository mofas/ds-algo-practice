/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
  return s
    .split('')
    .reverse()
    .join('');
};

// fatest version from web
var reverseString = function(s) {
  // this step is critical!!! do not use s.length < 2
  if (s.length === 1 || s.length === 0) {
    return s;
  }

  let newString = '';

  for (let i = s.length - 1; i >= 0; i--) {
    newString = newString + s[i];
  }

  return newString;
};
