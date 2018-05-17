/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function(arr) {
  let len = arr.length;
  let max = 0;
  let count = 0;
  for (let i = 0; i < len; i++) {
    max = Math.max(arr[i], max);
    if (i === max) {
      count++;
    }
  }
  return count;
};

console.log(maxChunksToSorted([4, 3, 2, 1, 0])); // 1

console.log(maxChunksToSorted([1, 0, 2, 3, 4])); // 4

console.log(maxChunksToSorted([0, 2, 1, 4, 3])); // 3

console.log(maxChunksToSorted([1, 2, 0, 4, 3])); // 2

console.log(maxChunksToSorted([1, 0, 2, 4, 3])); // 3

console.log(maxChunksToSorted([0, 4, 2, 3, 1])); // 2

console.log(maxChunksToSorted([1, 2, 0, 3])); // 2
