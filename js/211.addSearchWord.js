/**
 * Initialize your data structure here.
 */
// TLE
// var WordDictionary = function() {
//   this.words = [];
// };

// /**
//  * Adds a word into the data structure.
//  * @param {string} word
//  * @return {void}
//  */

// WordDictionary.prototype.addWord = function(word) {
//   this.words.push(word);
// };

// /**
//  * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter.
//  * @param {string} word
//  * @return {boolean}
//  */
// WordDictionary.prototype.search = function(word) {
//   let cands = this.words.slice();
//   const len = word.length;
//   cands = cands.filter(d => d.length === len);

//   let next = [];
//   for (let i = 0; i < len; i++) {
//     if (cands.length === 0) return false;
//     if (word[i] === '.') continue;
//     for (const w of cands) {
//       if (w[i] === word[i]) {
//         next.push(w);
//       }
//     }
//     cands = next;
//     next = [];
//   }
//   return cands.length > 0;
// };

// 220ms
var WordDictionary = function() {
  this.words = {};
};

/**
 * Adds a word into the data structure.
 * @param {string} word
 * @return {void}
 */

WordDictionary.prototype.addWord = function(word) {
  let cursor = this.words;
  for (let i = 0; i < word.length; i++) {
    const ch = word[i];
    if (!cursor[ch]) cursor[ch] = {};
    cursor = cursor[ch];
  }
  cursor['@'] = true;
};

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter.
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
  const n = word.length;
  const helper = (cursor, i) => {
    // console.log(cursor, i);
    if (!cursor) return false;
    if (i === n) return !!cursor['@'];
    if (word[i] === '.') {
      for (const ch in cursor) {
        if (ch !== '@' && helper(cursor[ch], i + 1)) return true;
      }
      return false;
    } else {
      return helper(cursor[word[i]], i + 1);
    }
  };
  return helper(this.words, 0);
};

// best sol
// 100ms
/**
 * Initialize your data structure here.
 */
var WordDictionary = function() {
  this.words = [];
};

/**
 * Adds a word into the data structure.
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
  const len = word.length;
  if (!this.words[len]) {
    this.words[len] = [];
  }
  this.words[len].push(word);
};

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter.
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
  const words = this.words[word.length];

  if (!words) {
    return false;
  }

  return words.reduce((acc, curr) => {
    if (acc) {
      return acc;
    }
    if (curr.length !== word.length) {
      return false;
    }
    for (let i = 0; i < curr.length; ++i) {
      if (curr[i] !== word[i] && word[i] !== '.') {
        return false;
      }
    }
    return true;
  }, false);
};

const wd = new WordDictionary();
wd.addWord('bad');
wd.addWord('dad');
wd.addWord('mad');
console.log(wd.search('pad')); // false
console.log(wd.search('bad')); // true
console.log(wd.search('.ad')); // true
console.log(wd.search('b..')); // true
