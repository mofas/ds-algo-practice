/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
// 88ms
var uncommonFromSentences = function(A, B) {
  const occurOnce = new Set();
  const occurSeveralTime = new Set();
  const helper = d => {
    if (occurSeveralTime.has(d)) return;
    if (occurOnce.has(d)) {
      occurOnce.delete(d);
      occurSeveralTime.add(d);
    } else {
      occurOnce.add(d);
    }
  };
  A.split(' ').forEach(helper);
  B.split(' ').forEach(helper);
  return [...occurOnce];
};

// best sol
// 56ms
// simple hash
// var uncommonFromSentences = function(A, B) {
//   var x = A.split(' ');
//   var y = B.split(' ');
//   var map = {};
//   var getmapcount = function(s) {
//     for (var i = 0; i < s.length; i++) {
//       if (map.hasOwnProperty(s[i])) {
//         map[s[i]] += 1;
//       } else {
//         map[s[i]] = 1;
//       }
//     }
//   };
//   getmapcount(x);
//   getmapcount(y);
//   var resarr = [];
//   for (var w in map) {
//     if (map[w] == 1) {
//       resarr.push(w);
//     }
//   }
//   return resarr;
// };

console.log(uncommonFromSentences('this apple is sweet', 'this apple is sour'));
// ["sweet","sour"]

console.log(uncommonFromSentences('apple apple', 'banana'));
// ["sweet","sour"]
