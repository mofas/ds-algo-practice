/**
 * @param {number} N
 * @param {number[][]} edges
 * @return {number[]}
 */

// pretty good
// but it is still O(n^2)
// but exceed the memory usage for N === 10000
// var sumOfDistancesInTree = function(N, edges) {
//   let cache = new Array(N).fill(0).map(_ => new Array(N).fill(null));
//   let ret = [];

//   edges.forEach(([from, to]) => {
//     cache[Math.min(from, to)][Math.max(from, to)] = 1;
//   });

//   for (let i = 0; i < N; i++) {
//     let record = { [i]: true };
//     let queue = [];
//     for (let j = 0; j < N; j++) {
//       if (i == j) continue;
//       if (cache[Math.min(i, j)][Math.max(i, j)]) {
//         record[j] = true;
//         queue.push(j);
//       }
//     }
//     while (queue.length) {
//       // console.log(cache);
//       let k = queue.pop();
//       let dist1 = cache[Math.min(i, k)][Math.max(i, k)];

//       for (let j = 0; j < N; j++) {
//         if (k == j) continue;
//         let dist2 = cache[Math.min(k, j)][Math.max(k, j)];
//         if (dist2) {
//           let newRoute = [Math.min(i, j), Math.max(i, j)];

//           if (
//             !cache[newRoute[0]][newRoute[1]] ||
//             dist1 + dist2 < cache[newRoute[0]][newRoute[1]]
//           )
//             cache[newRoute[0]][newRoute[1]] = dist1 + dist2;

//           if (!record[j]) queue.push(j);
//         }
//       }
//       record[k] = true;
//     }
//   }

//   for (let i = 0; i < N; i++) {
//     ret[i] = 0;
//     for (let j = 0; j < N; j++) {
//       if (i !== j) {
//         // console.log(i, j, cache[`${Math.min(i, j)},${Math.max(i, j)}`]);
//         ret[i] += cache[Math.min(i, j)][Math.max(i, j)];
//       }
//     }
//   }
//   return ret;
// };

// this one is O(n)
// but the last one still cost 1.3sec

// var sumOfDistancesInTree = function(N, edges) {
//   let cache = new Array(N).fill(0).map(_ => null);
//   let ret = [];

//   const visited = {};

//   const helper = root => {
//     let queue = [];
//     let childrenDistSum = 0;
//     let childrenCount = 0;
//     edges.forEach(([from, to]) => {
//       if (from === root && !visited[to]) {
//         queue.push(to);
//       }
//       if (to === root && !visited[from]) {
//         queue.push(from);
//       }
//     });
//     visited[root] = true;
//     const children = queue.map(helper);

//     children.forEach(d => {
//       childrenDistSum += d.childrenDistSum + d.childrenCount + 1;
//       childrenCount += 1 + d.childrenCount;
//     });

//     return {
//       root,
//       children,
//       childrenDistSum,
//       childrenCount
//     };
//   };

//   const tree = helper(0);

//   const sumUp = (root, nonChildDistSum, nonChildNodeCount) => {
//     // console.log(root, nonChildDistSum, nonChildNodeCount);
//     root.children.forEach((child, i) => {
//       const newSum =
//         nonChildDistSum +
//         nonChildNodeCount +
//         (root.childrenDistSum -
//           child.childrenDistSum -
//           child.childrenCount -
//           1);
//       let newNonChildNodeCount =
//         nonChildNodeCount + root.childrenCount - child.childrenCount;
//       sumUp(child, newSum, newNonChildNodeCount);
//     });

//     ret[root.root] = root.childrenDistSum + nonChildDistSum + nonChildNodeCount;
//   };

//   sumUp(tree, 0, 0);

//   return ret;
// };

// sol from discussion board
// originally version is C/JAVA
// I rewritten as js
// var sumOfDistancesInTree = function(N, edges) {
//   const tree = new Array(N).fill(null).map(_ => new Set());
//   const ret = new Array(N).fill(0);
//   const count = new Array(N).fill(0);
//   const visited1 = new Set();
//   const visited2 = new Set();
//   if (N === 1) return [0];
//   edges.forEach(([from, to]) => {
//     tree[from].add(to);
//     tree[to].add(from);
//   });
//   // console.log(tree);
//   const dfs1 = root => {
//     visited1.add(root);
//     tree[root].forEach(d => {
//       if (!visited1.has(d)) {
//         dfs1(d, tree, count);
//         count[root] += count[d];
//         ret[root] += ret[d] + count[d];
//         // console.log(count, ret);
//       }
//     });
//     count[root] += 1;
//   };

