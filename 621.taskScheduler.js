/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */

// brute force
// var leastInterval = function(tasks, n) {
//   const hash = {};

//   tasks.forEach(d => {
//     hash[d] = hash[d] ? hash[d] + 1 : 1;
//   });

//   let freq = Object.keys(hash)
//     .map(d => {
//       return hash[d];
//     })
//     .sort((a, b) => b - a);

//   let interval = 0;
//   let total = freq.reduce((acc, d) => acc + d, 0);
//   while (total > 0) {
//     let target = n;
//     const fl = freq.length;
//     // console.log(freq);
//     if (fl > n) {
//       for (let i = 0; i <= n; i++) {
//         freq[i] = freq[i] - 1;
//       }
//       interval += n + 1;
//       total -= n + 1;
//       freq = freq.filter(d => d > 0).sort((a, b) => b - a);
//     } else {
//       freq = freq.map(d => d - 1).filter(d => d > 0);
//       if (freq.length === 0) {
//         interval += fl;
//       } else {
//         interval += n + 1;
//       }
//       total -= fl;
//     }
//     // console.log(interval);
//   }
//   return interval;
// };

// standard answer for website
var leastInterval = function(tasks, n) {
  const len = tasks.length;
  if (n < 1 || len < 2) {
    return len;
  }

  let freq = new Array(26).fill(0);
  for (let i = 0; i < len; i++) {
    let index = tasks[i].charCodeAt(0) - 'A'.charCodeAt(0);
    freq[index]++;
  }
  let maxFreq = 0;
  for (let i = 0; i < 26; i++) {
    maxFreq = Math.max(maxFreq, freq[i]);
  }
  let maxFreqTaskN = 0;
  for (let i = 0; i < 26; i++) {
    if (maxFreq === freq[i]) maxFreqTaskN++;
  }
  if (maxFreqTaskN > n) return len;

  const requiredSpace = (maxFreq - 1) * (n + 1) + maxFreqTaskN;
  const emptySpace = (n + 1 - maxFreqTaskN) * (maxFreq - 1);
  const remainTasks = len - maxFreq * maxFreqTaskN;
  if (remainTasks > emptySpace) {
    return requiredSpace + remainTasks - emptySpace;
  } else {
    return requiredSpace;
  }
};

console.log(
  leastInterval(['A', 'A', 'A', 'A', 'A', 'A', 'B', 'C', 'D', 'E', 'F', 'G'], 2)
); // 16

// A B C A D E A F G A _ _ A _ _ A -> 16

console.log(leastInterval(['A', 'A'], 3)); // 5

console.log(leastInterval(['A', 'A', 'B', 'B'], 2)); // 5

console.log(leastInterval(['A', 'A', 'A', 'B', 'C'], 2)); // 7

console.log(leastInterval(['A', 'A', 'A', 'B', 'B', 'B'], 2)); // 8

console.log(leastInterval(['A', 'A', 'A', 'B', 'B', 'B', 'C', 'C'], 2)); // 8

console.log(leastInterval(['A', 'A', 'A', 'C', 'B', 'B', 'B'], 2)); // 8

console.log(leastInterval(['A', 'A', 'B', 'B', 'C', 'C', 'D'], 2)); // 7
