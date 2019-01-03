/**
 * @param {number[][]} A
 * @return {number}
 */
// 168ms
var shortestBridge = function(A) {
  const n = A.length;
  const m = A[0].length;

  const is1 = new Set();
  const is2 = new Set();
  let front1 = new Set();
  let front2 = new Set();

  const explore = (i, j, set, front) => {
    const key = `${i}_${j}`;
    if (set.has(`${i}_${j}`)) return;
    if (A[i][j] === 1) {
      set.add(`${i}_${j}`);
      if (i < n - 1) explore(i + 1, j, set, front);
      if (j < m - 1) explore(i, j + 1, set, front);
      if (i > 0) explore(i - 1, j, set, front);
      if (j > 0) explore(i, j - 1, set, front);
    } else if (!front.has(key)) {
      front.add(key);
    }
  };

  //find the first island
  let explored1 = false;
  out: for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (A[i][j] === 1) {
        if (!explored1) {
          explore(i, j, is1, front1);
          explored1 = true;
        } else if (!is1.has(`${i}_${j}`)) {
          explore(i, j, is2, front2);
          break out;
        }
      }
    }
  }

  //bi-direction BFS
  let frontSet = front1;
  let exploredSet = is1;
  let checkSet = is2;
  let k = 0;
  flag = true;
  while (true) {
    // find front
    // console.log(frontSet);
    let newFrontSet = new Set();
    let newKey = '';
    for (const key of frontSet) {
      if (checkSet.has(key)) {
        return k;
      }
      const [i, j] = key.split('_').map(d => Number(d));
      exploredSet.add(key);
      if (i < n - 1) {
        newKey = `${i + 1}_${j}`;
        if (!exploredSet.has(newKey)) newFrontSet.add(newKey);
      }
      if (j < m - 1) {
        newKey = `${i}_${j + 1}`;
        if (!exploredSet.has(newKey)) newFrontSet.add(newKey);
      }
      if (i > 0) {
        newKey = `${i - 1}_${j}`;
        if (!exploredSet.has(newKey)) newFrontSet.add(newKey);
      }
      if (j > 0) {
        newKey = `${i}_${j - 1}`;
        if (!exploredSet.has(newKey)) newFrontSet.add(newKey);
      }
    }
    frontSet = flag ? front2 : front1;
    if (flag) {
      front1 = newFrontSet;
    } else {
      front2 = newFrontSet;
    }
    exploredSet = flag ? is2 : is1;
    checkSet = flag ? is1 : is2;
    flag = !flag;
    k++;
  }
};

// 88ms
const shortestBridge = function(A) {
  let r = A.length;
  let c = A[0].length;
  let found = false;
  let queue = [];
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if (A[i][j]) {
        dfs(A, i, j, queue);
        found = true;
        break;
      }
    }
    if (found) break;
  }

  let replace = [];
  let count = 0;
  let cells = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  while (queue.length) {
    let pos = queue.shift();

    for (let i = 0; i < cells.length; i++) {
      let x = pos[0] + cells[i][0];
      let y = pos[1] + cells[i][1];

      if (0 <= x && x < r && 0 <= y && y < c && A[x][y] != 2) {
        if (A[x][y] == 1) return count;
        A[x][y] = 2;
        replace.push([x, y]);
      }
    }

    if (!queue.length) {
      queue = replace;
      replace = [];
      count++;
    }
  }
};
function dfs(A, x, y, queue) {
  if (
    x < 0 ||
    x >= A.length ||
    y < 0 ||
    y >= A[0].length ||
    A[x][y] == 0 ||
    A[x][y] == 2
  )
    return;
  A[x][y] = 2;
  queue.push([x, y]);
  dfs(A, x - 1, y, queue);
  dfs(A, x + 1, y, queue);
  dfs(A, x, y - 1, queue);
  dfs(A, x, y + 1, queue);
}

console.log(shortestBridge([[0, 1], [1, 0]]));
// 1

console.log(shortestBridge([[0, 1, 0], [0, 0, 0], [0, 0, 1]]));
// 2

console.log(
  shortestBridge([
    [1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1]
  ])
);
// 1

console.log(
  shortestBridge([
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [0, 0, 0, 0, 1]
  ])
);
// 3