//   const dfs2 = root => {
//     visited2.add(root);
//     tree[root].forEach(d => {
//       if (!visited2.has(d)) {
//         ret[d] = ret[root] - count[d] + N - count[d];
//         dfs2(d);
//       }
//     });
//   };

//   dfs1(0);
//   dfs2(0);

//   return ret;
// };

// best sol from web
var sumOfDistancesInTree = function(N, edges) {
  var nodeCount = [],
    distCount = [],
    listOfNodes = [];
  // Initialize the holder

  if (N === 1) return [0];
  for (var i = 0; i < N; i++) {
    nodeCount.push(0);
    distCount.push(0);
    listOfNodes.push([]);
  }

  for (var i = 0; i < edges.length; i++) {
    var edge = edges[i];
    listOfNodes[edge[0]].push(edge[1]);
    listOfNodes[edge[1]].push(edge[0]);
  }

  var countNodes = function(root, seen) {
    seen[root] = true;
    for (var i = 0; i < listOfNodes[root].length; i++) {
      if (listOfNodes[root][i] in seen === false) {
        countNodes(listOfNodes[root][i], seen);
        nodeCount[root] += nodeCount[listOfNodes[root][i]];
        distCount[root] +=
          distCount[listOfNodes[root][i]] + nodeCount[listOfNodes[root][i]];
      }
    }
    nodeCount[root]++;
  };
  var seen = {};
  countNodes(0, seen);
  console.log(listOfNodes, nodeCount, distCount);

  var updateDist = function(root, seen) {
    seen[root] = true;
    for (var i = 0; i < listOfNodes[root].length; i++) {
      if (listOfNodes[root][i] in seen === false) {
        distCount[listOfNodes[root][i]] =
          distCount[root] -
          nodeCount[listOfNodes[root][i]] +
          N -
          nodeCount[listOfNodes[root][i]];
        updateDist(listOfNodes[root][i], seen);
      }
    }
  };

  seen = {};
  updateDist(0, seen);

  return distCount;
};

console.log(sumOfDistancesInTree(1, [[0]]));
// [0]

console.log(sumOfDistancesInTree(2, [[1, 0]]));
// [1, 1]

console.log(sumOfDistancesInTree(6, [[0, 1], [0, 2], [2, 3], [2, 4], [2, 5]]));
// [8,12,6,10,10,10]

// console.log(
//   sumOfDistancesInTree(50, [
//     [2, 16],
//     [44, 24],
//     [39, 35],
//     [14, 17],
//     [10, 41],
//     [15, 37],
//     [1, 5],
//     [49, 35],
//     [43, 48],
//     [16, 10],
//     [20, 9],
//     [24, 12],
//     [1, 12],
//     [24, 48],
//     [11, 19],
//     [48, 46],
//     [21, 0],
//     [25, 18],
//     [33, 0],
//     [28, 26],
//     [13, 10],
//     [9, 7],
//     [36, 4],
//     [39, 36],
//     [36, 18],
//     [34, 16],
//     [27, 3],
//     [3, 4],
//     [12, 26],
//     [31, 14],
//     [8, 28],
//     [41, 7],
//     [24, 0],
//     [4, 45],
//     [37, 26],
//     [26, 17],
//     [28, 38],
//     [40, 2],
//     [22, 4],
//     [23, 43],
//     [26, 41],
//     [36, 26],
//     [42, 35],
//     [29, 11],
//     [23, 30],
//     [36, 11],
//     [32, 27],
//     [6, 23],
//     [39, 47]
//   ])
// );
// // [239,213,301,243,199,261,367,219,237,265,213,205,167,261,235,239,255,189,207,253,313,287,247,319,195,255,145,289,189,253,367,283,337,287,303,245,161,191,237,201,349,175,293,275,243,247,281,249,233,293]
