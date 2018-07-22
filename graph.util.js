function UndirectedGraphNode(label) {
  this.label = label;
  this.neighbors = []; // Array of UndirectedGraphNode
}

const buildGraph = str => {
  str = str.substring(1, str.length - 1);
  const nodes = str.split('#');
  const nodesHolder = {};
  const neighborsHolder = {};
  let firstLabel = null;

  const createOrAccessNode = label => {
    if (!nodesHolder[label]) {
      nodesHolder[label] = new UndirectedGraphNode(label);
    }
    return nodesHolder[label];
  };

  // create node
  for (let i = 0; i < nodes.length; i++) {
    const [label, ...neighbors] = nodes[i].split(',');
    if (!firstLabel) firstLabel = label;
    const node = createOrAccessNode(label);
    neighborsHolder[label] = neighbors;
  }

  // build graph
  Object.keys(nodesHolder).forEach(label => {
    const neighbors = neighborsHolder[label];
    // console.log('label loop', label, neighbors.map(d => nodesHolder[d]));
    nodesHolder[label].neighbors = neighbors.map(d => nodesHolder[d]);
  });

  return nodesHolder[firstLabel];
};

const printGraph = graph => {
  let retLabel = [];
  const seen = new Set();
  let queue = [];
  if (graph) queue.push(graph);

  const neighMap = {};
  while (queue.length > 0) {
    const t = queue.shift();
    if (!seen.has(t.label)) {
      retLabel.push(t.label);
      neighMap[t.label] = t.neighbors.reduce((acc, d) => {
        if (!seen.has(d.label)) acc.push(d.label);
        return acc;
      }, []);
      queue = queue.concat(t.neighbors);
      seen.add(t.label);
    }
  }

  // console.log(retLabel, neighMap);
  let ret = retLabel.map(label => {
    return [label].concat(neighMap[label]).join(',');
  });
  return `{${ret.join('#')}}`;
};

module.exports = {
  UndirectedGraphNode,
  buildGraph,
  printGraph
};
