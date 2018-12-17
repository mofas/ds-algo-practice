/**
 * @param {number[][]} wall
 * @return {number}
 */

// extremely slow
// 1724ms
var leastBricks = function(wall) {
  const layer = wall.length;
  const counts = new Array(layer).fill(1);
  const acc = new Array(layer).fill(0).map((_, i) => wall[i][0]);
  let i = layer;
  let minCut = layer;
  const total = wall.reduce((acc, l) => acc + l.length, 0);
  let leftMostWidth = Infinity;
  let target = 0;
  const checked = {};
  // console.log('enter', i, total, acc, counts);
  while (i < total) {
    //find the leftmost layer
    leftMostWidth = Infinity;
    acc.forEach((d, j) => {
      if (d < leftMostWidth) {
        target = j;
        leftMostWidth = d;
      }
    });
    // calculate cut
    if (!checked[leftMostWidth]) {
      let cut = acc.reduce((sum, d) => {
        if (d > leftMostWidth) return sum + 1;
        else return sum;
      }, 0);
      // console.log('cut', leftMostWidth, cut);
      if (cut < minCut) minCut = cut;
      checked[leftMostWidth] = true;
    }
    acc[target] += wall[target][counts[target]];
    counts[target]++;
    // console.log('loop', acc, counts);
    i++;
  }
  return minCut;
};

// best sol from web
// 76ms
var leastBricks = function(wall) {
  let map = {};
  let min = wall.length;
  for (let i = 0; i < wall.length; i++) {
    let s = 0;
    for (let j = 0; j < wall[i].length - 1; j++) {
      s += wall[i][j];
      if (map[s] != null) {
        map[s] -= 1;
      } else map[s] = wall.length - 1;

      if (map[s] < min) min = map[s];
    }
  }
  return min;
};

console.log(
  leastBricks([
    [1, 2, 2, 1],
    [3, 1, 2],
    [1, 3, 2],
    [2, 4],
    [3, 1, 2],
    [1, 3, 1, 1]
  ])
);
// 2

console.log(leastBricks([[1, 1], [2], [1, 1]]));
// 1
