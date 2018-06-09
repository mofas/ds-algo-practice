/**
 * @param {number[]} answers
 * @return {number}
 */
// var numRabbits = function(answers) {
//   const n = answers.length;
//   if (n === 0) return 0;

//   answers.sort((a, b) => a - b);

//   let prev = answers[0];
//   let prevIndex = 0;
//   let ret = 0;
//   for (let i = 1; i < n; i++) {
//     if (prev === answers[i]) {
//       if (i - prevIndex > prev) {
//         ret += prev + 1;
//         prevIndex = i;
//       }
//     } else {
//       ret += prev + 1;
//       prev = answers[i];
//       prevIndex = i;
//     }
//   }
//   if (n > prevIndex) {
//     ret += prev + 1;
//   }

//   return ret;
// };

var numRabbits = function(answers) {
  const n = answers.length;
  if (n === 0) return 0;
  let ret = 0;
  const cache = {};

  answers.forEach(d => {
    cache[d] = cache[d] ? cache[d] + 1 : 1;
  });

  // console.log('cache', cache);

  Object.keys(cache).map(d => {
    const key = Number(d);
    let count = cache[d];
    while (count > 0) {
      ret += key + 1;
      count -= key + 1;
    }
  });

  return ret;
};

// best sol from web
// if we use cache instead of sort
// we can have the same performance

// var numRabbits = function(answers) {
//   let res = 0;
//   const ans = {};

//   answers.forEach(item => {
//     if (!item) {
//       res++;
//     } else if (ans[item]) {
//       if (ans[item][ans[item].length - 1] > item) {
//         res += item + 1;
//         ans[item].push(1);
//       } else {
//         ans[item][ans[item].length - 1]++;
//       }
//     } else {
//       res += item + 1;
//       ans[item] = [1];
//     }
//   });

//   return res;
// };

console.log(numRabbits([]));
// 0

console.log(numRabbits([1, 0, 1, 0, 0]));
// 5

console.log(numRabbits([1, 1, 2]));
// 5

console.log(numRabbits([2, 2, 0, 0, 2]));
// 5

console.log(numRabbits([0, 0, 1, 1, 1]));
// 6

console.log(numRabbits([10, 10, 10]));
// 11
