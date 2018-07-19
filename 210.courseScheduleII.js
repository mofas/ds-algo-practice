/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */

// 144ms
// 2x slower
var findOrder = function(numCourses, prerequisites) {
  const requMap = new Map();
  const reverseMap = new Map();
  for (let i = 0; i < prerequisites.length; i++) {
    const [course, requ] = prerequisites[i];
    if (!requMap.has(course)) requMap.set(course, []);
    requMap.get(course).push(requ);
    if (!reverseMap.has(requ)) reverseMap.set(requ, []);
    reverseMap.get(requ).push(course);
  }

  const sinks = [];
  let seen = new Set();

  // dfs to find sinks
  const dfs = id => {
    if (seen.has(id)) return;
    seen.add(id);
    const requs = requMap.get(id);
    if (!requs) {
      sinks.push(id);
    } else {
      requs.forEach(i => dfs(i));
    }
  };

  for (let i = 0; i < numCourses; i++) {
    dfs(i);
  }

  let ret = [];
  seen = new Set();
  let loopCount = 0;

  while (sinks.length) {
    // console.log(sinks);
    const id = sinks.shift();
    if (seen.has(id)) continue;
    let isValid = true;
    const requs = requMap.get(id) || [];
    for (let i = 0; i < requs.length; i++) {
      if (!seen.has(requs[i])) {
        isValid = false;
        break;
      }
    }

    if (isValid) {
      // push other node in
      (reverseMap.get(id) || []).forEach(d => {
        sinks.push(d);
      });
      seen.add(id);
      ret.push(id);
      loopCount = 0;
    } else {
      loopCount++;
      // we have loop
      if (loopCount > sinks.length) break;
      // move to the end
      sinks.push(id);
    }
  }

  // console.log(requMap);
  // console.log(reverseMap);

  if (ret.length === numCourses) return ret;
  return [];
};

// best sol from web
// 68ms
// we can calculate degree to avoid find sink
// we also use degree to avoid checking is it satisified cond
var findOrder = function(numCourses, prerequisites) {
  if (!numCourses) {
    return [];
  }
  let inDegree = {};
  let edges = {};
  for (let i = 0; i < numCourses; i++) {
    inDegree[i] = 0;
    edges[i] = [];
  }
  for (let i = 0; i < prerequisites.length; i++) {
    inDegree[prerequisites[i][0]]++;
    edges[prerequisites[i][1]].push(prerequisites[i][0]);
  }
  let queue = [];
  for (let i = 0; i < numCourses; i++) {
    if (inDegree[i] === 0) {
      queue.push(i);
    }
  }
  let res = [];
  while (queue.length > 0) {
    let node = queue.shift();
    res.push(node);
    for (let i = 0; i < edges[node].length; i++) {
      let nextNode = edges[node][i];
      inDegree[nextNode]--;
      if (inDegree[nextNode] === 0) {
        queue.push(nextNode);
      }
    }
  }
  for (let i = 0; i < numCourses; i++) {
    if (inDegree[i] > 0) {
      return [];
    }
  }
  return res;
};

console.log(findOrder(2, [[1, 0]]));
// [1, 0]

console.log(findOrder(4, [[1, 0], [2, 0], [3, 1], [3, 2]]));
// [0,1,2,3]

console.log(findOrder(3, [[0, 1], [0, 2], [1, 2]]));
// [2,1,0]

console.log(findOrder(3, [[1, 0], [1, 2], [0, 1]]));
// []

console.log(
  findOrder(8, [[1, 0], [2, 6], [1, 7], [5, 1], [6, 4], [7, 0], [0, 5]])
);
// []
