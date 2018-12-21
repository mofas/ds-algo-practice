// recursive
// 960ms
var combine = function(n, k) {
  let ret = [];
  if (k === 1) {
    for (let i = 1; i <= n; i++) {
      ret.push([i]);
    }
  } else {
    const res = combine(n, k - 1);
    for (let i = k; i <= n; i++) {
      // console.log(k - 1, res);
      for (const item of res) {
        // console.log(item[k - 2]);
        if (item[k - 2] < i) {
          ret.push(item.concat(i));
        }
      }
    }
  }
  return ret;
};

// best sol
// 96ms
var combine = function(n, k) {
  let sol = [];
  function helper(start, arr, k) {
    if (k === 0) {
      sol.push(arr.slice());
      return;
    }
    for (let i = start; i <= n - k + 1; i++) {
      arr.push(i);
      helper(i + 1, arr, k - 1);
      arr.pop();
    }
  }
  helper(1, [], k);
  return sol;
};

console.log(combine(4, 1));

console.log(combine(4, 2));
