/**
 * Initialize your data structure here.
 */
// 168ms
var Trie = function() {
  this.root = {};
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  let current = this.root;
  for (let i = 0; i < word.length; i++) {
    if (!current[word[i]]) {
      current[word[i]] = {};
    }
    current = current[word[i]];
  }
  current['#'] = true;
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  let current = this.root;
  for (let i = 0; i < word.length; i++) {
    if (!current[word[i]]) return false;
    current = current[word[i]];
  }
  return !!current['#'];
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  let current = this.root;
  for (let i = 0; i < prefix.length; i++) {
    if (!current[prefix[i]]) return false;
    current = current[prefix[i]];
  }
  return !!current;
};

// best sol from web
// 108ms
/**
 * Initialize your data structure here.
 */
var Trie = function() {
  this.root = {};
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  let cur = this.root;
  for (let i = 0, len = word.length; i < len; i++) {
    let c = word.charAt(i);
    if (!(c in cur)) cur[c] = {};
    cur = cur[c];
  }
  cur['.'] = true;
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  // apple
  let cur = this.root;
  for (let i = 0, len = word.length; i < len; i++) {
    let c = word.charAt(i);
    if (!(c in cur)) return false;
    cur = cur[c];
  }
  return '.' in cur;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  let cur = this.root;
  for (let i = 0, len = prefix.length; i < len; i++) {
    let c = prefix.charAt(i);
    if (!(c in cur)) return false;
    cur = cur[c];
  }
  return true;
};

let trie = new Trie();

trie.insert('apple');
console.log(trie.search('apple')); // returns true
console.log(trie.search('app')); // returns false
trie.startsWith('app'); // returns true
trie.insert('app');
console.log(trie.search('app')); // returns true
