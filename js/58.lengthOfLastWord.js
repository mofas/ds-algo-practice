/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  const arr = s.trim().split(' ');
  if (arr.length > 0) {
    return arr[arr.length - 1].length;
  }
  return 0;
};

console.log(lengthOfLastWord('Hello World')); // 5

console.log(lengthOfLastWord('a')); // 1
console.log(lengthOfLastWord('a ')); // 1
