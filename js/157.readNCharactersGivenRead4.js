// Bad question

/**
 * Definition for read4()
 *
 * @param {character[]} buf Destination buffer
 * @return {number} The number of characters read
 * read4 = function(buf) {
 *     ...
 * };
 */

/**
 * @param {function} read4()
 * @return {function}
 */
var solution = function(read4) {
  /**
   * @param {character[]} buf Destination buffer
   * @param {number} n Maximum number of characters to read
   * @return {number} The number of characters read
   */
  let temp = [];
  return function(buf, n) {
    let c = 0;
    while (c < n) {
      if (temp.length === 0 && read4(temp) === 0) {
        return c;
      }
      buf.push(temp.shift());
      c++;
    }
    return c;
  };
};
