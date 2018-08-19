/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
    let from = 0;
    let to = n;
    while (from <= to) {
      let mid = Math.floor((from + to) / 2);
      if (isBadVersion(mid)) {
        if (!isBadVersion(mid - 1)) return mid;
        else to = mid - 1;
      } else {
        from = mid + 1;
      }
    }
  };
};

console.log(solution(n => n >= 4)(10));
// 4

console.log(solution(n => n >= 1098)(4000));
// 1098

console.log(solution(n => n >= 3398123)(50000000));
// 3398123
