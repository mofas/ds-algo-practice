/**
 * @param {number} N
 * @param {number[][]} dislikes
 * @return {boolean}
 */
// DP too slow
// var possibleBipartition = function(N, dislikes) {
//   const mapping = {};
//   if (N === 1) return true;
//   for (let i = 0; i < dislikes.length; i++) {
//     const [a, b] = dislikes[i];
//     mapping[a] = mapping[a] || [];
//     mapping[b] = mapping[b] || [];
//     mapping[a].push(b);
//     mapping[b].push(a);
//   }
//   // console.log(mapping);

//   const extendSet = (set, disList) => {
//     let ret = new Set(set);
//     for (let j = 0; j < disList.length; j++) {
//       ret.add(disList[j]);
//     }
//     return ret;
//   };
//   // console.log(mapping);
//   const helper = (i, set1, set2) => {
//     // console.log(i);
//     if (i > N) return true;
//     if (set1.has(i) && set2.has(i)) return false;
//     else if (set1.has(i)) {
//       return helper(i + 1, set1, extendSet(set2, mapping[i] || []));
//     } else if (set2.has(i)) {
//       return helper(i + 1, extendSet(set1, mapping[i] || []), set2);
//     } else {
//       if (
//         helper(i + 1, extendSet(set1, [i]), extendSet(set2, mapping[i] || []))
//       )
//         return true;
//       if (
//         helper(i + 1, extendSet(set1, mapping[i] || []), extendSet(set2, [i]))
//       )
//         return true;
//     }

//     return false;
//   };
//   return helper(1, new Set(), new Set());
// };

// half DFS
// still slow
var possibleBipartition = function(N, dislikes) {
  const mapping = {};
  if (N === 1) return true;
  for (let i = 0; i < dislikes.length; i++) {
    const [a, b] = dislikes[i];
    mapping[a - 1] = mapping[a - 1] || [];
    mapping[b - 1] = mapping[b - 1] || [];
    mapping[a - 1].push(b - 1);
    mapping[b - 1].push(a - 1);
  }
  // console.log(mapping);

  const helper = (i, flag) => {
    // console.log(i, flag);,
    if (i > N) return true;
    const checkList = mapping[i] || [];
    if (flag[i] === 1) {
      for (let j = 0; j < checkList.length; j++) {
        if (checkList[j] === 1) return false;
        if (checkList[j] === 0) flag[i] === 2;
      }
      return helper(i + 1, flag);
    }
    if (flag[i] === 2) {
      for (let j = 0; j < checkList.length; j++) {
        if (checkList[j] === 2) return false;
        if (checkList[j] === 0) flag[i] === 1;
      }
      return helper(i + 1, flag);
    }
    // not set yet
    // console.log('not set yet', i);

    // put i into group 1
    let isValid = true;
    for (let j = 0; j < checkList.length; j++) {
      if (flag[checkList[j]] === 1) {
        isValid = false;
      }
    }
    if (isValid) {
      const copy = flag.slice();
      copy[i] = 1;
      for (let j = 0; j < checkList.length; j++) {
        copy[checkList[j]] === 2;
      }
      if (helper(i + 1, copy)) return true;
    }

    // put i into group 2
    isValid = true;
    for (let j = 0; j < checkList.length; j++) {
      if (flag[checkList[j]] === 2) {
        isValid = false;
      }
    }
    // not set yet
    if (isValid) {
      const copy = flag.slice();
      copy[i] = 2;
      for (let j = 0; j < checkList.length; j++) {
        copy[checkList[j]] === 1;
      }
      if (helper(i + 1, copy)) return true;
    }

    return false;
  };
  return helper(0, new Array(N).fill(0));
};

