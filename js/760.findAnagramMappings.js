/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var anagramMappings = function(A, B) {
  const hash = {};
  for (let i = 0; i < B.length; i++) {
    hash[B[i]] = i;
  }
  return A.map(d => Number(hash[d]));
};

console.log(anagramMappings([12, 28, 46, 32, 50], [50, 12, 32, 46, 28]));
// [1, 4, 3, 2, 0]
