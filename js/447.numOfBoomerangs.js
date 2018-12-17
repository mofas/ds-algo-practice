/**
 * @param {number[][]} points
 * @return {number}
 */

const distance = (p1, p2) => {
  return (p1[0] - p2[0]) * (p1[0] - p2[0]) + (p1[1] - p2[1]) * (p1[1] - p2[1]);
};

var numberOfBoomerangs = function(points) {
  const n = points.length;
  const dists = new Array(n).fill().map(_ => []);
  let ret = 0;
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      const dist = distance(points[i], points[j]);
      //check p1
      dists[i].forEach(d => {
        if (d === dist) ret++;
      });
      //check p2
      dists[j].forEach(d => {
        if (d === dist) ret++;
      });
      dists[i].push(dist);
      dists[j].push(dist);
    }
  }
  return ret * 2;
};

// best sol from web
// small trick!
// using map for dist, and reuse map.
// even the time complexity is still O(n^2)
// but space is O(n)
function numberOfBoomerangs(points) {
  const distMap = new Map();
  let boomerangCount = 0;
  for (let p1 of points) {
    for (let p2 of points) {
      if (p1 === p2) continue;
      let dist =
        (p1[0] - p2[0]) * (p1[0] - p2[0]) + (p1[1] - p2[1]) * (p1[1] - p2[1]);
      let prevDist = distMap.has(dist) ? distMap.get(dist) : 0;
      boomerangCount += 2 * prevDist;
      distMap.set(dist, prevDist + 1);
    }
    distMap.clear();
  }
  return boomerangCount;
}

console.log(numberOfBoomerangs([[0, 0], [1, 0], [2, 0]]));
// 2

console.log(numberOfBoomerangs([[0, 0], [1, 0], [-1, 0], [0, 1], [0, -1]]));
// 20
