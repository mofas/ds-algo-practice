/**
 * @param {number[]} ages
 * @return {number}
 */

// sol from the web
var numFriendRequests = function(ages) {
  const n = ages.length;
  const bucket = new Array(121).fill(0);
  ages.forEach(d => {
    bucket[d]++;
  });

  let ret = 0;
  for (let i = 15; i < 121; i++) {
    for (let j = Math.floor(0.5 * i + 8); j <= i; j++) {
      ret += bucket[j] * (bucket[i] - (i === j ? 1 : 0));
    }
  }

  return ret;
};

console.log(numFriendRequests([16, 16])); // 2

console.log(numFriendRequests([16, 17, 18])); // 2

console.log(numFriendRequests([20, 30, 100, 110, 120])); // 3

console.log(numFriendRequests([8, 85, 24, 85, 69])); // 4
console.log(
  numFriendRequests([
    109,
    6,
    101,
    18,
    13,
    20,
    106,
    110,
    110,
    108,
    55,
    89,
    81,
    56,
    84,
    37,
    71,
    51,
    88,
    70,
    27,
    16,
    31,
    63,
    99,
    68,
    12,
    120,
    104,
    18,
    110,
    42,
    93,
    106,
    99,
    63,
    3,
    82,
    22,
    17,
    69,
    49,
    88,
    117,
    57,
    37,
    95,
    15,
    50,
    18,
    77,
    103,
    102,
    104,
    87,
    1,
    23,
    97,
    93,
    15,
    9,
    35,
    59,
    103,
    118,
    23,
    52,
    66,
    86,
    7,
    40,
    33,
    60,
    4,
    113,
    43,
    21,
    58,
    31,
    120,
    71,
    56,
    19,
    67,
    68,
    32,
    84,
    14,
    50,
    55,
    98,
    34,
    89,
    32,
    58,
    20,
    93,
    37,
    95,
    40
  ])
); // 1872
