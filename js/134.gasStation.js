/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */

// 80ms
var canCompleteCircuit = function(gas, cost) {
  const n = gas.length;
  const diff = new Array(n).fill(0);
  let remain = 0;
  for (let i = 0; i < n; i++) {
    remain += gas[i] - cost[i];
    diff[i] = gas[i] - cost[i];
  }
  if (remain < 0) return -1;
  // console.log(diff);
  let idx = 0;
  let acc = 0;
  for (let i = 0; i < n; i++) {
    acc += diff[i];
    if (acc < 0) {
      idx = i + 1;
      acc = 0;
    }
  }
  return idx;
};

// best sol from web
// 48ms
// it merge two loops
var canCompleteCircuit = function(gas, cost) {
  let sum_of_all = 0;
  let smallest = gas[0] - cost[0];
  let index = 0;
  for (let i = 0; i < gas.length; i++) {
    sum_of_all += gas[i] - cost[i];
    if (sum_of_all < smallest) {
      index = i;
      smallest = sum_of_all;
    }
  }
  if (sum_of_all < 0) return -1;
  else return index === gas.length - 1 ? 0 : index + 1;
};

console.log(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]));
// 3

console.log(canCompleteCircuit([2, 3, 4], [3, 4, 3]));
// -1

console.log(canCompleteCircuit([5, 1, 2, 3, 4], [4, 4, 1, 5, 1]));
// 4

console.log(canCompleteCircuit([5, 8, 2, 8], [6, 5, 6, 6]));
// 3
