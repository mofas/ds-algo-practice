/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
  const n = citations.length;
  const hash = {};
  citations.forEach(d => {
    if (d > n) {
      d = n;
    }
    if (hash[d]) hash[d]++;
    else hash[d] = 1;
  });

  let arr = Object.keys(hash);
  arr = arr.map(d => +d).sort((a, b) => b - a);
  // console.log(arr);
  let acc = 0;
  let max = arr[0];
  let arrIdx = 0;
  for (let i = max; i >= 0; i--) {
    if (hash[i]) {
      arrIdx++;
      acc += hash[i];
    }
    if (acc >= i) return i;
    // otherwise we can decrease quickly
    // console.log('before', i);
    i = Math.max(arrIdx < arr.length ? arr[arrIdx] : 1, acc) + 1;
    // console.log('after', i);
  }
  return 0;
};

// best sol from web
// var hIndex = function(citations) {
//   const len = citations.length,
//     buckets = Array(len + 1).fill(0);
//   let sum = 0;
//   for (let i = 0; i < len; i++) {
//     if (citations[i] > len) {
//       buckets[len]++;
//     } else {
//       buckets[citations[i]]++;
//     }
//   }
//   for (let j = len; j >= 0; j--) {
//     sum += buckets[j];
//     if (sum >= j) {
//       return j;
//     }
//   }
//   return 0;
// };

console.log(hIndex([100]));
// 1

console.log(hIndex([3, 0, 6, 1, 5]));
// 3

console.log(hIndex([100, 100, 100, 1]));
// 3

console.log(hIndex([100, 100, 100, 1, 1, 1, 1]));
// 3
