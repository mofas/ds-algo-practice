/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// because we have negative ele,
// it become dynamic programming n^2
// space = O(n)
// it is too slow.

// var subarraySum = function(nums, k) {
//   const n = nums.length;

//   if (n === 0) return 0;
//   if (n === 1) return nums[0] === k ? 1 : 0;

//   let table = Array(n).fill(0);

//   let count = 0;

//   table[0] = nums[0];
//   if (table[0] === k) count++;

//   for (let i = 1; i < n; i++) {
//     table[i] = nums[i] + table[i - 1];
//     if (table[i] === k) count++;
//   }
//   // console.log('init', table, count);

//   for (let i = 1; i < n; i++) {
//     for (let j = i; j < n; j++) {
//       table[j] = table[j] - nums[i - 1];
//       if (table[j] === k) {
//         count++;
//       }
//     }
//     // console.log(table);
//   }

//   return count;
// };

// best sol from website
var subarraySum = function(nums, k) {
  const map = new Map();
  let sum = 0;
  let count = 0;
  map.set(0, 1);
  nums.forEach(num => {
    sum += num;
    if (map.get(sum - k)) {
      count += map.get(sum - k);
    }
    const t = map.get(sum);
    map.set(sum, t ? t + 1 : 1);
  });
  return count;
};

console.log(subarraySum([1], 1)); // 1

console.log(subarraySum([1, 1, 1, 1, 12], 1)); // 4

console.log(subarraySum([1, 1, 2], 2)); // 2
// [1,1] [2]

console.log(subarraySum([1, 1, 2, 1, 1], 4)); // 3
// [1,1,2] [1,2,1] [2,1,1]

console.log(subarraySum([1, 2, -3, 2, -1, -1], 0)); // 4
// [1, 2, -3] [2, -3, 2, -1] [2, -1, -1] [1, 2, -3, 2, -1, -1]

console.log(
  subarraySum(
    [
      -916,
      -132,
      -202,
      -524,
      739,
      57,
      938,
      546,
      948,
      -181,
      -315,
      921,
      792,
      -992,
      -69,
      588,
      712,
      509,
      -406,
      302,
      -637,
      169,
      407,
      993,
      -263,
      54,
      -512,
      -950,
      -930,
      66,
      147,
      -9,
      -136,
      -205,
      274,
      992,
      -304,
      -835,
      659,
      -792,
      -288,
      146,
      182,
      -672,
      -374,
      -943,
      -85,
      958,
      -19,
      33,
      -676,
      232,
      92,
      -132,
      -121,
      -944,
      -526,
      -869,
      -423,
      -855,
      818,
      46,
      401,
      633,
      -457,
      63,
      824,
      -172,
      237,
      360,
      43,
      831,
      -432,
      213,
      -330,
      -788,
      -472,
      -70,
      -507,
      615,
      -953,
      457,
      -89,
      -756,
      477,
      445,
      153,
      -779,
      710,
      484,
      -20,
      802,
      -261,
      -481,
      -309,
      -992,
      -240,
      275,
      -302,
      -137,
      295,
      -232,
      529,
      691,
      873,
      787,
      229,
      677,
      -388,
      996,
      301,
      -641,
      -983,
      108,
      -247,
      431,
      -668,
      877,
      528,
      -69,
      -15,
      278,
      -334,
      775,
      770,
      -720,
      232,
      -607,
      896,
      496,
      485,
      350,
      772,
      -656,
      379,
      730,
      -445,
      -152,
      295,
      99,
      -945,
      -170,
      -594,
      271,
      894,
      -451,
      -455,
      636,
      -210,
      674,
      554,
      183,
      446,
      -709,
      -599,
      521,
      711,
      -739,
      -712,
      -947,
      -940,
      -577,
      71,
      672,
      -512,
      -216,
      669,
      137,
      -61,
      -901,
      -867,
      -168,
      -838,
      -653,
      -503,
      -535,
      -423,
      -922,
      281,
      544,
      -373,
      -935,
      -485,
      760,
      -203,
      -656,
      -241,
      493,
      -290,
      -298,
      756,
      -871,
      -525,
      614,
      230,
      -910,
      -395,
      -308,
      -237,
      289,
      975,
      -215,
      542,
      674,
      798,
      95,
      -989,
      912,
      -943,
      -262,
      -501,
      -670,
      -878,
      -40,
      983,
      963,
      -136,
      682,
      -383,
      -537,
      -724,
      382,
      -831,
      726,
      91,
      666,
      -795,
      308,
      -519,
      -891,
      -313,
      960,
      -785,
      -629,
      519,
      783,
      -2,
      705,
      -658,
      993,
      656,
      795,
      441,
      145,
      -298,
      411,
      -593,
      -738,
      -701,
      -453,
      857,
      769,
      -841,
      -609,
      248,
      -315,
      -465,
      -2,
      93,
      748,
      -75,
      -227,
      -426,
      -446,
      428,
      54,
      324,
      -72,
      -340,
      -361,
      -327,
      204,
      991,
      -720,
      -861,
      -33,
      -517,
      454,
      241,
      -34,
      -750,
      -31,
      -476,
      -428,
      909,
      -221,
      -981,
      168,
      352,
      -443,
      -733,
      821,
      -287,
      395,
      691,
      -230,
      45,
      -752,
      -524,
      -998,
      -245,
      -947,
      560,
      308,
      -144,
      223,
      -802,
      844,
      -321,
      194,
      -666,
      -960,
      -920,
      -668,
      989,
      -735,
      -566,
      -298,
      652,
      215,
      916,
      862,
      261,
      -894,
      -984,
      124,
      348,
      -858,
      -571,
      585,
      681,
      -197,
      387,
      -308,
      -349,
      -555,
      -530,
      993,
      464,
      -285,
      -195,
      -786,
      777,
      -819,
      -45,
      -792,
      200,
      994,
      82,
      832,
      -70,
      -578,
      -244,
      -546,
      -866,
      -746,
      563,
      -359,
      -857,
      -610,
      -518,
      -902,
      -746,
      540,
      -721,
      184,
      -523,
      -64,
      466,
      -166,
      719,
      -76,
      937,
      -150,
      -55,
      849,
      -42,
      -403,
      -492,
      -24,
      -850,
      -448,
      -460,
      167,
      596,
      -799,
      523,
      -699,
      975,
      104,
      658,
      -274,
      462,
      618,
      -320,
      -330,
      -639,
      -541,
      -218,
      -627,
      -303,
      -504,
      781,
      -564,
      967,
      -635,
      -523,
      -918,
      -529,
      705,
      624,
      -196,
      814,
      -165,
      142,
      -103,
      935,
      573,
      45,
      -377,
      661,
      -521,
      691,
      -81,
      -496,
      -883,
      995
    ],
    -682
  )
); // 4