// sol from discussion board
// 160ms
var possibleBipartition = function(N, dislikes) {
  const mapping = {};
  if (N === 1) return true;
  for (let i = 0; i < dislikes.length; i++) {
    const [a, b] = dislikes[i];
    mapping[a - 1] = mapping[a - 1] || [];
    mapping[b - 1] = mapping[b - 1] || [];
    mapping[a - 1].push(b - 1);
    mapping[b - 1].push(a - 1);
  }
  // 0 not visited, 1 -> group 1, -1 -> group 2
  let colors = new Array(N).fill(0);

  const dfs = (idx, group) => {
    // console.log(idx, group, colors);
    colors[idx] = group;
    const checkList = mapping[idx] || [];
    for (let i = 0; i < checkList.length; i++) {
      if (colors[checkList[i]] === group) {
        return false;
      }
      if (colors[checkList[i]] === 0 && !dfs(checkList[i], -group)) {
        return false;
      }
    }
    return true;
  };

  for (let i = 0; i < N; i++) {
    if (colors[i] === 0 && !dfs(i, 1)) {
      return false;
    }
  }
  return true;
};

console.log(possibleBipartition(1, []));
// true

console.log(possibleBipartition(4, [[1, 2], [1, 3], [2, 4]]));
// true

console.log(possibleBipartition(3, [[1, 2], [1, 3], [2, 3]]));
// false

console.log(possibleBipartition(5, [[1, 2], [2, 3], [3, 4], [4, 5], [1, 5]]));
// false

console.log('===');

console.log(
  possibleBipartition(50, [
    [21, 47],
    [4, 41],
    [2, 41],
    [36, 42],
    [32, 45],
    [26, 28],
    [32, 44],
    [5, 41],
    [29, 44],
    [10, 46],
    [1, 6],
    [7, 42],
    [46, 49],
    [17, 46],
    [32, 35],
    [11, 48],
    [37, 48],
    [37, 43],
    [8, 41],
    [16, 22],
    [41, 43],
    [11, 27],
    [22, 44],
    [22, 28],
    [18, 37],
    [5, 11],
    [18, 46],
    [22, 48],
    [1, 17],
    [2, 32],
    [21, 37],
    [7, 22],
    [23, 41],
    [30, 39],
    [6, 41],
    [10, 22],
    [36, 41],
    [22, 25],
    [1, 12],
    [2, 11],
    [45, 46],
    [2, 22],
    [1, 38],
    [47, 50],
    [11, 15],
    [2, 37],
    [1, 43],
    [30, 45],
    [4, 32],
    [28, 37],
    [1, 21],
    [23, 37],
    [5, 37],
    [29, 40],
    [6, 42],
    [3, 11],
    [40, 42],
    [26, 49],
    [41, 50],
    [13, 41],
    [20, 47],
    [15, 26],
    [47, 49],
    [5, 30],
    [4, 42],
    [10, 30],
    [6, 29],
    [20, 42],
    [4, 37],
    [28, 42],
    [1, 16],
    [8, 32],
    [16, 29],
    [31, 47],
    [15, 47],
    [1, 5],
    [7, 37],
    [14, 47],
    [30, 48],
    [1, 10],
    [26, 43],
    [15, 46],
    [42, 45],
    [18, 42],
    [25, 42],
    [38, 41],
    [32, 39],
    [6, 30],
    [29, 33],
    [34, 37],
    [26, 38],
    [3, 22],
    [18, 47],
    [42, 48],
    [22, 49],
    [26, 34],
    [22, 36],
    [29, 36],
    [11, 25],
    [41, 44],
    [6, 46],
    [13, 22],
    [11, 16],
    [10, 37],
    [42, 43],
    [12, 32],
    [1, 48],
    [26, 40],
    [22, 50],
    [17, 26],
    [4, 22],
    [11, 14],
    [26, 39],
    [7, 11],
    [23, 26],
    [1, 20],
    [32, 33],
    [30, 33],
    [1, 25],
    [2, 30],
    [2, 46],
    [26, 45],
    [47, 48],
    [5, 29],
    [3, 37],
    [22, 34],
    [20, 22],
    [9, 47],
    [1, 4],
    [36, 46],
    [30, 49],
    [1, 9],
    [3, 26],
    [25, 41],
    [14, 29],
    [1, 35],
    [23, 42],
    [21, 32],
    [24, 46],
    [3, 32],
    [9, 42],
    [33, 37],
    [7, 30],
    [29, 45],
    [27, 30],
    [1, 7],
    [33, 42],
    [17, 47],
    [12, 47],
    [19, 41],
    [3, 42],
    [24, 26],
    [20, 29],
    [11, 23],
    [22, 40],
    [9, 37],
    [31, 32],
    [23, 46],
    [11, 38],
    [27, 29],
    [17, 37],
    [23, 30],
    [14, 42],
    [28, 30],
    [29, 31],
    [1, 8],
    [1, 36],
    [42, 50],
    [21, 41],
    [11, 18],
    [39, 41],
    [32, 34],
    [6, 37],
    [30, 38],
    [21, 46],
    [16, 37],
    [22, 24],
    [17, 32],
    [23, 29],
    [3, 30],
    [8, 30],
    [41, 48],
    [1, 39],
    [8, 47],
    [30, 44],
    [9, 46],
    [22, 45],
    [7, 26],
    [35, 42],
    [1, 27],
    [17, 30],
    [20, 46],
    [18, 29],
    [3, 29],
    [4, 30],
    [3, 46]
  ])
);
// true

