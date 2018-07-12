/**
 * Initialize your data structure here.
 */
var MagicDictionary = function() {
  this.hashSet = [];
  this.wordLength = [];
  this.n = 0;
};

/**
 * Build a dictionary through a list of words
 * @param {string[]} dict
 * @return {void}
 */
MagicDictionary.prototype.buildDict = function(dict) {
  this.dict = dict;
  this.hashSet = [];
  this.wordLength = [];
  dict.forEach(d => {
    let hash = {};
    d.split('').forEach(w => {
      if (hash[w]) hash[w]++;
      else hash[w] = 1;
    });
    this.hashSet.push(hash);
    this.wordLength.push(d.length);
  });
  this.n = dict.length;
  // console.log(this.hashSet, this.wordLength);
};

/**
 * Returns if there is any word in the trie that equals to the given word after modifying exactly one character
 * @param {string} word
 * @return {boolean}
 */
MagicDictionary.prototype.search = function(word) {
  for (let i = 0; i < this.n; i++) {
    if (word.length !== this.wordLength[i]) continue;
    let diff = 0;
    const keySet = Object.keys(this.hashSet[i]);
    let hash = {};
    word.split('').forEach(w => {
      if (hash[w]) hash[w]++;
      else hash[w] = 1;
    });
    // console.log(hash, this.hashSet[i]);
    for (let j = 0; j < keySet.length; j++) {
      if (!hash[keySet[j]]) diff += this.hashSet[i][keySet[j]];
      else diff += Math.max(0, this.hashSet[i][keySet[j]] - hash[keySet[j]]);
      if (diff > 1) break;
    }
    // console.log(diff, '!!');
    if (diff === 1) {
      // console.log('grind compare', this.dict[i], word);
      diff = 0;
      for (let j = 0; j < word.length; j++) {
        if (this.dict[i][j] !== word[j]) diff++;
        if (diff > 1) break;
      }
      if (diff === 1) return true;
    }
  }
  return false;
};

// best sol from web
// more elegant
// it only use word length as key to filter

// class MagicDictionary {
//   constructor() {
//     this.map = {};
//   }

//   buildDict(dict) {
//     // map
//     // key, len
//     // value, list of words
//     for (const w of dict) {
//       const l = w.length;
//       this.map[l] = this.map[l] || [];
//       this.map[l].push(w);
//     }
//   }

//   diff(w1, w2) {
//     let diff = 0;
//     for (let j = 0; j < w1.length; j++) {
//       if (w1[j] !== w2[j]) diff++;
//     }
//     return diff;
//   }

//   search(word) {
//     // iterate all dict
//     // find every word with same length
//     // see if they are only 1 diff
//     const l = word.length;
//     if (l in this.map) {
//       return this.map[l].some(w => this.diff(w, word) === 1);
//     } else {
//       return false;
//     }
//   }
// }

/**
 * Your MagicDictionary object will be instantiated and called as such:
 * var obj = Object.create(MagicDictionary).createNew()
 * obj.buildDict(dict)
 * var param_2 = obj.search(word)
 */

let dict = new MagicDictionary();

dict.buildDict(['hello', 'leetcode']);
console.log(dict.search('hhllo')); // true

console.log(dict.search('hello')); // false
console.log(dict.search('hell')); // false
console.log(dict.search('leetcoded')); // false

console.log('=====');
dict.buildDict(['hello', 'hallo', 'leetcode']);
console.log(dict.search('hhllo')); // true
console.log(dict.search('hello')); // true

console.log(dict.search('hell')); // false
console.log(dict.search('leetcoded')); // false

console.log('=====');

dict.buildDict([
  'a',
  'b',
  'ab',
  'abc',
  'abcabacbababdbadbfaejfoiawfjaojfaojefaowjfoawjfoawj',
  'abcdefghijawefe',
  'aefawoifjowajfowafjeoawjfaow',
  'cba',
  'cas',
  'aaewfawi',
  'babcda',
  'bcd',
  'awefj'
]);
console.log(dict.search('abc')); // false
console.log(dict.search('cba')); // false
