/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

// just find the loop
var canFinish = function(numCourses, prerequisites) {
  const requMap = new Map();
  for (let i = 0; i < prerequisites.length; i++) {
    const [course, requ] = prerequisites[i];
    if (!requMap.has(course)) requMap.set(course, []);
    requMap.get(course).push(requ);
  }

  // console.log(requMap);

  const color = new Array(numCourses).fill(0);
  // 0 is undecied, 2 is success, 1 is fail

  const dfs = current => {
    // console.log('dfs', current, color[current]);
    if (color[current] === 1) return false;
    if (color[current] === 2) return true;
    color[current] = 1;
    const requs = requMap.get(current) || [];
    for (let i = 0; i < requs.length; i++) {
      if (!dfs(requs[i])) return false;
    }
    color[current] = 2;
    return true;
  };

  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i)) return false;
  }
  return true;
};

console.log(canFinish(2, [[1, 0]]));
// true

console.log(canFinish(2, [[1, 0], [0, 1]]));
// false
