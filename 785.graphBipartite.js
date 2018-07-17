/**
 * @param {number[][]} graph
 * @return {boolean}
 */

// Recall that a graph is bipartite if we can split it's set of nodes into two independent subsets A and B such that every edge in the graph has one node in A and another node in B.
var isBipartite = function(graph) {
  const n = graph.length;
  const color = new Array(n).fill(0).map(_ => 0); // 0 is uncolor, 1, -1

  const dfs = (node, prevColor) => {
    // console.log('dfs', node, color);
    if (color[node] !== 0) {
      // console.log('check', color[node], prevColor);
      return color[node] !== prevColor;
    } else {
      // console.log('t', node, prevColor);
      color[node] = -prevColor;
      for (let i = 0; i < graph[node].length; i++) {
        if (!dfs(graph[node][i], -prevColor)) return false;
      }
      return true;
    }
  };

  for (let i = 0; i < n; i++) {
    if (color[i] !== 0) continue;
    if (!dfs(i, 1)) return false;
  }
  // console.log('color', color);
  return true;
};

console.log(isBipartite([[1, 3], [0, 2], [1, 3], [0, 2]]));
// true

console.log(isBipartite([[1, 2, 3], [0, 2], [0, 1, 3], [0, 2]]));
// false
