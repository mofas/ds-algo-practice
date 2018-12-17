/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
// 112ms
var findRadius = function(houses, heaters) {
  houses.sort((a, b) => a - b);
  heaters.sort((a, b) => a - b);
  const n = houses.length;
  const m = heaters.length;
  let radius = 0;
  let j = 0;

  for (let i = 0; i < n; i++) {
    let temp = Infinity;
    for (let k = j; k < m; k++) {
      // console.log('check!!', houses[i], heaters[k]);
      temp = Math.min(temp, Math.abs(heaters[k] - houses[i]));
      if (heaters[k] < houses[i]) {
        j = k;
      }
      if (heaters[k] > houses[i]) {
        if (j > 0) temp = Math.min(temp, Math.abs(houses[i] - heaters[j - 1]));
        break;
      }
    }
    radius = Math.max(radius, temp);
    // console.log('==', temp, radius);
  }
  return radius;
};

// best sol from web
// 108ms
var findRadius = function(houses, heaters) {
  heaters.sort((a, b) => a - b);

  let dist = 0;
  let left;
  let right;
  let mid;
  let target;

  for (let i = 0, size = houses.length; i < size; i++) {
    target = houses[i];
    left = 0;
    right = heaters.length - 1;

    while (left <= right) {
      mid = left + ((right - left) >> 1);
      if (heaters[mid] === target) {
        break;
      } else if (heaters[mid] > target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    if (left <= right) continue;

    let distLeft =
      left >= 0 && left < heaters.length
        ? Math.abs(houses[i] - heaters[left])
        : Number.MAX_SAFE_INTEGER;
    let distRight =
      right >= 0 && right < heaters.length
        ? Math.abs(houses[i] - heaters[right])
        : Number.MAX_SAFE_INTEGER;

    dist = Math.max(dist, Math.min(distLeft, distRight));
  }

  return dist;
};

console.log(findRadius([1, 2, 3], [2]));
// 1

console.log(findRadius([1, 2, 3, 4], [1, 4]));
// 1

console.log(findRadius([1, 5], [2]));
// 3

console.log(
  findRadius(
    [581030105, 557810404, 146319451, 908194298, 500782188, 657821123],
    [102246882, 269406752, 816731566, 884936716, 807130337, 578354438]
  )
);
// 79466685

console.log(
  findRadius(
    [
      282475249,
      622650073,
      984943658,
      144108930,
      470211272,
      101027544,
      457850878,
      458777923
    ],
    [
      823564440,
      115438165,
      784484492,
      74243042,
      114807987,
      137522503,
      441282327,
      16531729,
      823378840,
      143542612
    ]
  )
);
// 161834419