console.log(
  possibleBipartition(200, [
    [99, 152],
    [88, 147],
    [141, 183],
    [71, 111],
    [27, 46],
    [74, 106],
    [125, 126],
    [72, 118],
    [148, 171],
    [65, 148],
    [150, 196],
    [193, 195],
    [51, 195],
    [175, 196],
    [3, 35],
    [38, 179],
    [180, 186],
    [119, 165],
    [172, 187],
    [143, 194],
    [178, 194],
    [61, 99],
    [170, 172],
    [127, 172],
    [147, 176],
    [123, 128],
    [4, 118],
    [8, 113],
    [30, 100],
    [95, 190],
    [162, 164],
    [11, 35],
    [66, 124],
    [148, 195],
    [87, 107],
    [14, 77],
    [163, 182],
    [147, 185],
    [148, 178],
    [167, 189],
    [171, 198],
    [59, 61],
    [106, 111],
    [142, 177],
    [60, 62],
    [91, 157],
    [122, 182],
    [156, 168],
    [70, 131],
    [13, 188],
    [114, 190],
    [86, 166],
    [112, 121],
    [11, 15],
    [44, 55],
    [42, 67],
    [132, 150],
    [8, 120],
    [105, 174],
    [158, 160],
    [138, 170],
    [1, 176],
    [111, 128],
    [112, 171],
    [170, 185],
    [151, 187],
    [177, 187],
    [109, 173],
    [31, 171],
    [89, 176],
    [198, 199],
    [153, 178],
    [186, 192],
    [9, 40],
    [148, 167],
    [89, 123],
    [40, 199],
    [73, 117],
    [110, 148],
    [75, 82],
    [74, 151],
    [153, 184],
    [155, 182],
    [175, 187],
    [152, 200],
    [111, 163],
    [135, 173],
    [90, 150],
    [182, 200],
    [126, 132],
    [105, 185],
    [86, 117],
    [170, 194],
    [2, 7],
    [49, 133],
    [158, 178],
    [133, 190],
    [71, 90],
    [11, 87],
    [156, 161],
    [171, 189],
    [72, 200],
    [69, 128],
    [102, 111],
    [7, 34],
    [147, 163],
    [26, 85],
    [182, 183],
    [174, 197],
    [46, 60],
    [45, 133],
    [122, 162],
    [180, 189],
    [46, 122],
    [104, 157],
    [187, 197],
    [126, 164],
    [12, 148],
    [182, 195],
    [121, 157],
    [182, 196],
    [145, 184],
    [180, 193],
    [101, 152],
    [14, 38],
    [159, 196],
    [178, 184],
    [63, 94],
    [88, 149],
    [85, 194],
    [88, 98],
    [172, 181],
    [34, 189],
    [116, 152],
    [185, 198],
    [108, 198],
    [60, 168],
    [34, 151],
    [79, 138],
    [44, 171],
    [120, 193],
    [144, 147],
    [150, 181],
    [136, 185],
    [178, 192],
    [157, 199],
    [12, 57],
    [33, 123],
    [53, 104],
    [169, 183],
    [49, 56],
    [173, 199],
    [22, 71],
    [25, 148],
    [140, 189],
    [184, 187],
    [146, 161],
    [2, 186],
    [115, 146],
    [37, 127],
    [46, 51],
    [194, 200],
    [100, 132],
    [146, 187],
    [136, 182],
    [72, 127],
    [115, 183],
    [25, 160],
    [15, 93],
    [151, 193],
    [150, 192],
    [179, 185],
    [116, 160],
    [29, 186],
    [82, 116],
    [1, 95],
    [94, 172],
    [59, 154],
    [63, 93],
    [107, 132],
    [67, 150],
    [93, 169],
    [104, 139],
    [103, 109],
    [40, 83],
    [131, 161],
    [28, 166],
    [19, 39],
    [63, 158],
    [67, 133],
    [134, 165],
    [7, 148],
    [47, 66],
    [145, 199],
    [101, 187],
    [105, 182],
    [179, 197],
    [173, 188],
    [115, 154],
    [194, 195],
    [18, 105],
    [192, 193],
    [93, 136],
    [142, 190],
    [197, 199],
    [184, 196],
    [117, 137],
    [41, 144],
    [60, 148],
    [43, 180],
    [72, 82],
    [106, 154],
    [189, 196],
    [191, 193],
    [95, 142],
    [61, 134],
    [136, 160],
    [54, 120],
    [89, 157],
    [189, 190],
    [114, 120],
    [109, 111],
    [181, 200],
    [120, 127],
    [104, 190],
    [136, 147],
    [91, 166],
    [114, 196],
    [138, 189],
    [42, 124],
    [78, 157],
    [12, 117],
    [18, 96],
    [111, 119],
    [70, 199],
    [168, 183],
    [178, 185],
    [93, 126],
    [171, 191],
    [167, 173],
    [68, 112],
    [178, 198],
    [94, 158],
    [155, 164],
    [185, 195],
    [130, 155],
    [94, 163],
    [38, 112],
    [6, 51],
    [54, 89],
    [32, 88],
    [179, 188],
    [44, 174],
    [41, 52],
    [95, 137],
    [113, 125],
    [42, 128],
    [79, 182],
    [143, 193],
    [135, 164],
    [187, 199],
    [139, 161],
    [91, 95],
    [119, 198],
    [150, 170],
    [183, 184],
    [196, 198],
    [165, 190],
    [22, 66],
    [188, 190],
    [162, 169],
    [29, 141],
    [163, 180],
    [124, 150],
    [23, 66],
    [45, 81],
    [166, 197],
    [158, 197],
    [193, 198],
    [172, 183],
    [124, 140],
    [183, 199],
    [73, 76],
    [152, 169],
    [116, 154],
    [118, 130],
    [28, 190],
    [70, 125],
    [97, 177],
    [58, 199],
    [120, 195],
    [32, 159],
    [136, 187],
    [75, 93],
    [74, 195],
    [175, 177],
    [130, 166],
    [132, 198],
    [121, 164],
    [169, 181],
    [168, 173],
    [106, 149],
    [45, 176],
    [170, 178],
    [188, 189],
    [181, 196],
    [40, 114],
    [195, 198],
    [172, 199],
    [30, 128],
    [91, 114],
    [2, 49],
    [13, 97],
    [78, 145],
    [194, 198],
    [100, 134],
    [134, 188],
    [166, 188],
    [152, 176],
    [122, 200],
    [186, 197],
    [93, 141],
    [142, 181],
    [155, 159],
    [34, 106],
    [13, 85],
    [66, 156],
    [110, 145],
    [156, 164],
    [54, 77],
    [152, 197],
    [26, 105],
    [41, 183],
    [51, 152],
    [46, 108],
    [142, 193],
    [45, 50],
    [26, 138],
    [185, 200],
    [170, 189],
    [102, 162],
    [27, 131],
    [51, 190],
    [89, 129],
    [70, 179],
    [96, 118],
    [57, 94],
    [8, 66],
    [105, 180],
    [36, 104],
    [77, 143],
    [24, 122],
    [24, 174],
    [182, 194],
    [65, 137],
    [93, 99],
    [171, 184],
    [80, 165],
    [143, 175],
    [23, 191],
    [85, 160],
    [78, 164],
    [25, 159],
    [77, 122],
    [10, 140],
    [33, 189],
    [72, 84],
    [128, 198],
    [23, 149],
    [157, 162],
    [113, 122],
    [77, 84],
    [92, 165],
    [97, 98],
    [115, 124],
    [77, 193],
    [141, 196],
    [145, 190],
    [124, 163],
    [35, 200],
    [46, 186],
    [5, 118],
    [6, 140],
    [21, 172],
    [24, 181],
    [198, 200],
    [84, 87],
    [25, 68],
    [48, 127],
    [172, 186],
    [113, 135],
    [66, 151],
    [88, 184],
    [48, 85],
    [119, 140],
    [43, 175],
    [73, 83],
    [160, 189],
    [85, 147],
    [163, 195],
    [184, 188],
    [111, 130],
    [12, 58],
    [42, 166],
    [99, 105],
    [139, 163],
    [105, 156],
    [56, 100],
    [170, 175],
    [122, 136],
    [182, 199],
    [101, 119],
    [21, 82],
    [138, 162],
    [7, 99],
    [96, 104],
    [64, 154],
    [68, 83],
    [72, 114],
    [87, 104],
    [77, 155],
    [45, 198],
    [112, 182],
    [53, 63],
    [68, 121],
    [154, 157],
    [166, 187],
    [54, 60],
    [34, 78],
    [80, 163],
    [88, 191],
    [63, 87],
    [61, 70],
    [130, 144],
    [110, 170],
    [142, 176],
    [4, 72],
    [196, 197],
    [16, 158],
    [190, 194],
    [88, 178],
    [28, 86],
    [15, 193],
    [25, 96],
    [145, 150],
    [85, 104],
    [188, 192],
    [12, 170],
    [152, 192],
    [11, 12],
    [127, 170],
    [61, 145],
    [177, 200],
    [63, 157],
    [79, 130],
    [58, 97],
    [101, 141],
    [121, 140],
    [14, 136],
    [195, 200],
    [35, 143],
    [126, 159],
    [115, 150],
    [87, 97],
    [140, 151],
    [141, 170],
    [194, 196],
    [93, 145],
    [138, 145],
    [167, 187],
    [90, 182],
    [186, 195],
    [132, 155],
    [71, 188],
    [13, 55],
    [129, 134],
    [190, 197],
    [61, 121],
    [122, 176],
    [65, 194],
    [155, 183],
    [175, 184],
    [19, 102],
    [180, 181],
    [121, 179],
    [132, 151],
    [2, 151],
    [114, 125],
    [102, 194],
    [81, 185],
    [140, 176],
    [145, 187],
    [109, 138],
    [116, 123],
    [30, 48],
    [43, 81],
    [182, 185],
    [78, 158],
    [10, 70],
    [125, 156],
    [103, 178],
    [75, 151],
    [6, 26],
    [168, 169],
    [29, 82],
    [164, 200],
    [186, 189],
    [83, 164],
    [2, 116],
    [170, 200],
    [149, 190],
    [144, 155],
    [103, 124],
    [178, 200],
    [187, 194],
    [69, 149],
    [114, 116],
    [95, 170],
    [44, 66],
    [1, 131],
    [89, 126],
    [136, 151],
    [18, 66],
    [126, 137],
    [43, 86],
    [180, 192],
    [51, 175],
    [37, 148],
    [102, 150],
    [63, 97],
    [193, 194],
    [136, 195],
    [147, 179],
    [20, 163],
    [78, 173],
    [130, 151],
    [51, 194],
    [34, 150],
    [14, 93],
    [129, 138],
    [161, 190],
    [151, 167],
    [163, 197],
    [110, 139],
    [80, 134],
    [103, 117],
    [125, 200],
    [125, 145],
    [119, 194],
    [90, 127],
    [94, 147],
    [134, 140],
    [52, 137],
    [144, 145],
    [7, 43],
    [162, 165],
    [41, 83],
    [5, 125],
    [61, 112],
    [30, 134],
    [104, 169],
    [39, 93],
    [89, 132],
    [123, 135],
    [99, 128],
    [88, 155],
    [61, 106],
    [83, 197],
    [183, 195],
    [166, 185],
    [34, 76],
    [131, 157],
    [165, 186],
    [153, 168],
    [186, 198],
    [81, 111],
    [3, 184],
    [106, 136],
    [76, 98],
    [190, 192],
    [154, 189],
    [60, 156],
    [103, 114],
    [181, 191],
    [49, 88],
    [63, 189],
    [31, 88],
    [161, 169],
    [130, 162],
    [190, 198],
    [2, 124],
    [157, 198],
    [166, 196],
    [109, 174],
    [104, 182],
    [64, 84],
    [179, 194],
    [115, 158],
    [112, 175],
    [11, 117],
    [177, 186],
    [9, 69],
    [74, 157],
    [25, 35],
    [142, 151],
    [73, 121],
    [23, 196],
    [1, 123],
    [6, 168],
    [186, 193],
    [60, 189],
    [47, 72],
    [113, 128],
    [39, 77],
    [128, 173],
    [26, 156],
    [112, 155],
    [185, 187],
    [35, 60],
    [41, 145],
    [51, 65],
    [179, 180],
    [149, 179],
    [19, 88],
    [67, 162],
    [24, 29],
    [147, 153],
    [29, 200],
    [102, 161],
    [84, 88],
    [48, 151],
    [57, 169],
    [108, 133],
    [112, 192],
    [104, 189],
    [137, 191],
    [157, 194],
    [134, 177],
    [95, 181],
    [49, 132],
    [112, 166],
    [71, 85],
    [9, 78],
    [15, 200],
    [128, 142],
    [152, 187],
    [15, 160],
    [141, 187],
    [104, 105],
    [123, 199],
    [74, 110],
    [84, 169],
    [176, 186],
    [152, 161],
    [34, 56],
    [50, 126],
    [52, 143],
    [54, 104],
    [130, 154],
    [77, 118],
    [55, 138],
    [113, 147],
    [42, 145],
    [20, 170],
    [157, 190],
    [18, 184],
    [86, 177],
    [20, 97],
    [180, 190],
    [154, 169],
    [74, 82],
    [184, 185],
    [53, 68],
    [97, 147],
    [187, 196],
    [48, 142],
    [122, 141],
    [125, 187],
    [141, 192],
    [3, 120],
    [7, 195],
    [138, 198],
    [117, 122],
    [22, 77],
    [77, 129],
    [125, 190],
    [130, 200],
    [127, 142],
    [173, 175],
    [14, 24],
    [25, 45],
    [39, 101],
    [80, 90],
    [7, 124],
    [5, 28],
    [151, 198],
    [47, 142],
    [54, 57],
    [30, 178],
    [12, 106],
    [50, 185],
    [32, 47],
    [38, 120],
    [25, 121],
    [38, 85],
    [85, 159],
    [131, 188],
    [31, 55],
    [151, 161],
    [163, 199],
    [178, 193],
    [95, 157],
    [87, 171],
    [151, 159],
    [68, 200],
    [164, 165],
    [55, 75],
    [176, 195],
    [88, 101],
    [166, 195],
    [65, 101],
    [170, 181],
    [9, 132],
    [42, 97],
    [195, 199],
    [47, 163],
    [54, 147],
    [45, 194],
    [5, 25],
    [172, 173],
    [70, 175],
    [103, 184],
    [78, 104],
    [44, 133],
    [62, 74],
    [71, 127],
    [109, 200],
    [66, 132],
    [127, 193],
    [88, 169],
    [130, 134],
    [32, 149],
    [156, 171],
    [174, 190],
    [183, 193],
    [55, 126],
    [112, 124],
    [4, 120],
    [187, 200],
    [158, 167],
    [107, 179],
    [84, 123],
    [99, 165],
    [67, 168],
    [191, 198],
    [21, 186],
    [15, 130],
    [69, 80],
    [168, 182],
    [128, 147],
    [19, 49],
    [108, 166],
    [127, 154],
    [30, 145],
    [3, 157],
    [128, 137],
    [95, 152],
    [199, 200],
    [192, 194],
    [27, 87],
    [196, 200],
    [116, 149],
    [50, 69],
    [151, 183],
    [74, 79],
    [174, 193],
    [39, 165],
    [32, 71],
    [129, 188],
    [28, 71],
    [153, 195],
    [55, 89],
    [47, 108],
    [177, 197],
    [176, 178],
    [71, 154],
    [79, 99],
    [162, 181],
    [111, 138],
    [10, 120],
    [23, 110],
    [71, 176],
    [46, 181],
    [66, 194],
    [162, 175],
    [12, 118],
    [109, 160],
    [23, 68],
    [168, 195],
    [23, 29],
    [59, 181],
    [70, 97],
    [100, 118],
    [39, 126],
    [185, 194],
    [130, 152],
    [33, 171],
    [174, 200],
    [138, 200],
    [108, 111],
    [9, 155],
    [90, 193],
    [150, 177],
    [126, 142],
    [143, 192],
    [188, 200],
    [131, 198],
    [182, 198],
    [118, 192],
    [116, 133],
    [134, 174],
    [107, 199],
    [43, 74],
    [144, 196],
    [114, 175],
    [154, 192],
    [60, 87],
    [25, 51],
    [148, 193],
    [3, 139],
    [75, 128],
    [99, 159],
    [112, 181],
    [73, 196],
    [172, 176],
    [124, 141],
    [84, 178],
    [46, 136],
    [197, 200],
    [5, 36],
    [151, 197],
    [67, 140],
    [122, 193],
    [147, 157],
    [6, 43],
    [175, 195],
    [129, 142],
    [138, 181],
    [19, 120],
    [197, 198],
    [117, 132],
    [174, 181],
    [115, 192],
    [86, 160],
    [51, 146],
    [150, 162],
    [176, 197],
    [28, 155],
    [67, 87],
    [65, 135],
    [170, 179],
    [2, 20],
    [49, 180],
    [181, 195],
    [1, 178],
    [123, 178],
    [168, 177],
    [116, 196],
    [137, 152],
    [194, 199],
    [146, 182],
    [109, 113],
    [121, 159],
    [80, 185],
    [142, 186],
    [58, 187],
    [148, 165],
    [190, 196],
    [86, 193],
    [184, 192],
    [25, 106],
    [61, 177],
    [123, 186],
    [128, 192],
    [129, 185],
    [21, 65],
    [9, 36],
    [136, 137],
    [88, 110],
    [167, 181],
    [8, 125],
    [122, 135],
    [99, 167],
    [164, 180],
    [133, 189],
    [114, 161],
    [66, 112],
    [97, 171],
    [170, 196],
    [127, 132],
    [141, 164],
    [70, 74],
    [109, 165],
    [66, 106],
    [73, 125],
    [178, 189],
    [152, 184],
    [192, 196],
    [109, 191],
    [72, 75],
    [40, 47],
    [12, 200],
    [54, 184],
    [25, 115],
    [135, 146],
    [92, 136],
    [189, 193],
    [26, 158],
    [107, 148],
    [130, 185],
    [124, 154],
    [60, 141],
    [43, 196],
    [104, 155],
    [12, 60],
    [187, 195],
    [92, 94],
    [64, 65],
    [28, 127],
    [144, 176],
    [96, 175],
    [164, 179],
    [87, 145],
    [183, 188],
    [163, 170],
    [156, 199],
    [75, 183],
    [163, 176],
    [10, 64],
    [166, 175],
    [42, 84]
  ])
);
// false
