/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
  const visited = new Array(rooms.length).fill(false);
  let acc = 0;
  const dfs = roomNo => {
    if (!visited[roomNo]) {
      visited[roomNo] = true;
      acc++;
      rooms[roomNo].forEach(key => {
        dfs(key);
      });
    }
  };
  dfs(0);
  // console.log(visited);
  return acc === rooms.length;
};

// best sol from web
// stack is faster than function call

// var canVisitAllRooms = function(rooms) {
//   let seen = rooms.map(r => false);
//   let firstKey = 0;
//   let stack = [firstKey];
//   seen[firstKey] = true;

//   while (stack.length > 0) {
//     const key = stack.pop();
//     rooms[key].forEach(key => {
//       if (seen[key]) return;
//       seen[key] = true;
//       stack.push(key);
//     });
//   }

//   return seen.every(item => item === true);
// };

console.log(canVisitAllRooms([[1], [2], [3], []]));
// true

console.log(canVisitAllRooms([[1, 3], [3, 0, 1], [2], [0]]));
// false
