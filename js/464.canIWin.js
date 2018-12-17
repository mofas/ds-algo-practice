/**
 * @param {number} maxChoosableInteger
 * @param {number} desiredTotal
 * @return {boolean}
 */

// DFS search, recursive DP
// 2252ms
var canIWin = function(maxChoosableInteger, desiredTotal) {
  // sanityCheck
  let total = (maxChoosableInteger * (maxChoosableInteger + 1)) / 2;
  if (total < desiredTotal) return false;

  const cache = {};
  const helper = (pool, goal) => {
    // console.log(pool, goal);
    if (cache[pool.join('.') + '-' + goal]) {
      // console.log('read from cache');
      return cache[pool.join('.') + '-' + goal];
    }
    for (let i = 0; i < pool.length; i++) {
      if (pool[i] > 0) {
        if (pool[i] >= goal) {
          cache[pool.join('.') + '-' + goal] = true;
          return true;
        }
        const pick = pool[i];
        pool[i] = 0;
        let ret = helper(pool, goal - pick);
        pool[i] = pick;
        if (!ret) {
          cache[pool.join('.') + '-' + goal] = true;
          return true;
        }
      }
    }
    cache[pool.join('.') + '-' + goal] = false;
    return false;
  };

  const pool = new Array(maxChoosableInteger)
    .fill(0)
    .map((_, i) => maxChoosableInteger - i);

  return helper(pool, desiredTotal);
};

// best sol from web
// 168 ms
// it is the same algor
// but it use map and state to achieve better cache.
// also it don't create an array and mutate it.
var canIWin = function(maxChoosableInteger, desiredTotal) {
  var sum = ((1 + maxChoosableInteger) * maxChoosableInteger) / 2;
  if (sum < desiredTotal) return false; // can never reach to
  if (desiredTotal <= 0) return true;
  var map = {};
  return dfs(maxChoosableInteger, desiredTotal, 0, map);
};

var dfs = function(M, T, state, map) {
  if (T <= 0) return false; //already reach to end which is from player2 last play
  if (map[state] !== undefined) return map[state] === 1;
  for (var i = 0; i < M; i++) {
    if (state & (1 << i)) continue; // i visited
    // player 2 result
    if (!dfs(M, T - (i + 1), state | (1 << i), map)) {
      map[state] = 1;
      return true;
    }
  }
  map[state] = -1;
  return false;
};

// console.log(canIWin(5, 50));
// // false

// console.log(canIWin(20, 210));
// // false

console.log(canIWin(5, 11));
// false

console.log(canIWin(2, 3));
// false

console.log(canIWin(10, 11));
// false

// console.log(canIWin(3, 5));
// // true

// console.log(canIWin(3, 6));
// // true

// console.log(canIWin(5, 7));
// // true

// console.log(canIWin(5, 8));
// // true

// console.log(canIWin(5, 9));
// // true

// console.log(canIWin(5, 12));
// // true 1 -> 5 -> 2 ->

// console.log(canIWin(6, 10));
// // true
