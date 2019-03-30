/**
 * @param {string[]} words
 * @return {string}
 */
// https://leetcode.com/problems/alien-dictionary/discuss/70115/3ms-Clean-Java-Solution-(DFS)
// 72ms
var alienOrder = function(words) {
  // 26x26 matrix
  const based = 'a'.charCodeAt(0);
  const adjMatrix = new Array(26).fill(null).map(_ => new Array(26).fill(0));
  const visited = new Array(26).fill(-1); // -1 for not even existed
  // build graph
  for (let i = 0; i < words.length; i++) {
    for (let k = 0; k < words[i].length; k++) {
      visited[words[i].charCodeAt(k) - based] = 0;
    }
    if (i > 0) {
      const w1 = words[i - 1];
      const w2 = words[i];
      const len = Math.min(w1.length, w2.length);
      for (let j = 0; j < len; j++) {
        const c1 = w1.charCodeAt(j);
        const c2 = w2.charCodeAt(j);
        if (c1 != c2) {
          adjMatrix[c1 - based][c2 - based] = 1;
          break;
        }
      }
    }
  }

  const ret = [];

  // dfs
  const dfs = i => {
    visited[i] = 1;
    for (let j = 0; j < 26; j++) {
      if (adjMatrix[i][j]) {
        // cycle
        if (visited[j] === 1) return false;
        if (visited[j] === 0) {
          if (!dfs(j)) {
            return false;
          }
        }
      }
    }
    visited[i] = 2;
    ret.push(String.fromCharCode(i + based));
    return true;
  };

  for (let i = 0; i < 26; i++) {
    // not visited before
    if (visited[i] === 0) {
      if (!dfs(i)) return '';
    }
  }
  return ret.reverse().join('');
};

// best
// 56ms
// var alienOrder = function(words) {
//   let relation = new Map();
//   for (let i = 0; i < words.length - 1; i++) {
//     let curr = words[i],
//       next = words[i + 1],
//       minLen = Math.min(curr.length, next.length);
//     let j = 0;
//     while (j < minLen && curr[j] === next[j]) j++;
//     if (j < minLen) {
//       if (!relation.has(curr[j])) relation.set(curr[j], []);
//       relation.get(curr[j]).push(next[j]);
//     }
//   }
//   let order = [],
//     visited = new Set(),
//     visiting = new Set();
//   for (let key of relation.keys()) {
//     if (hasCycle(order, relation, visited, visiting, key)) return '';
//   }

//   let remaining = [];
//   for (let word of words) {
//     for (let char of word) {
//       if (!visited.has(char)) {
//         visited.add(char);
//         remaining.push(char);
//       }
//     }
//   }

//   order = order.concat(remaining.sort());
//   return order.join('');
// };
// const hasCycle = (order, relation, visited, visiting, key) => {
//   if (visited.has(key)) return false;
//   if (visiting.has(key)) return true;

//   visiting.add(key);
//   let nextChars = relation.has(key) ? relation.get(key) : [];
//   for (let next of nextChars) {
//     if (hasCycle(order, relation, visited, visiting, next)) return true;
//   }
//   visiting.delete(key);
//   visited.add(key);
//   order.unshift(key);
//   return false;
// };

console.log(alienOrder(['wrt', 'wrf', 'er', 'ett', 'rftt']));
// 'wertf'

console.log(alienOrder(['z', 'x']));
// 'zx'

console.log(alienOrder(['z', 'x', 'z']));
// ''
