/**
 * @param {number[]} persons
 * @param {number[]} times
 */
// 432ms
var TopVotedCandidate = function(persons, times) {
  this.times = times;
  // vote : cand.
  const voteCount = {};
  let topVote = 0;
  let last = null;
  this.top = [];

  for (let i = 0; i < persons.length; i++) {
    const p = persons[i];
    voteCount[p] = voteCount[p] ? voteCount[p] + 1 : 1;
    topVote = Math.max(topVote, voteCount[p]);
    if (topVote === voteCount[p]) {
      last = p;
    }
    this.top.push(last);
    // console.log(voteCount, last);
  }
  // console.log(this.top);
};

/**
 * @param {number} t
 * @return {number}
 */
TopVotedCandidate.prototype.q = function(t) {
  // binary search
  let from = 0;
  let to = this.times.length - 1;
  let middle = Math.round((from + to) / 2);

  if (t > this.times[this.times.length - 1])
    return this.top[this.top.length - 1];

  while (from < to) {
    if (t > this.times[middle]) {
      from = middle + 1;
      middle = Math.round((from + to) / 2);
    } else if (t < this.times[middle]) {
      to = middle - 1;
      middle = Math.round((from + to) / 2);
    } else {
      break;
    }
    // console.log(from, middle, to);
  }
  while (this.times[middle] > t) {
    middle--;
  }
  // console.log('final', middle);
  return this.top[middle];
};

let tc = new TopVotedCandidate(
  [0, 1, 1, 0, 0, 1, 0],
  [0, 5, 10, 15, 20, 25, 30]
);
// console.log(tc.q(3)); // 0
// console.log(tc.q(12)); // 1
// console.log(tc.q(25)); // 1
// console.log(tc.q(15)); // 0
// console.log(tc.q(24)); // 0
// console.log(tc.q(8)); // 1

// console.log('====');
// tc = new TopVotedCandidate([0, 0, 0, 0, 1], [0, 6, 39, 52, 75]);
// console.log(tc.q(45)); // 0
// console.log(tc.q(49)); // 0
// console.log(tc.q(59)); // 0
// console.log(tc.q(68)); // 0
// console.log(tc.q(42)); // 0
// console.log(tc.q(37)); // 0
// console.log(tc.q(99)); // 0
// console.log(tc.q(26)); // 0
// console.log(tc.q(78)); // 0
// console.log(tc.q(43)); // 0

console.log('====');
tc = new TopVotedCandidate([0, 1, 0, 1, 1], [24, 29, 31, 76, 81]);
console.log(tc.q(30)); // 1
console.log(tc.q(75)); // 0
