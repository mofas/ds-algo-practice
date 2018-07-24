/**
 * @param {number[][]} grid
 * @return {number}
 */

// 112 ms
var swimInWater = function(grid) {
  const N = grid.length;
  const seen = new Set([`0,0`]);
  let front = new Set([`0,1`, `1,0`]);
  const target = `${N - 1},${N - 1}`;
  let t = Math.max(2 * N - 3, grid[N - 1][N - 1] - 2, grid[0][0] - 1); // short cut
  // let t = 0;
  while (t++ < N * N) {
    let changed = false;
    for (const cand of front) {
      const [x, y] = cand.split(',');
      const nx = +x;
      const ny = +y;
      // console.log(x, y, grid[nx][ny], grid[nx][ny] <= t);
      if (grid[nx][ny] <= t) {
        if (cand === `${target}`) return t;
        seen.add(cand);
        front.delete(cand);
        if (nx > 0 && !seen.has(`${nx - 1},${ny}`))
          front.add(`${nx - 1},${ny}`);

        if (nx < N - 1 && !seen.has(`${nx + 1},${ny}`))
          front.add(`${nx + 1},${ny}`);

        if (ny > 0 && !seen.has(`${nx},${ny - 1}`))
          front.add(`${nx},${ny - 1}`);

        if (ny < N - 1 && !seen.has(`${nx},${ny + 1}`))
          front.add(`${nx},${ny + 1}`);

        changed = true;
      }
    }
    if (changed) t--;
    console.log('====', t, front, seen);
  }
  return -1;
};

console.log(swimInWater([[0, 3], [1, 2]]));
// 2

console.log(swimInWater([[0, 2], [1, 3]]));
// 3

console.log(swimInWater([[3, 2], [0, 1]]));
// 3

// console.log(
//   swimInWater([
//     [0, 1, 2, 3, 4],
//     [24, 23, 22, 21, 5],
//     [12, 13, 14, 15, 16],
//     [11, 17, 18, 19, 20],
//     [10, 9, 8, 7, 6]
//   ])
// );
// // 16
