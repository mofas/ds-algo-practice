/**
 * @param {number[]} tree
 * @return {number}
 */
// 120 ms, faster than 76.12%
// 45.3 MB, less than 49.15%
var totalFruit = function(tree) {
  const map = new Map();

  let max = 0;
  let from = 0;

  for (let i = 0; i < tree.length; i++) {
    const t = tree[i];
    // if this type we collect before
    if (map.has(t)) {
      map.set(t, map.get(t) + 1);
    } else {
      // update the max
      // console.log('update:', i - from, i, from);
      max = Math.max(max, i - from);
      // remove the one chars
      while (map.size > 1) {
        const tr = tree[from];
        map.set(tr, map.get(tr) - 1);
        if (map.get(tr) === 0) {
          map.delete(tr);
        }
        from++;
      }
      map.set(t, 1);
    }
    // console.log(i, map);
  }
  max = Math.max(max, tree.length - from);
  return max;
};

// best sol
// 84 ms
var totalFruit = function(tree) {
  if (tree.length < 3) {
    return tree.length;
  }

  let a = tree[0];
  let b = tree[1];
  let count = 2;
  let i = 2;

  // the following comment is optimization
  // while (a === b && i < tree.length) {
  //   b = tree[i];
  //   i += 1;
  //   count += 1;
  // }

  // if (i === tree.length) {
  //   return count;
  // }

  let max = count;

  for (; i < tree.length; i++) {
    if (tree[i] === a || tree[i] === b) {
      count += 1;
    } else {
      a = tree[i - 1];
      b = tree[i];
      max = Math.max(max, count);
      count = 2;
      let j = i - 2;
      while (a === tree[j]) {
        count += 1;
        j -= 1;
      }
    }
  }
  return Math.max(max, count);
};

console.log(totalFruit([1, 2, 1]));
// 3

console.log(totalFruit([0, 1, 2, 2]));
// 3

console.log(totalFruit([1, 2, 3, 2, 2]));
// 4

console.log(totalFruit([3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4]));
// 5
