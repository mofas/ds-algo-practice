/**
 * @param {string[]} dict
 * @param {string} sentence
 * @return {string}
 */

// pretty slow 368ms
// var replaceWords = function(dict, sentence) {
//   return sentence
//     .split(' ')
//     .map(d => {
//       for (let i = 0; i < dict.length; i++) {
//         if (d.indexOf(dict[i]) === 0) return dict[i];
//       }
//       return d;
//     })
//     .join(' ');
// };

// we can do better by sorting dict by length at first
// and slice is much faster than indexOf
// 124ms
// var replaceWords = function(dict, sentence) {
//   dict.sort((a, b) => a.length - b.length);
//   return sentence
//     .split(' ')
//     .map(d => {
//       for (let i = 0; i < dict.length; i++) {
//         if (d.slice(0, dict[i].length) === dict[i]) return dict[i];
//         if (dict[i].length > d.length) break;
//       }
//       return d;
//     })
//     .join(' ');
// };

// best sol from web
// using trie is amazing!
// 96 ms
var replaceWords = function(dict, sentence) {
  if (sentence.length === 0 || dict.length === 0) return;

  let wordArray = sentence.split(' ');
  let ty = new Trie();

  dict.forEach(root => ty.insert(root));
  // console.log(JSON.stringify(ty));
  for (let i = 0; i < wordArray.length; i++) {
    let word = wordArray[i];
    let root = ty.search(word);
    if (root) wordArray[i] = root;
  }
  return wordArray.join(' ');
};

var Trie = function() {
  this.letters = {};
};

Trie.prototype.insert = function(word) {
  let nodes = this.letters;

  for (let i = 0; i < word.length; i++) {
    let char = word[i];
    if (!nodes[char]) nodes[char] = {};
    nodes = nodes[char];
  }
  nodes.root = true;
};

Trie.prototype.search = function(word) {
  let nodes = this.letters;

  for (let i = 0; i < word.length; i++) {
    let char = word[i];
    if (nodes.root) return word.slice(0, i);

    if (!nodes[char]) return false;
    nodes = nodes[char];
  }
  return false;
};

console.log(
  replaceWords(['cat', 'bat', 'rat'], 'the cattle was rattled by the battery')
);
// "the cat was rat by the bat"
