/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 */

const innerProduct = (a, b) => {
  return a[0] * b[0] + a[1] * b[1];
};

const vecLength = a => {
  return a[0] * a[0] + a[1] * a[1];
};
const vecSame = (a, b) => {
  return a[0] === b[0] && a[1] === b[1];
};

// too slow
var validSquare = function(p1, p2, p3, p4) {
  const vec12 = [p2[0] - p1[0], p2[1] - p1[1]];
  const vec13 = [p3[0] - p1[0], p3[1] - p1[1]];
  const vec14 = [p4[0] - p1[0], p4[1] - p1[1]];
  const vec23 = [p3[0] - p2[0], p3[1] - p2[1]];
  const vec24 = [p4[0] - p2[0], p4[1] - p2[1]];
  const vec31 = [-vec13[0], -vec13[1]];
  const vec32 = [p2[0] - p3[0], p2[1] - p3[1]];
  const vec34 = [p4[0] - p3[0], p4[1] - p3[1]];
  const vec41 = [-vec14[0], -vec14[1]];
  const vec43 = [-vec34[0], -vec34[1]];

  if (
    vecSame(p1, p2) ||
    vecSame(p1, p3) ||
    vecSame(p2, p3) ||
    vecSame(p2, p4) ||
    vecSame(p3, p4)
  ) {
    return false;
  }

  if (innerProduct(vec12, vec23) === 0) {
    return (
      innerProduct(vec23, vec34) === 0 &&
      innerProduct(vec41, vec12) === 0 &&
      vecLength(vec12) === vecLength(vec23)
    );
  } else if (innerProduct(vec13, vec32) === 0) {
    return (
      innerProduct(vec32, vec24) === 0 &&
      innerProduct(vec24, vec41) === 0 &&
      vecLength(vec13) === vecLength(vec32)
    );
  } else if (innerProduct(vec12, vec24) === 0) {
    return (
      innerProduct(vec24, vec43) === 0 &&
      innerProduct(vec43, vec31) === 0 &&
      vecLength(vec12) === vecLength(vec24)
    );
  }
  return false;
};

// best sol from web
// var validSquare = function(p1, p2, p3, p4) {
//   if (p1[0] == p2[0] && p2[0] == p3[0]) return false;
//   var dis = (a, b) => (a[1] - b[1]) ** 2 + (a[0] - b[0]) ** 2;
//   var a = dis(p1, p2),
//     b = dis(p1, p3),
//     c = dis(p1, p4);
//   if (a == b) {
//     var d = dis(p2, p4);
//     return c == dis(p2, p3) && d == dis(p3, p4) && d == a;
//   } else if (a == c) {
//     var d = dis(p3, p4);
//     return b == dis(p2, p4) && dis(p2, p3) == d && d == a;
//   } else if (b == c) {
//     var d = dis(p2, p4);
//     return a == dis(p3, p4) && dis(p2, p3) == d && d == b;
//   } else return false;
// };

console.log(validSquare([0, 0], [1, 1], [1, 0], [0, 1]));
// true

console.log(validSquare([-1, -1], [2, 2], [2, -1], [-1, 2]));
// // true

console.log(validSquare([1, 0], [0, 1], [-1, 0], [0, -1]));
// // true

console.log(validSquare([1, 0], [0, 1], [0, -1], [-1, 0]));
// // true

console.log(validSquare([-1, 0], [2, 2], [2, -1], [-1, 2]));
// // false

console.log(validSquare([0, 0], [-1, 0], [1, 0], [0, 1]));
// // false

console.log(validSquare([0, 0], [5, 0], [5, 4], [0, 4]));
// false

console.log(validSquare([0, 0], [1, 1], [1, 0], [1, 1]));
// false
