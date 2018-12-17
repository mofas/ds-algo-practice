const graphUtil = require('./graph.util');
const { UndirectedGraphNode, buildGraph, printGraph } = graphUtil;

// console.log(buildGraph('{}'));
// console.log(buildGraph('{-1}'));
// console.log(buildGraph('{0,1,2#1,2#2,2}'));

// console.log(printGraph(buildGraph('{}')));
// console.log(printGraph(buildGraph('{-1}')));
// console.log(printGraph(buildGraph('{0,1,2#1,2#2,2}')));

/**
 * @param {UndirectedGraphNode} graph
 * @return {UndirectedGraphNode}
 */
var cloneGraph = function(graph) {
  const map = {};
  const helper = node => {
    if (!node) return null;
    if (map[node.label]) return map[node.label];
    const clone = new UndirectedGraphNode(node.label);
    map[node.label] = clone;
    for (let neighbor of node.neighbors) {
      clone.neighbors.push(helper(neighbor));
    }
    return clone;
  };

  return helper(graph);
};

console.log(printGraph(cloneGraph(buildGraph('{}'))));
console.log(printGraph(cloneGraph(buildGraph('{-1}'))));
console.log(printGraph(cloneGraph(buildGraph('{0,1,2#1,2#2,2}'))));
