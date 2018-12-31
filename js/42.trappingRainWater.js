/**
 * @param {number[]} height
 * @return {number}
 */
// 60ms, beat 99.68
var trap = function(height) {
  const stack = [];
  let ret = 0;

  let prevH = 0;
  for (let i = 0; i < height.length; i++) {
    const h = height[i];
    let scanH = prevH;
    while (stack.length > 0 && stack[stack.length - 1][0] <= h) {
      const t = stack.pop();
      // console.log(t, [h, i], scanH, (t[0] - scanH) * (i - t[1] - 1));
      // height * width
      ret += (t[0] - scanH) * (i - t[1] - 1);
      scanH = t[0];
    }
    // console.log('stack', stack);
    if (stack.length > 0 && stack[stack.length - 1][0] > h) {
      const t = stack[stack.length - 1];
      ret += (h - scanH) * (i - t[1] - 1);
    }
    // handle left h > right h
    stack.push([h, i]);
    prevH = h;
  }
  return ret;
};

// best sol
// 56ms
var trap = function(height) {
  let ret = 0,
    [l, r] = [0, height.length - 1],
    [LMAX, RMAX] = [0, 0];

  while (r > l) {
    if (height[l] < height[r]) {
      if (height[l] < LMAX) ret += LMAX - height[l];
      else LMAX = height[l];
      l++;
    } else {
      if (height[r] < RMAX) ret += RMAX - height[r];
      else RMAX = height[r];
      r--;
    }
  }
  return ret;
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
// 6

console.log(trap([2, 0, 2]));
// 2

console.log(trap([4, 2, 3]));
// 1

console.log(trap([2, 1, 0, 2]));
// 3

console.log(trap([5, 4, 1, 2]));
// 1

console.log(trap([4, 2, 0, 3, 2, 5]));
// 9
