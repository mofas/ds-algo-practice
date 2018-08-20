/**
 * Initialize your data structure here.
 */
// 60ms
var MapSum = function() {
  this.root = {};
};

/**
 * @param {string} key
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function(key, val) {
  let current = this.root;
  // we need to check original val.
  let originalVal = null;
  let existed = true;
  for (let i = 0; i < key.length; i++) {
    if (!current[key[i]]) {
      existed = false;
      break;
    }
    current = current[key[i]];
  }
  if (existed) {
    originalVal = current['@'] || null;
  }
  // console.log('originalVal', originalVal);

  current = this.root;
  for (let i = 0; i < key.length; i++) {
    if (!current[key[i]]) {
      current[key[i]] = {};
    }
    current = current[key[i]];
    current['#'] = current['#'] || 0;
    if (originalVal != null) {
      current['#'] += val - originalVal;
    } else {
      current['#'] += val;
    }
  }
  current['@'] = val;
};

/**
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function(prefix) {
  let current = this.root;
  for (let i = 0; i < prefix.length; i++) {
    // console.log('search', current);
    if (!current[prefix[i]]) return 0;
    current = current[prefix[i]];
  }
  return current['#'];
};

// best sol from web
// 48ms
// var MapSum = function() {
//   this.prefixVals = { val: 0 };
// };

// /**
//  * @param {string} key
//  * @param {number} val
//  * @return {void}
//  */
// MapSum.prototype.insert = function(key, val) {
//   let currentNode = this.prefixVals;
//   for (let i = 0; i < key.length; i++) {
//     let char = key.charAt(i);
//     if (!currentNode[char]) {
//       // This node has not been created yet, create it
//       currentNode[char] = { val: 0 };
//     }
//     if (i === key.length - 1) {
//       // This is the whole prefix, set the value in the tree
//       currentNode[char].val = val;
//     }
//     currentNode = currentNode[char];
//   }
//   // console.log(this.prefixVals);
// };

// /**
//  * @param {string} prefix
//  * @return {number}
//  */
// MapSum.prototype.sum = function(prefix) {
//   // First find the prefix, and start there
//   // If it doesn't exist, return 0.
//   let node = this.prefixVals;
//   for (let i = 0; i < prefix.length; i++) {
//     if (!node) {
//       return 0;
//     }
//     let char = prefix.charAt(i);
//     node = node[char];
//   }
//   // Then from there, do a sum over all the children under that prefix
//   let sum = 0;
//   function sumHelper(node) {
//     // This node here is a different variable than the one outside this function
//     if (node) {
//       sum += node.val || 0;
//       Object.keys(node).forEach(key => {
//         if (key !== 'val') {
//           sumHelper(node[key]);
//         }
//       });
//     }
//   }
//   sumHelper(node);
//   return sum;
// };

let mapSum = new MapSum();

mapSum.insert('apple', 3);
console.log(mapSum.sum('ap'));
// 3
mapSum.insert('app', 2);
console.log(mapSum.sum('ap'));
// 5

mapSum = new MapSum();
mapSum.insert('aa', 3);
console.log(mapSum.sum('a'));
// 3

mapSum.insert('aa', 2);
console.log(mapSum.sum('a'));
// 2

console.log(mapSum.sum('aa'));
// 2

mapSum.insert('aaa', 3);
console.log(mapSum.sum('aaa'));
// 3
