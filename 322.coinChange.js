/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

// recursive DP
// TLE at 81/82
// var coinChange = function(coins, amount) {
//   const n = coins.length;
//   const cache = {};
//   const helper = (remain, canUse) => {
//     // console.log(remain, canUse);
//     if (remain === 0) return 0;
//     if (cache[remain + ',' + canUse] != null)
//       return cache[remain + ',' + canUse];
//     let ret = Infinity;
//     for (let i = canUse; i >= 0; i--) {
//       if (remain >= coins[i]) {
//         ret = Math.min(ret, helper(remain - coins[i], i) + 1);
//       }
//     }
//     cache[remain + ',' + canUse] = ret;
//     return ret;
//   };
//   let ret = helper(amount, n - 1);
//   return ret === Infinity ? -1 : ret;
// };

// iterative DP
// 156 ms
var coinChange = function(coins, amount) {
  const n = coins.length;
  if (amount === 0) return 0;
  if (n === 0) return -1;
  const dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 0; i < amount; i++) {
    if (dp[i] < Infinity) {
      for (const coin of coins) {
        const next = i + coin;
        if (next <= amount) {
          dp[next] = Math.min(dp[next], dp[i] + 1);
        }
      }
    }
  }

  const ret = dp[amount];
  // console.log(dp);
  return ret === Infinity ? -1 : ret;
};

// best sol from web
function coinChange(coins, amount) {
  coins.sort((a, b) => b - a);
  let res = Infinity;

  function helper(k, amount, count) {
    const coin = coins[k];
    // last smallest coin
    if (k === coins.length - 1) {
      if (amount % coin === 0) {
        res = Math.min(res, count + Math.floor(amount / coin));
      }
    } else {
      for (let i = Math.floor(amount / coin); i >= 0 && count + i < res; i--) {
        // count + i < res is for pruning, avoid unnecessary calculation
        helper(k + 1, amount - coin * i, count + i);
      }
    }
  }
  helper(0, amount, 0);
  return res === Infinity ? -1 : res;
}

console.log(coinChange([2], 3));
// -1

console.log(coinChange([1, 2, 5], 11));
// 3

console.log(coinChange([456, 117, 5, 145], 1459));
// 23

console.log(
  coinChange([370, 417, 408, 156, 143, 434, 168, 83, 177, 280, 117], 9953)
);
// 24
