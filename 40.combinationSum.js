var helper = function(candidates, target, endTo) {
  if (target < 1) return [];

  let ret = [];
  let prev = null;
  for (let i = endTo; i >= 0; i--) {
    if (candidates[i] === target && prev !== candidates[i]) {
      ret = [[candidates[i]]].concat(ret);
    } else if (candidates[i] < target && prev !== candidates[i]) {
      const newIndex = candidates.indexOf(candidates[i]);
      const res = helper(candidates, target - candidates[i], i - 1).map(d =>
        d.concat([candidates[i]])
      );
      ret = res.concat(ret);
    }
    prev = candidates[i];
  }
  return ret;
};

var combinationSum2 = function(candidates, target) {
  candidates.sort((a, b) => a - b);
  const len = candidates.length;
  if (!len) return [];
  // console.log(candidates, 'sort');
  return helper(candidates, target, len - 1);
};

// best sol
// it use the same tech as 90.subsets2 to remove duplicate

// var combinationSum2 = function(candidates, target) {
//   let ans = []
//   candidates.sort((a,b) => a - b)

//   helper([], target, 0)

//   return ans

//   function helper(arr, remaining, pos){
//       if(remaining < 0) return
//       if(remaining === 0){
//           ans.push(arr.slice(0))
//           return
//       }

//       for(let i = pos; i < candidates.length; i++){
//           let val = candidates[i]

//           if(i > pos && val === candidates[i-1]) continue

//           if(remaining - val >= 0) {
//               arr.push(val)
//               helper(arr, remaining-val, i+1)
//               arr.pop(val)
//           }else{
//               return
//           }
//       }
//   }
// };

console.log(combinationSum2([1, 1, 1, 2], 3));
// [[2,1], [1,1,1]]

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
// [[1, 7], [1, 2, 5], [2, 6], [1, 1, 6]];

console.log(combinationSum2([2, 5, 2, 1, 2], 5));
// [[1, 2, 2], [5]];
