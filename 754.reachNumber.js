/**
 * @param {number} target
 * @return {number}
 */

function union(setA, setB) {
  var _union = new Set(setA);
  for (var elem of setB) {
    _union.add(elem);
  }
  return _union;
}

// brute force
// too slow
// the last case takes more than 30 secs
// var reachNumber = function(target) {
//   let ret = new Set([0]);
//   let newMove = new Set();
//   let c = 0;
//   while (!ret.has(target)) {
//     c++;
//     ret.forEach(d => {
//       newMove = newMove.add(d + c);
//       newMove = newMove.add(d - c);
//     });

//     ret = newMove;
//     newMove = new Set();
//     console.log(ret, newMove);
//   }

//   return c;
// };

var reachNumber = function(target) {
  target = Math.abs(target);
  let c = 0;
  let acc = 0;
  while (acc < target) {
    c++;
    acc += c;
  }

  while ((acc - target) % 2 !== 0) {
    c++;
    acc += c;
  }

  return c;
};

// we can find the number from
// 1 -> 3 -> 6 -> 10 -> 15

console.log(reachNumber(2));
// 3

console.log(reachNumber(3));
// 2

console.log(reachNumber(4));
// 3

console.log(reachNumber(5));
// 5

console.log(reachNumber(6));
// 3

console.log(reachNumber(17));
// 6

console.log(reachNumber(2179874));
// 2088
