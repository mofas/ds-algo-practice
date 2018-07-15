/**
 * @param {number[][]} M
 * @return {number}
 */

// 480ms
// slow
var findCircleNum = function(M) {
  const n = M.length;
  let acc = 0;
  const stack = [];

  const dfs = () => {
    while (stack.length) {
      const [x, y] = stack.pop();
      if (M[x][y] === 1) {
        M[x][y] = '#';
        // find next friend..
        for (let i = 0; i < n; i++) {
          if (M[y][i] === 1) stack.push([y, i]);
        }
      }
    }
  };

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (M[i][j] === 1) {
        acc++;
        stack.push([i, j]);
        dfs();
      }
    }
  }

  return acc;
};

// best sol from web
// var findCircleNum = function(M) {
//   let count = 0,
//     visited = {};

//   for (let p = 0; p < M.length; p++) {
//     if (visited[p] == undefined) {
//       visited[p] = true;
//       mark(p, M, visited);
//       count++;
//     }
//   }
//   return count;
// };

// function mark(person, M, visited) {
//   for (let other = 0; other < M.length; other++) {
//     if (M[person][other] == 1 && visited[other] == undefined) {
//       visited[other] = true;
//       mark(other, M, visited);
//     }
//   }
// }

console.log(findCircleNum([[1, 1, 0], [1, 1, 0], [0, 0, 1]]));
// 2

console.log(findCircleNum([[1, 1, 0], [1, 1, 1], [0, 1, 1]]));
// 1
