/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
  if (s.length === 0) return 0;
  let matched = s.match(/\S+/gi);
  console.log(matched);
  if (matched) {
    return matched.length;
  }
  return 0;
};

console.log(countSegments('')); // 0

console.log(countSegments('hello')); // 1

console.log(countSegments('                ')); // 0

console.log(countSegments('Hello, my name is John')); // 5
