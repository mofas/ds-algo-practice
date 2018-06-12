/**
 * @param {number} a
 * @param {number[]} b
 * @return {number}
 */
var superPow = function(a, b) {
  if (a % 1337 === 0) return 0;
  if (a === 1) return 1;
  const ring = [];
  let base = a % 1337;
  let next = (base * base) % 1337;
  ring.push(base);
  while (next !== base) {
    ring.push(next);
    next = (next * base) % 1337;
  }
  const ringSize = ring.length;

  let rem = 0;
  for (let i = 0; i < b.length; i++) {
    rem = (rem * 10 + b[i]) % ringSize;
  }
  return ring[rem - 1];
};

console.log(superPow(1, [4, 3, 3, 8, 5, 2]));
// 1

console.log(superPow(2, [3]));
// 8

console.log(superPow(2, [1, 0]));
// 1024

console.log(superPow(2, [1, 1]));
// 711

console.log(superPow(2, [2, 0]));
// 368

console.log(superPow(3, [3, 4, 5, 6, 6, 9, 1, 7, 5]));
// 885

console.log(
  superPow(2, [
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ])
);
// 177
