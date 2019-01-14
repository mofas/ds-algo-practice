/**
 * @param {number[]} piles
 * @param {number} H
 * @return {number}
 */

// binary search
// 100ms 33.3%
var minEatingSpeed = function(piles, H) {
  let total = 0;
  let low = 0;
  let high = Number.MIN_SAFE_INTEGER;
  // find bound
  for (const pile of piles) {
    if (pile > high) high = pile;
    total += pile;
  }
  low = Math.floor(total / H);

  let mid = low;
  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    let hour = 0;
    for (const pile of piles) {
      hour += Math.ceil(pile / mid);
    }
    if (hour <= H) high = mid - 1;
    if (hour > H) low = mid + 1;
    // console.log('loop:', mid, low, high, hour);
  }
  return low;
};

// best sol
// 68ms
// var minEatingSpeed = function(piles, H) {
//   if (H <= piles.length) {
//     let max = piles[0];
//     piles.forEach(pile => {
//       max = max < pile ? pile : max;
//     });
//     return max;
//   } else {
//     let tryNumber = Math.floor(piles.reduce((total, num) => total + num) / H);
//     let finish = false;
//     while (!finish) {
//       let turn = 0;
//       for (let i = 0; i < piles.length; i++) {
//         turn = turn + Math.ceil(piles[i] / tryNumber);
//         if (turn > H) {
//           break;
//         }
//       }
//       if (turn > H) {
//         tryNumber++;
//       } else {
//         finish = true;
//       }
//     }

//     return tryNumber;
//   }
// };

console.log(minEatingSpeed([3, 6, 7, 11], 8));
// 4

console.log(minEatingSpeed([30, 11, 23, 4, 20], 5));
// 30

console.log(minEatingSpeed([30, 11, 23, 4, 20], 6));
// 23

console.log(
  minEatingSpeed(
    [
      332484035,
      524908576,
      855865114,
      632922376,
      222257295,
      690155293,
      112677673,
      679580077,
      337406589,
      290818316,
      877337160,
      901728858,
      679284947,
      688210097,
      692137887,
      718203285,
      629455728,
      941802184
    ],
    823855818
  )
);
// 14
