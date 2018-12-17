/**
 * @param {number[]} temperatures
 * @return {number[]}
 */

// 212ms
// var dailyTemperatures = function(temperatures) {
//   const n = temperatures.length;
//   let hash = new Array(71).fill(0).map(_ => []);
//   let ret = new Array(n).fill(0);
//   for (let i = 0; i < n; i++) {
//     let diff = temperatures[i] - 30;
//     for (let j = 0; j < diff; j++) {
//       if (hash[j].length) {
//         // console.log(i, temperatures[i], hash[j], j + 30);
//         hash[j].forEach(d => {
//           ret[d] = i - d;
//         });
//         hash[j] = [];
//       }
//     }
//     hash[diff].push(i);
//   }
//   return ret;
// };

// best sol from web

// suprisingly
// if we don't group prev data by temp
// it is faster!!
// and we only need to check the top of res

// var dailyTemperatures = function(temperatures) {
//   const res = new Array(temperatures.length);
//   for (let i = 0; i < res.length; i++) res[i] = 0;
//   const st = [];
//   for (let i = 0; i < temperatures.length; i++) {
//     while (st.length > 0 && temperatures[i] > temperatures[st[st.length - 1]]) {
//       const t = st.pop();
//       res[t] = i - t;
//     }
//     st.push(i);
//   }
//   return res;
// };

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
// [1, 1, 4, 2, 1, 1, 0, 0]

console.log(dailyTemperatures([89, 62, 70, 58, 47, 47, 46, 76, 100, 70]));
// [8, 1, 5, 4, 3, 2, 1, 1, 0, 0]
