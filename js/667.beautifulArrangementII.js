/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
// 136ms
var constructArray = function(n, k) {
  let ret = new Array(n).fill(0).map((_, i) => i + 1);
  const used = new Set();
  for (let i = 0; i < n; i++) {
    if (k > 1) {
      const t = ret[i + k];
      ret.splice(i + k, 1);
      ret.splice(i + 1, 0, t);
      k -= 2;
      i++;
    }
    if (k === 1) break;
  }

  return ret;
};

// best sol from web
// 68ms
var constructArray = function(n, k) {
  const list = [];

  for (let h = 1, t = n; list.length < n; h++) {
    list.push(h);
    if (k > 2) {
      list.push(t--);
      k -= 2;
    }
  }
  // console.log('lll', list);

  if (k === 2) {
    let t = list[list.length - 2];
    list[list.length - 2] = list[list.length - 1];
    list[list.length - 1] = t;
  }

  return list;
};

console.log(constructArray(3, 1));
// [1, 2, 3];

console.log(constructArray(3, 2));
// [1, 3, 2]

console.log(constructArray(4, 3));
// [1, 4, 2, 3]

console.log(constructArray(6, 1));
// [1, 2, 3, 4, 5, 6]

console.log(constructArray(6, 2));
// [1, 3, 2, 4, 5, 6]

console.log(constructArray(6, 3));
// [1, 4, 2, 3, 5, 6]

console.log(constructArray(6, 4));
// [1, 5, 2, 4, 3, 6]

console.log(constructArray(6, 5));
// [1, 6, 2, 5, 3, 4]
