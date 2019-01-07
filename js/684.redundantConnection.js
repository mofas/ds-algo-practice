/**
 * @param {number[][]} edges
 * @return {number[]}
 */
// 100ms 15.73%
// slow because using ES6 Set
var findRedundantConnection = function(edges) {
  let unionSet = [];
  for (const edge of edges) {
    // search for all union set
    const [eg1, eg2] = edge;
    let eg1Set = null;
    let eg2Set = null;
    for (const set of unionSet) {
      if (set.has(eg1)) eg1Set = set;
      if (set.has(eg2)) eg2Set = set;
    }

    // console.log('edge', eg1, eg2);

    if (eg1Set && eg2Set) {
      if (eg1Set === eg2Set) return edge;
      // merge two set.
      for (const e of eg2Set) {
        eg1Set.add(e);
      }
      //remove eg2Set
      unionSet = unionSet.filter(d => d !== eg2Set);
    } else if (eg1Set) {
      eg1Set.add(eg2);
    } else if (eg2Set) {
      eg2Set.add(eg1);
    } else {
      unionSet.push(new Set([eg1, eg2]));
    }
    // console.log(unionSet);
  }
  return [];
};

console.log(findRedundantConnection([[1, 2], [1, 3], [2, 3]]));
// [2, 3]

console.log(findRedundantConnection([[1, 2], [2, 3], [3, 4], [1, 4], [1, 5]]));
// [1, 4]

console.log(findRedundantConnection([[1, 4], [3, 4], [1, 3], [1, 2], [4, 5]]));
// [1, 3]

console.log(findRedundantConnection([[3, 4], [1, 2], [2, 4], [3, 5], [2, 5]]));
// [2, 5]
