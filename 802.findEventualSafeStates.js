/**
 * @param {number[][]} graph
 * @return {number[]}
 */
// it is still slow
// the second last case take 0.8 sec
// the last take 3 sec
// var eventualSafeNodes = function(graph) {
//   const n = graph.length;
//   let terminal = new Set();

//   for (let i = 0; i < graph.length; i++) {
//     if (graph[i].length === 0) terminal.add(i);
//   }

//   let cycle = new Set();
//   let ret = [];
//   const hasCycle = (current, visited) => {
//     if (terminal.has(current)) return false;
//     if (cycle.has(current) || visited.indexOf(current) > -1) {
//       for (let i = visited.indexOf(current); i < visited.length; i++) {
//         cycle.add(visited[i]);
//       }
//       // console.log('trigger', visited, current);
//       return true;
//     }
//     visited.push(current);
//     for (let i = 0; i < graph[current].length; i++) {
//       if (hasCycle(graph[current][i], visited.slice())) return true;
//     }
//     return false;
//   };

//   for (let i = 0; i < n; i++) {
//     if (cycle.has(i)) continue;

//     if (!hasCycle(i, [])) {
//       ret.push(i);
//       terminal.add(i);
//     }
//   }
//   return ret;
// };

// the sol from discussion board
// the second last case take 0.01 sec
// the last take 0.05 sec

var eventualSafeNodes = function(graph) {
  let res = [];
  const n = graph.length;
  const color = new Array(n).fill(0);

  const dfs = start => {
    if (color[start] !== 0) return color[start] === 1;
    color[start] = 2;
    for (let newNode of graph[start]) {
      if (!dfs(newNode)) return false;
    }
    color[start] = 1;
    return true;
  };

  for (let i = 0; i < n; i++) {
    if (dfs(i)) res.push(i);
  }
  return res;
};

console.log(eventualSafeNodes([[1, 2], [2, 3], [5], [0], [5], [], []]));
// [2, 4, 5, 6]

console.log(eventualSafeNodes([[], [0, 2, 3, 4], [3], [4], []]));
// [0,1,2,3,4]

