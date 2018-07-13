class Trie {
  constructor() {
    this.trie = {};
  }

  insert(str) {
    //
    let node = this.trie;
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (!node[char]) node[char] = {};
      node = node[char];
    }
    node.root = true;
  }

  search(str) {
    let node = this.trie;
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (!node[char]) return false;
      node = node[char];
    }
    return node.root;
  }
}

// const trie = new Trie();
// trie.insert('abc');
// trie.insert('ace');
// trie.insert('abd');
// console.log(JSON.stringify(trie.trie));
// console.log(trie.search('abc')); // true
// console.log(trie.search('abd')); // true
// console.log(trie.search('ace')); // true
// console.log(trie.search('abe')); // false
// console.log(trie.search('acf')); // false

/**
 * @param {string} s
 * @return {string[]}
 */
// slow
// 236ms
var findRepeatedDnaSequences = function(s) {
  const trie = new Trie();
  const n = s.length;
  let ret = [];
  const inserted = {};
  for (let i = 10; i <= n; i++) {
    const str = s.slice(i - 10, i);
    // console.log(str);
    if (trie.search(str) && !inserted[str]) {
      ret.push(str);
      inserted[str] = true;
    }
    trie.insert(str);
  }

  return ret;
};

// simple substring search match is faster
// 92ms
// var findRepeatedDnaSequences = function(s) {
//   let seen = new Set();
//   let tmpResult = new Set();
//   for (let i = 0; i < s.length; i++) {
//     let dna = s.substr(i, 10);
//     if (seen.has(dna)) {
//       tmpResult.add(dna);
//     } else {
//       seen.add(dna);
//     }
//   }
//   let result = [];
//   result.push(...tmpResult.values());
//   return result;
// };

// best sol from web
// 80 ms
// amazing bit operation lol
// const values = {
//   A: 0,
//   C: 1,
//   G: 2,
//   T: 3
// };

// const char2Val = c => {
//   return values[c];
// };

// var findRepeatedDnaSequences = function(s) {
//   const seen = new Set();
//   const multiple = new Set();
//   const res = [];

//   let key = 0;
//   for (let i = 0; i < 10; i++) {
//     key = (key << 2) | char2Val(s[i]);
//   }
//   seen.add(key);

//   let mask = (1 << 20) - 1;
//   for (let i = 10; i < s.length; i++) {
//     key = ((key << 2) & mask) | char2Val(s[i]);
//     if (multiple.has(key)) {
//       continue;
//     } else if (seen.has(key)) {
//       multiple.add(key);
//       res.push(s.substring(i - 9, i + 1));
//     } else {
//       seen.add(key);
//     }
//   }

//   return res;
// };

console.log(findRepeatedDnaSequences('AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT'));
// [ 'AAAAACCCCC', 'CCCCCAAAAA' ]

console.log(findRepeatedDnaSequences('AAAAAAAAAAA'));
// ['AAAAAAAAAA']
