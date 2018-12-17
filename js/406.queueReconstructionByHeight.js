/**
 * @param {number[][]} people
 * @return {number[][]}
 */

// O(n^2)
// 456ms
var reconstructQueue = function(people) {
  const n = people.length;
  const minusRecord = new Array(n).fill(0);
  let res = [];

  while (res.length < n) {
    let cand = -1;
    for (let i = 0; i < n; i++) {
      const [h, k] = people[i];
      if (k === 0) {
        if (cand < 0 || h <= people[cand][0]) cand = i;
      }
    }
    // now update k
    res.push([people[cand][0], people[cand][1] + minusRecord[cand]]);

    for (let i = 0; i < n; i++) {
      const [h, k] = people[i];
      if (h <= people[cand][0] && k > 0) {
        people[i][1]--;
        minusRecord[i]++;
      }
    }
    people[cand][1] = -1;
    // console.log(cand, people, minusRecord);
  }
  return res;
};

// best sol from web
// 88ms
// sorting at first.
var reconstructQueue = function(people) {
  if (people.length === 0) return [];
  let sorted = sortNested(people);
  let result = [];
  // console.log('initial', sorted);
  result.push(sorted[0]);
  for (let i = 1; i < people.length; i++) {
    result.splice(sorted[i][1], 0, sorted[i]);
    // console.log('loop', i, result);
  }
  return result;
};

var sortNested = function(arrayNested) {
  return arrayNested.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] > b[1] ? 1 : -1;
    } else {
      return a[0] > b[0] ? -1 : 1;
    }
  });
};

console.log(reconstructQueue([[1, 0], [2, 0]]));
// [[1,0],[2,0]]

console.log(reconstructQueue([[7, 0], [4, 4], [7, 1], [5, 0], [6, 1], [5, 2]]));
// [[5,0], [7,0], [5,2], [6,1], [4,4], [7,1]]
