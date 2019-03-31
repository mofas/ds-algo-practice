/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */

// Runtime: 68 ms, faster than 97.08%
// Memory Usage: 37.5 MB, less than 97.83%
var licenseKeyFormatting = function(S, K) {
  let rawS = S.replace(/-/g, '').toUpperCase();
  let end = rawS.length;
  let ret = [];
  while (end > 0) {
    ret.push(rawS.substring(end - K, end));
    end -= K;
  }
  return ret.reverse().join('-');
};

console.log(licenseKeyFormatting('5F3Z-2e-9-w', 4));
// '5F3Z-2E9W'