console.log(
  eventualSafeNodes([
    [114, 238, 443, 463],
    [433],
    [172, 318, 409, 443],
    [25, 141, 196, 331],
    [199],
    [],
    [209, 265, 286, 472],
    [87, 186, 191],
    [136, 158, 335],
    [134, 295],
    [98, 236, 422],
    [68, 186],
    [33, 88, 155, 300],
    [97, 146, 174, 229, 427, 443],
    [199, 456, 464, 466],
    [381, 475],
    [6, 48, 108, 137, 350],
    [309, 472],
    [147, 164, 459, 465],
    [306],
    [21, 55, 194, 213, 221, 258],
    [124, 254, 258],
    [246, 249, 419, 430],
    [209, 453],
    [28, 156, 229],
    [103, 169, 412, 416],
    [],
    [52, 65, 199, 411],
    [45, 50, 237, 491],
    [78, 159, 264, 364, 469],
    [208, 403],
    [113, 341],
    [75, 118, 265, 430],
    [233, 239, 313],
    [250, 300, 435],
    [107, 165, 286, 316, 335, 362],
    [156, 310, 388],
    [],
    [16, 302, 318],
    [192, 289, 451],
    [20, 126, 141, 350, 395],
    [76, 110, 190, 465, 487],
    [245, 342, 382],
    [255, 356],
    [125, 389],
    [82, 228, 296, 403, 443, 477],
    [25, 222, 225],
    [408],
    [285, 386],
    [453],
    [],
    [52, 117, 241, 343, 349, 421],
    [101, 119, 129, 235, 352, 479],
    [],
    [188],
    [91, 156, 377, 388, 444],
    [260, 294, 450, 461],
    [247, 254],
    [139, 167, 307, 418, 478],
    [77, 222, 467],
    [205, 282, 288, 346, 377],
    [],
    [233],
    [124, 188],
    [120, 132, 153, 328, 345],
    [343],
    [79, 269, 370, 422, 431],
    [],
    [336, 348, 363, 394, 402],
    [223, 323, 391, 456],
    [150, 238, 265, 370, 393, 421],
    [],
    [249],
    [95, 134, 220, 380, 451],
    [267, 382, 397],
    [210, 276, 299, 436, 454, 495],
    [99, 212, 299, 336],
    [83, 243, 264],
    [83, 149, 276, 337, 351, 415],
    [259, 378],
    [182, 310],
    [156, 247, 262, 435],
    [108, 265],
    [99, 312, 333, 381, 448],
    [230, 333, 395],
    [341, 443, 490],
    [188, 430],
    [108, 202, 430, 480],
    [122, 236, 424],
    [215, 250, 313, 386],
    [106, 136, 248, 306, 337],
    [209, 331, 381, 432],
    [277, 299, 461, 495],
    [328, 344, 373, 436, 482],
    [121, 175, 187, 457, 474, 492],
    [165],
    [330],
    [192],
    [190, 307, 483],
    [137, 230, 369],
    [],
    [228, 467],
    [281, 402, 441, 488],
    [328, 348, 407, 428, 441, 457],
    [208, 258, 259, 349, 384, 419],
    [25, 130, 320],
    [491],
    [198, 244, 251, 332, 373],
    [237, 464],
    [53, 136, 143],
    [210, 450],
    [233, 325, 363, 380, 385],
    [481],
    [],
    [126, 179, 236, 309, 472, 475],
    [474],
    [240, 256, 304],
    [141, 166],
    [198, 238, 259, 288, 420],
    [],
    [332, 345],
    [144, 253, 316, 424],
    [145, 148, 206, 239, 338, 375],
    [189, 233, 296, 414, 417],
    [217, 340],
    [453],
    [179, 337, 361, 366],
    [135, 146, 192, 211, 287, 452],
    [182],
    [205, 370, 410, 492],
    [134, 178, 415, 438, 443],
    [162, 403, 440, 441],
    [326],
    [],
    [135, 196, 210, 360, 397, 482],
    [442],
    [209, 275, 308, 342, 407, 423],
    [],
    [239, 405],
    [416, 428],
    [246, 281, 408, 467, 479],
    [334, 423, 440, 446],
    [151, 191, 279, 314, 412, 413],
    [],
    [196, 352, 451, 493, 495],
    [210, 271],
    [345, 378, 402],
    [161, 388, 418, 424, 499],
    [253, 315, 392],
    [331, 395],
    [458],
    [154],
    [238],
    [221, 440],
    [298, 330, 419, 441, 491, 498],
    [198, 441, 444],
    [],
    [167, 279, 339, 346],
    [],
    [229, 230, 304, 324, 327, 391],
    [212, 286, 318, 430, 463, 471],
    [],
    [227, 438],
    [213, 430],
    [198, 304, 434, 452],
    [226, 432],
    [264, 270, 338, 351, 365, 492],
    [],
    [169, 222, 409, 443, 474],
    [355, 415],
    [],
    [219, 243, 310, 361, 450, 453],
    [],
    [],
    [212, 229],
    [253, 362, 394, 448],
    [178, 229, 237, 321, 386, 446],
    [407],
    [201, 202, 258, 300, 401, 415],
    [],
    [405, 436],
    [239, 325, 415, 457],
    [],
    [439, 482],
    [301, 454],
    [468, 489],
    [250, 277, 380, 436, 445],
    [192, 407, 424, 428, 476],
    [349, 408, 427],
    [],
    [327, 348, 452],
    [285, 391, 397, 437],
    [196, 305, 397, 464],
    [224, 257, 340, 397, 401, 449],
    [238, 337, 435, 459, 467],
    [402, 457, 475],
    [],
    [364],
    [228, 233, 445, 455],
    [283, 435, 439, 496],
    [392, 488, 491],
    [208, 404, 461, 468],
    [],
    [],
    [250, 463],
    [250, 432],
    [5, 214, 238, 247, 293, 385],
    [14, 236, 297, 324, 360, 371],
    [284, 327, 429, 470],
    [211, 290, 351, 485],
    [271, 275, 377, 400],
    [312],
    [241, 328, 354, 379],
    [343, 429],
    [267, 275, 442, 486, 493],
    [225, 290, 335, 451],
    [217, 252, 260, 305, 474],
    [285, 314, 322, 360, 362, 427],
    [331],
    [320, 412],
    [307, 398, 448],
    [371, 403, 441],
    [235, 243, 298, 394, 462],
    [234, 268, 294, 295, 407, 467],
    [234, 312, 415, 456],
    [288, 414, 415],
    [283],
    [],
    [309, 400, 422, 436, 471, 493],
    [235, 449],
    [],
    [495],
    [324, 381, 383, 464, 476],
    [349],
    [397, 403],
    [334, 376, 380, 386],
    [254, 398, 462],
    [391],
    [244, 249, 259, 321, 323, 448],
    [430, 452, 465],
    [260, 282, 294, 350, 371, 476],
    [],
    [257, 299, 368, 425, 434],
    [],
    [251, 328, 392, 396, 428, 448],
    [],
    [396, 432, 462, 485],
    [256, 259, 341, 383, 392, 458],
    [281, 317, 319, 346, 450, 473],
    [311, 407, 419, 433, 492],
    [],
    [281, 333, 334, 462, 495],
    [254, 284, 302, 351, 434],
    [],
    [289, 295, 302, 308],
    [286, 362, 369, 408, 411, 461],
    [343],
    [279, 314, 332, 440, 441, 454],
    [291, 302, 308, 368, 412],
    [346],
    [],
    [337, 392, 459, 463, 483],
    [281, 339, 360, 373, 380, 450],
    [295, 317, 346, 472],
    [443, 463],
    [187, 474, 498],
    [297, 340, 366, 396, 461, 477],
    [389, 397, 427, 430],
    [301],
    [379],
    [454],
    [301],
    [],
    [315, 337, 399, 474],
    [306, 363, 425, 488],
    [371, 427],
    [277, 321, 377],
    [304, 310, 388, 435, 464, 483],
    [381, 427],
    [303, 308, 418, 425, 474, 499],
    [],
    [363, 409, 428, 480, 482],
    [320, 356],
    [290, 472, 475],
    [142, 335],
    [377, 404, 495],
    [315, 359, 378, 430, 486, 487],
    [312],
    [],
    [],
    [304, 326],
    [315, 347, 385, 413, 414, 497],
    [296, 328, 417, 497],
    [297, 300, 320, 436, 490],
    [313, 459, 490],
    [375, 394, 430, 457, 469, 488],
    [172, 392, 457],
    [452, 458, 498],
    [354, 410, 415, 442, 458],
    [357],
    [315, 334, 348, 384, 473, 498],
    [],
    [314, 351, 412],
    [140, 347, 447, 450],
    [329, 334, 382, 415, 470, 494],
    [],
    [345, 349, 390, 395, 443],
    [],
    [337, 359, 382, 390, 447],
    [314, 477],
    [412],
    [107],
    [341, 396],
    [],
    [350, 374],
    [92],
    [327],
    [258, 479],
    [319, 345, 360, 385, 398, 451],
    [375, 395, 398, 417, 467],
    [385, 402, 410, 450, 466],
    [353, 455, 492],
    [473],
    [330, 491],
    [336, 345, 376, 471],
    [],
    [261, 343, 359, 493],
    [440],
    [408, 454],
    [396, 439, 474],
    [367, 405, 410],
    [402],
    [39, 350, 368],
    [339, 352, 403, 407, 496],
    [227, 442],
    [],
    [338, 349, 359, 398, 403, 486],
    [],
    [345, 378, 436, 451],
    [],
    [398, 418, 455],
    [353, 411, 466],
    [484],
    [365, 409, 421, 476],
    [],
    [372, 421, 432, 434, 454],
    [357, 460],
    [352, 353, 381, 409, 427],
    [352, 398, 405, 453, 464, 472],
    [370, 403, 493],
    [463],
    [423, 426],
    [458],
    [],
    [380, 421, 425, 460, 479],
    [384, 426, 436, 464],
    [381, 399, 451, 493],
    [390, 407, 482, 492],
    [427, 431, 444, 448, 488, 489],
    [411],
    [382, 396, 413, 424, 426, 443],
    [363, 383, 492],
    [481, 492, 497],
    [381, 419, 429, 467, 470, 481],
    [237, 381, 388, 401, 403, 414, 471],
    [380, 399, 422, 424, 441, 447],
    [377, 457],
    [419, 461, 473, 489],
    [376, 407, 459],
    [],
    [416, 479],
    [390, 427, 468, 492],
    [373],
    [379, 385, 398, 401],
    [446, 459, 471, 475],
    [376, 395, 413, 421, 428],
    [380, 408, 440, 446, 447],
    [444],
    [416, 461],
    [449, 457, 476, 482],
    [],
    [461],
    [389, 429, 476],
    [387, 390, 392, 459, 473, 480],
    [407, 463, 472, 485],
    [433, 434, 460],
    [390, 395, 398, 412, 427],
    [416, 420, 479],
    [450, 469, 470, 499],
    [407, 408, 437, 464, 491, 494],
    [428, 446, 496],
    [419, 459, 463, 492],
    [397, 410, 422, 444],
    [445],
    [426, 451, 467],
    [],
    [409, 412],
    [412, 419, 432, 457, 466],
    [449],
    [],
    [],
    [452, 455],
    [383, 432, 449, 473],
    [457],
    [444],
    [412, 419, 450, 456, 458, 465],
    [426, 450, 467, 480, 494],
    [],
    [409, 451, 494],
    [454, 481, 493, 497, 499],
    [416, 427, 434],
    [438, 486, 487, 497],
    [439, 497],
    [422, 431, 437, 471, 475],
    [439, 473],
    [428, 431, 457, 490],
    [440, 448, 470],
    [202, 455, 484],
    [445, 458],
    [463, 475],
    [437, 469, 481, 499],
    [442, 453, 459, 488, 490, 498],
    [],
    [435, 441, 444, 465, 484, 491],
    [434, 466],
    [444, 453, 468, 486, 497],
    [429, 451, 461, 479, 483],
    [430, 431, 439],
    [280, 439, 442, 445, 482, 484],
    [434, 458, 486, 487, 488],
    [445, 474, 480, 482, 484, 494],
    [433, 439, 471],
    [438, 444, 445, 456, 464],
    [456, 462, 469],
    [454, 460, 471, 493, 499],
    [465, 477],
    [464, 480, 485, 486, 497],
    [442, 470, 472, 473, 476, 496],
    [453, 465, 466, 469, 495],
    [452, 488, 494],
    [443, 446, 475, 492, 498],
    [479, 484, 485],
    [449, 466, 478],
    [],
    [445, 460, 471, 477, 489],
    [446, 466, 475, 483, 486, 496],
    [449, 456],
    [484, 495],
    [451, 453, 454, 458, 476],
    [496],
    [471, 494],
    [463, 492],
    [453, 454, 478, 487, 493],
    [462, 463, 469, 484],
    [477],
    [468, 495, 496],
    [457, 461, 463, 485, 495],
    [461, 462, 463, 465, 477],
    [480, 488, 493, 496],
    [479, 480, 489, 493],
    [469, 487],
    [478],
    [],
    [],
    [],
    [481],
    [474, 478, 492],
    [470, 484, 488, 491],
    [],
    [481, 486, 487],
    [483, 485, 488],
    [476, 477, 484],
    [473, 474, 475, 478, 480, 494],
    [478, 498],
    [],
    [],
    [487, 492, 498],
    [481, 484, 488, 489, 495, 496],
    [],
    [486, 488, 489, 492, 494, 495],
    [487, 488, 497],
    [492],
    [489],
    [486],
    [485, 488, 490, 491, 492, 495],
    [486, 489, 492, 493, 494],
    [487, 493, 499],
    [493, 495, 496, 497, 498],
    [497, 498],
    [494, 495, 496, 498],
    [491, 492, 497, 498],
    [492, 493, 494, 498],
    [495, 496],
    [494, 495, 496, 497, 498, 499],
    [495, 497, 498, 499],
    [496, 497, 498, 499],
    [497],
    [498, 499],
    [],
    []
  ])
);

