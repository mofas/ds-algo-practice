/**
 * @param {string} S
 * @param {string[]} words
 * @return {number}
 */

const shrink = (word, aggesive) => {
  let ret = [];
  let count = 0;
  let prev = null;
  for (let i in word) {
    if (i > 0) {
      if (prev === word[i]) {
        count++;
      } else {
        ret.push(prev.repeat(count));
        prev = word[i];
        count = 1;
      }
    } else {
      prev = word[i];
      count = 1;
    }
  }

  ret.push(prev.repeat(count));
  return ret;
};

const qualified = (hashVal, word) => {
  const target = shrink(word);
  // console.log(hashVal, target);
  if (hashVal.length !== target.length) return false;
  for (const i in hashVal) {
    if (hashVal[i][0] !== target[i][0]) {
      return false;
    }
    const diff = hashVal[i].length - target[i].length;
    // console.log(diff, target[i]);
    if ((hashVal[i].length < 3 && diff === 1) || diff < 0) {
      return false;
    }
  }

  return true;
};

var expressiveWords = function(S, words) {
  let hashVal = shrink(S);

  let ret = 0;

  for (let i in words) {
    const word = words[i];
    if (qualified(hashVal, word)) ret++;
  }

  return ret;
};

// best sol from web
// quite hack, build regexp !!!
// var expressiveWords = function(S, words) {
//   const trimmed = trim(S, 3);
//   let count = 0;
//   for (const word of words) {
//     if (S.length >= word.length) {
//       if (word.match(new RegExp(trimmed))) {
//         count += 1;
//       }
//     }
//   }
//   return count;
// };

// const trim = function(S, dupNum) {
//   let lastSeen = null;
//   let count = 1;
//   let trimmed = '^';
//   for (let i = 0; i < S.length; ++i) {
//     const c = S[i];
//     if (c === lastSeen) {
//       count += 1;
//     } else {
//       lastSeen = c;
//       count = 1;
//     }
//     trimmed += c;
//     if (count >= dupNum && c !== S[i + 1]) {
//       trimmed = trimmed.substring(0, trimmed.length - count + 1);
//       trimmed += '+';
//       count = 1;
//     }
//   }
//   trimmed += '$';
//   return trimmed;
// };

console.log(expressiveWords('heeellooo', ['hello', 'hi', 'helo']));
// 1

console.log(expressiveWords('zzzzzyyyyy', ['zzyy', 'zy', 'zyy']));
// 3

console.log(expressiveWords('aaa', ['aaaa']));
// 0

console.log(
  expressiveWords('dddiiiinnssssssoooo', [
    'dinnssoo',
    'ddinso',
    'ddiinnso',
    'ddiinnssoo',
    'ddiinso',
    'dinsoo',
    'ddiinsso',
    'dinssoo',
    'dinso'
  ])
);

// 3
