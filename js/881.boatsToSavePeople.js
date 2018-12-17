/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */

// 148ms
var numRescueBoats = function(people, limit) {
  people.sort((a, b) => a - b);
  // console.log(people);
  const n = people.length;
  let res = 0;

  let i = 0;
  let j = n - 1;
  while (i <= j) {
    res++;
    let capacity = limit;
    capacity -= people[j--];
    if (people[i] <= capacity) {
      capacity -= people[i++];
    }
    // console.log('====', res, i, j);
  }
  return res;
};

console.log(numRescueBoats([1, 2], 3));
// 1

console.log(numRescueBoats([5, 1, 4, 2], 6));
// 2

console.log(numRescueBoats([3, 2, 2, 1], 3));
// 3

console.log(numRescueBoats([4, 3, 6], 6));
// 3

console.log(numRescueBoats([3, 2, 3, 2, 2], 6));
// 3

console.log(numRescueBoats([3, 5, 3, 4], 5));
// 4

console.log(numRescueBoats([44, 10, 29, 12, 49, 41, 23, 5, 17, 26], 50));
// 6