console.log(
  eventualSafeNodes([
    [159],
    [129, 192, 259, 274, 328],
    [334],
    [146, 290, 300, 374, 490],
    [99, 203],
    [24],
    [11, 242, 385],
    [89, 212, 359],
    [376, 427],
    [184, 392],
    [170, 231],
    [56, 114, 394, 402],
    [],
    [28, 68, 193, 236, 255, 321],
    [],
    [328],
    [127, 248, 276, 459],
    [],
    [],
    [],
    [376],
    [131, 163, 210, 221, 268, 318],
    [119, 293, 308],
    [87, 93, 204, 218, 269],
    [119, 132, 286, 316, 471, 475],
    [90, 97, 233, 340],
    [347],
    [281, 413, 480],
    [298],
    [59, 268],
    [305],
    [160, 247, 372, 393, 475],
    [72, 262, 322, 401, 422],
    [464],
    [167, 183, 202, 289, 303, 385],
    [],
    [497],
    [129, 166, 240, 242],
    [46, 112, 367, 466],
    [141, 148, 172, 293, 344, 492],
    [198, 499],
    [83, 104, 217, 233, 296, 450],
    [195, 256],
    [32, 68, 289, 461, 478, 490],
    [32, 241, 298, 402, 453, 482],
    [127, 152, 154, 256, 351, 366],
    [27, 56, 178, 285, 367, 435, 460],
    [122, 178, 286, 418, 468],
    [211, 287, 329, 333],
    [108, 193, 237, 476, 495],
    [],
    [5, 60, 65, 128, 468],
    [148, 385],
    [119, 219],
    [210, 462, 496],
    [113, 132, 215, 366, 421, 494],
    [47, 111, 113, 126, 225, 450, 491],
    [328, 465],
    [76, 251, 307, 396],
    [86, 163, 287],
    [98, 126, 219, 229, 436],
    [91, 222, 262, 345, 386, 462],
    [64, 66, 252, 318, 437],
    [454],
    [117, 176, 181, 417, 421, 487],
    [],
    [],
    [81, 437],
    [116, 403],
    [147, 218, 261, 420],
    [363, 388, 481],
    [],
    [91, 165, 249, 287, 393, 406],
    [231, 356, 462],
    [391],
    [97, 169, 242, 454],
    [109, 189, 431],
    [121, 354, 389, 436],
    [88, 95],
    [247, 379, 403, 460],
    [133, 184, 343, 467],
    [154, 289, 434],
    [137, 236, 303, 372],
    [135, 205, 281, 419, 490],
    [124, 299, 432],
    [146, 331, 370, 373, 494],
    [251],
    [],
    [112, 131, 274, 313, 426, 468],
    [118, 351, 378, 395, 434],
    [119, 401, 447],
    [],
    [179, 224, 231, 341, 427],
    [102, 174, 284, 416, 440, 465],
    [324, 338, 481],
    [231, 348],
    [199, 314],
    [235, 343],
    [352],
    [159, 313, 406],
    [408, 415],
    [122],
    [161, 291, 363],
    [],
    [170, 173, 346],
    [280, 282, 379, 432, 454],
    [239, 248, 345, 452, 495],
    [],
    [],
    [135, 310],
    [295, 345, 350, 379],
    [],
    [333, 414, 462],
    [263, 349],
    [304, 324, 404],
    [],
    [],
    [335, 435],
    [],
    [174, 441],
    [184, 272],
    [212, 250, 278, 454],
    [156, 167, 171, 223],
    [286, 353],
    [241, 260, 337, 355, 491],
    [144, 152, 292, 459, 481],
    [132],
    [193, 269, 356],
    [134, 327],
    [],
    [182, 351, 385, 406],
    [13, 155, 180, 278, 300, 380, 402],
    [166, 255, 404, 413, 444],
    [173, 196, 355, 423, 492],
    [156, 161, 306, 326, 490],
    [],
    [235, 287, 343, 466],
    [202, 453, 485],
    [241, 270, 397],
    [157, 404, 418, 430, 474],
    [226, 228],
    [258],
    [21, 300, 356, 398, 420, 485],
    [164, 261, 446],
    [151, 178, 210, 248, 326, 375],
    [],
    [],
    [230, 249, 304, 307],
    [],
    [214, 329, 373, 443],
    [244, 304, 377, 441, 467, 492],
    [439],
    [170, 377],
    [195, 198, 232, 425, 433, 499],
    [136, 165, 234, 315, 328],
    [193, 236, 459],
    [194, 231, 250, 374],
    [218, 229, 245, 267, 291, 430],
    [171, 291, 328, 333, 484],
    [320],
    [318, 332, 354],
    [176, 189, 294, 408, 426, 434],
    [380, 390, 415, 464],
    [188, 226, 357],
    [190, 336, 341, 390, 448, 453],
    [],
    [187, 208],
    [241, 283, 314, 441, 457, 478],
    [],
    [170, 174, 437, 483],
    [186],
    [228, 372, 449, 455, 491, 497],
    [232, 260, 443, 481],
    [490],
    [213, 242, 311, 367, 393, 490],
    [194, 245, 294],
    [291, 415],
    [],
    [197, 425, 438, 476],
    [209, 288, 404, 426],
    [419],
    [207, 242, 264, 269, 386, 475],
    [244, 407],
    [207],
    [228, 267, 306],
    [289, 322, 329, 376],
    [214, 264, 289, 397, 447, 493],
    [208, 234, 334, 339, 413, 476],
    [284, 294, 329, 393],
    [],
    [331, 388],
    [337, 362],
    [339, 368, 399, 479],
    [],
    [389, 413, 459],
    [196, 267, 268, 338, 399, 472],
    [307, 324],
    [206, 403, 415],
    [240, 300, 306],
    [],
    [377, 425],
    [],
    [377, 445],
    [257, 365, 451],
    [],
    [232, 384, 463, 489, 496],
    [410],
    [256, 293, 311, 356, 380, 412],
    [],
    [],
    [452],
    [224, 284, 386, 433, 437],
    [32, 225, 267, 291, 299],
    [],
    [151],
    [268, 304, 355, 408, 444, 476],
    [],
    [337],
    [265, 440, 467, 469],
    [225, 249, 356],
    [228, 235],
    [344, 385, 394, 499],
    [22, 224, 275, 312, 320, 452],
    [235, 253, 262, 274, 464, 496],
    [246, 312, 360],
    [363, 370, 444, 472],
    [232, 449, 452, 466, 476, 487],
    [342, 373],
    [359, 379, 411, 421, 463, 491],
    [248, 384, 404, 441, 487],
    [],
    [243, 276, 352, 446, 454, 485],
    [388],
    [255, 261, 292, 473, 474],
    [294, 321, 333, 456, 495],
    [],
    [254, 364, 367, 437],
    [335, 365, 460],
    [],
    [267, 395, 437, 479],
    [264, 389, 416, 457],
    [307, 342, 389, 427, 471, 489],
    [359, 363, 390],
    [285, 327, 388, 408, 441],
    [],
    [338, 356, 369, 436, 486],
    [261, 297, 307, 393, 403, 477],
    [],
    [486],
    [263, 319, 482, 483, 485, 491],
    [492],
    [259, 310, 443],
    [41, 317, 490],
    [298, 304, 403, 484],
    [427],
    [272, 382],
    [314, 357, 475],
    [276, 302, 333, 397, 408, 444],
    [286, 340, 401, 429, 446],
    [324, 325, 362, 388, 410, 442],
    [337, 425, 433, 434],
    [324, 336, 351, 359],
    [427, 439],
    [287, 320, 449],
    [285, 387, 397, 425],
    [280, 314, 348, 373, 374],
    [371, 382, 486],
    [314, 331, 419, 430],
    [288, 345, 426, 465],
    [145, 487],
    [286, 329, 360, 388],
    [366, 416, 435, 470],
    [312, 339, 417],
    [322, 455],
    [279, 376, 454, 490],
    [383, 414, 423, 463, 489],
    [323, 330, 378, 385],
    [342, 402, 442, 457, 484],
    [348],
    [303, 387, 441, 446],
    [299],
    [334, 346, 424, 490],
    [393, 467],
    [432, 440, 496],
    [294, 298, 448, 459],
    [],
    [332, 350, 392, 412, 457, 460],
    [359, 389, 392, 426, 429, 483],
    [328, 359, 380, 487],
    [180, 302],
    [425, 447],
    [],
    [329],
    [494],
    [297, 330, 364, 377, 386, 479],
    [316, 351, 415, 447, 451, 485],
    [383, 459],
    [302, 331, 363, 364, 401, 438],
    [333],
    [372, 382, 426, 453, 459, 463],
    [378, 433, 479, 497],
    [349],
    [316, 391, 400, 442, 487],
    [338, 454],
    [368, 496],
    [315, 422, 441, 463, 482],
    [363, 390, 447, 455, 465],
    [397, 491],
    [340, 391, 392, 444, 469, 472],
    [318, 323, 335, 371, 385, 474],
    [361, 388, 426, 482],
    [],
    [327, 340],
    [329],
    [],
    [334, 375, 377, 395, 400, 477],
    [357],
    [379, 443, 471],
    [326, 344, 400, 491],
    [320, 323, 391, 421, 474],
    [393],
    [401, 411, 465],
    [442, 456],
    [],
    [332, 382, 472],
    [391, 417, 452, 482, 495, 497],
    [340, 382, 427, 429, 442],
    [449],
    [347, 348, 359, 390, 434, 456],
    [406],
    [],
    [352, 421, 427, 457],
    [339, 353, 404, 451, 452],
    [],
    [],
    [355, 399],
    [364, 390, 412, 416],
    [354, 398, 413],
    [373],
    [353, 382, 441, 470],
    [382, 413],
    [386, 428, 443, 487],
    [343, 413, 415, 423, 474],
    [416, 430, 489, 491],
    [407, 415, 441, 489, 494],
    [352, 379, 392, 412],
    [348, 372, 396, 468],
    [406],
    [425],
    [352, 362, 385, 458, 463, 491],
    [374, 408, 426, 428],
    [375, 376, 414, 461],
    [384, 399, 447],
    [362, 405, 420, 478],
    [363, 376, 404],
    [381, 434],
    [435],
    [374, 378, 381, 437, 441, 458],
    [370, 408, 451, 461, 481],
    [],
    [371, 466],
    [498],
    [391, 410, 436, 452, 481],
    [367, 425],
    [400, 441],
    [423, 478],
    [392, 431, 458, 491],
    [378, 425],
    [371, 409],
    [430, 442, 464],
    [378, 401, 425, 442, 497, 499],
    [199, 372, 387, 390, 450, 467, 476],
    [],
    [395, 491, 494],
    [419, 487],
    [383, 393, 474, 480],
    [401, 490],
    [418, 429, 467, 468, 469, 488],
    [386, 397, 461, 472, 481],
    [387, 453],
    [],
    [389, 442, 477, 479, 482],
    [394, 419, 436],
    [396],
    [390, 435, 445],
    [429, 456],
    [441],
    [391, 402, 426, 445, 469],
    [428],
    [464, 467, 472, 488, 492],
    [391, 471, 482],
    [419, 471, 481, 482],
    [],
    [],
    [416, 449, 462, 464, 468, 475],
    [462, 483],
    [418, 430, 465],
    [],
    [75, 400, 402, 473, 477, 490],
    [443, 447, 470, 491, 498],
    [441, 448, 449, 495],
    [428, 437, 460, 478],
    [438, 457, 481, 484],
    [414, 433, 451],
    [412, 419, 454, 462],
    [440, 481],
    [423, 478],
    [],
    [481],
    [418, 429, 442, 449, 471, 473],
    [435, 446, 448, 471, 498],
    [416, 431, 442, 446, 453],
    [497],
    [],
    [436, 447],
    [465, 478],
    [424, 443, 472, 498],
    [455],
    [75, 430, 444, 449, 463, 470, 482],
    [437, 447, 486],
    [422],
    [],
    [436, 465],
    [435, 436, 489],
    [432, 479, 494],
    [426, 429, 445, 452, 479, 485],
    [],
    [456, 474],
    [433, 458, 461, 474, 477, 479],
    [446],
    [],
    [451, 479, 489, 497],
    [435, 438, 446, 475, 485],
    [439],
    [462, 470, 489],
    [446, 449, 462],
    [444, 457, 485],
    [442, 466],
    [466],
    [493],
    [463, 478, 480, 491],
    [447, 451, 478, 479, 496],
    [451, 455, 458],
    [455],
    [457, 499],
    [461, 471],
    [453, 476, 498],
    [483, 484],
    [461, 472, 475, 487, 498],
    [451, 483],
    [177, 452, 478, 480, 497],
    [456, 493],
    [],
    [455, 471],
    [],
    [],
    [],
    [],
    [465, 468, 478, 495],
    [470, 474],
    [],
    [476, 485, 497],
    [465, 470, 471, 491, 492, 496],
    [478, 487, 490, 496],
    [482, 498],
    [472, 478, 491, 492],
    [472, 478, 485, 487, 495, 498],
    [482, 485, 488, 497, 498],
    [473, 475, 477, 480, 481, 496],
    [474, 477, 485, 496],
    [479, 491, 492, 493],
    [475, 480, 490, 492],
    [486, 487, 488, 492, 496, 498],
    [474, 477, 485],
    [490, 492, 498],
    [478, 480, 481, 482, 498],
    [480],
    [490, 491, 493],
    [485, 486, 493],
    [],
    [481, 487, 489, 498, 499],
    [483, 484, 485, 487, 497],
    [485, 491, 496, 498],
    [490, 491, 494],
    [486, 490, 493, 497, 499],
    [487, 488, 490, 494, 499],
    [],
    [],
    [490, 493, 494, 498],
    [492, 494, 496, 499],
    [491, 493, 494, 495, 496, 497],
    [498],
    [497],
    [497, 498, 499],
    [495, 496, 497, 498, 499],
    [496, 497, 498, 499],
    [497, 498, 499],
    [498, 499],
    [499],
    []
  ])
);
