/**
 * @param {number} n
 * @return {number}
 */

// 68ms
const primes = [
  2,
  3,
  5,
  7,
  11,
  13,
  17,
  19,
  23,
  29,
  31,
  37,
  41,
  43,
  47,
  53,
  59,
  61,
  67,
  71,
  73,
  79,
  83,
  89,
  97,
  101,

  103,
  107,
  109,
  113,
  127,
  131,
  137,
  139,
  149,
  151,
  157,
  163,
  167,
  173,
  179,
  181,
  191,
  193,
  197,
  199,
  211,
  223,
  227,
  229,
  233,
  239,

  241,
  251,
  257,
  263,
  269,
  271,
  277,
  281,
  283,
  293,
  307,
  311,
  313,
  317,
  331,
  337,
  347,
  349,
  353,
  359,
  367,
  373,
  379,
  383,
  389,
  397,

  401,
  409,
  419,
  421,
  431,
  433,
  439,
  443,
  449,
  457,
  461,
  463,
  467,
  479,
  487,
  491,
  499,
  503,
  509,
  521,
  523,
  541,
  547,
  557,
  563,
  569,

  571,
  577,
  587,
  593,
  599,
  601,
  607,
  613,
  617,
  619,
  631,
  641,
  643,
  647,
  653,
  659,
  661,
  673,
  677,
  683,
  691,
  701,
  709,
  719,
  727,
  733,

  739,
  743,
  751,
  757,
  761,
  769,
  773,
  787,
  797,
  809,
  811,
  821,
  823,
  827,
  829,
  839,
  853,
  857,
  859,
  863,
  877,
  881,
  883,
  887,
  907,
  911,

  919,
  929,
  937,
  941,
  947,
  953,
  967,
  971,
  977,
  983,
  991,
  997
];
const primeSet = new Set(primes);
var minSteps = function(n) {
  const dp = new Array().fill(0);
  dp[0] = 0; // ''
  dp[1] = 0; // A

  for (let i = 2; i <= n; i++) {
    if (primeSet.has(i)) {
      dp[i] = i;
    } else {
      // check all factor
      for (let j = Math.floor(i / 2); j >= 0; j--) {
        if (i % j === 0) {
          let fac1 = i / j;
          dp[i] = dp[j] + fac1;
          break;
        }
      }
    }
    // console.log(i, dp[i]);
  }
  // console.log(dp);
  return dp[n];
};

// best sol from web
// 52ms
// beautiful recursive sol
var minSteps = function(n) {
  if (n == 1) return 0;
  if (n == 2) return 2;
  if (n == 3) return 3;
  if (n % 2 == 0) return 2 + minSteps(n / 2);
  for (var i = (n + 1) / 2; i >= 3; i--) {
    if (n % i == 0) {
      return n / i + minSteps(i);
    }
  }
  return n;
};

// best sol from disucssion board
// 52 ms
// var minSteps = function(n) {
//   let s = 0;
//   for (let d = 2; d <= n; d++) {
//     while (n % d === 0) {
//       s += d;
//       n /= d;
//     }
//   }
//   return s;
// };

console.log(minSteps(3));
// 3

console.log(minSteps(5));
// 5

console.log(minSteps(6));
// 5

console.log(minSteps(9));
// 6

console.log(minSteps(97));
// 97

console.log(minSteps(145));
// 34

console.log(minSteps(32));
// 10

console.log(minSteps(512));
// 18
