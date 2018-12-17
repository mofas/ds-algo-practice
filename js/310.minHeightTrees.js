/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */

// Pure BFS
// so slow 2304ms
var findMinHeightTrees = function(n, edges) {
  const edgesMap = {};
  if (n === 0) return [];

  for (const [from, to] of edges) {
    if (!edgesMap[from]) edgesMap[from] = [];
    if (!edgesMap[to]) edgesMap[to] = [];
    edgesMap[from].push(to);
    edgesMap[to].push(from);
  }

  const calculateLen = node => {
    const queue = [[node, 0]];
    const seen = new Set([node]);
    let ret = 0;
    while (queue.length > 0) {
      const [t, count] = queue.shift();
      if (count > ret) ret = count;
      for (const next of edgesMap[t] || []) {
        if (!seen.has(next)) {
          seen.add(next);
          queue.push([next, count + 1]);
        }
      }
    }
    return ret;
  };

  let queue = [0];
  let seen = new Set([0]);
  let leaf = 0;
  while (queue.length > 0) {
    const t = queue.shift();
    for (const next of edgesMap[t] || []) {
      if (!seen.has(next)) {
        seen.add(next);
        queue.push(next);
        leaf = next;
      }
    }
  }

  queue = [[leaf, 0]];
  seen = new Set([leaf]);
  const distMap = {};
  let length = 0;
  while (queue.length > 0) {
    const [t, count] = queue.shift();
    if (count > length) length = count;
    if (!distMap[count]) distMap[count] = [];
    distMap[count].push(t);
    for (const next of edgesMap[t] || []) {
      if (!seen.has(next)) {
        seen.add(next);
        queue.push([next, count + 1]);
      }
    }
  }

  // console.log('distMap', distMap);

  const searchMid = Math.floor(length / 2);
  const searchFrom = Math.max(0, searchMid - 1);
  const searchTo = searchMid + 1;
  let cands = [];
  for (let i = searchFrom; i <= searchTo; i++) {
    cands = cands.concat(distMap[i] || []);
  }

  // console.log('cands', cands);

  let min = Infinity;
  const depthMap = {};

  for (const cand of cands) {
    const length = calculateLen(cand);
    if (!depthMap[length]) depthMap[length] = [];
    depthMap[length].push(cand);
    // console.log('checked', cand, length);
    if (length < min) min = length;
  }

  return depthMap[min];
};

// best sol from web
// 88 ms (72 ms if manually optimized)

// it method is pretty cool
// gradually remove edge node
// the only question is why it will at most 2 nodes can be roots?
// var findMinHeightTrees = function(n, edges) {
//   if (!edges.length) return [0];

//   const inMap = Array(n).fill(0);
//   const adj = [...Array(n)].map(r => []);

//   for (let [u, v] of edges) {
//     inMap[u]++;
//     inMap[v]++;
//     adj[u].push(v);
//     adj[v].push(u);
//   }

//   let queue = [];
//   for (let i = 0; i < n; i++) {
//     if (inMap[i] === 1) {
//       queue.push(i);
//     }
//   }
//   // console.log('queue', queue);

//   let count = n;
//   while (count > 2) {
//     let next = [];
//     for (let v of queue) {
//       count--;
//       for (let nv of adj[v]) {
//         inMap[nv]--;
//         if (inMap[nv] === 1) {
//           next.push(nv);
//         }
//       }
//       // console.log('next', inMap, next);
//     }
//     queue = next;
//   }

//   return queue;
// };

console.log(findMinHeightTrees(1, []));
// [0]

console.log(findMinHeightTrees(3, [[0, 1], [0, 2]]));
// [0]

console.log(findMinHeightTrees(2, [[0, 1]]));
// [0, 1]

console.log(findMinHeightTrees(4, [[1, 0], [1, 2], [1, 3]]));
// [1]

console.log(findMinHeightTrees(6, [[0, 3], [1, 3], [2, 3], [4, 3], [5, 4]]));
// [3, 4]

/**
console.log(
  findMinHeightTrees(10, [
    [0, 1],
    [0, 2],
    [0, 3],
    [2, 4],
    [0, 5],
    [5, 6],
    [6, 7],
    [2, 8],
    [7, 9]
  ])
);
// [5]

console.log(
  findMinHeightTrees(84, [
    [0, 1],
    [1, 2],
    [2, 3],
    [1, 4],
    [0, 5],
    [0, 6],
    [6, 7],
    [0, 8],
    [1, 9],
    [7, 10],
    [8, 11],
    [5, 12],
    [8, 13],
    [13, 14],
    [5, 15],
    [14, 16],
    [10, 17],
    [13, 18],
    [16, 19],
    [14, 20],
    [8, 21],
    [8, 22],
    [16, 23],
    [1, 24],
    [15, 25],
    [11, 26],
    [9, 27],
    [17, 28],
    [26, 29],
    [27, 30],
    [17, 31],
    [0, 32],
    [31, 33],
    [33, 34],
    [33, 35],
    [16, 36],
    [17, 37],
    [0, 38],
    [34, 39],
    [27, 40],
    [37, 41],
    [38, 42],
    [21, 43],
    [17, 44],
    [20, 45],
    [17, 46],
    [40, 47],
    [45, 48],
    [39, 49],
    [11, 50],
    [25, 51],
    [3, 52],
    [23, 53],
    [47, 54],
    [43, 55],
    [28, 56],
    [11, 57],
    [52, 58],
    [20, 59],
    [48, 60],
    [37, 61],
    [11, 62],
    [43, 63],
    [36, 64],
    [64, 65],
    [53, 66],
    [14, 67],
    [47, 68],
    [61, 69],
    [25, 70],
    [5, 71],
    [25, 72],
    [23, 73],
    [51, 74],
    [25, 75],
    [43, 76],
    [35, 77],
    [38, 78],
    [66, 79],
    [53, 80],
    [67, 81],
    [6, 82],
    [82, 83]
  ])
);
// [0, 6]
 */
