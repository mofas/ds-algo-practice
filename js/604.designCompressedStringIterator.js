/**
 * @param {string} compressedString
 */
// 80 ms, beat 100%
var StringIterator = function(compressedString) {
  const len = compressedString.length;
  this.queue = [];
  let i = 0;
  while (i < len) {
    const char = compressedString[i];
    i++;
    let repeatStr = '';
    let repeat = 1;
    while (/\d/.test(compressedString[i])) {
      repeatStr += compressedString[i];
      i++;
    }
    repeat = parseInt(repeatStr);
    this.queue.push([char, repeat]);
  }
  // console.log(this.queue);
};

/**
 * @return {character}
 */
StringIterator.prototype.next = function() {
  if (this.queue.length === 0) return ' ';
  const ret = this.queue[0][0];
  this.queue[0][1]--;
  if (this.queue[0][1] <= 0) this.queue.shift();

  return ret;
};

/**
 * @return {boolean}
 */
StringIterator.prototype.hasNext = function() {
  return !!this.queue.length;
};

let iterator = new StringIterator('L1e2t1C1o1d1e1');

console.log(iterator.next()); // return 'L'
console.log(iterator.next()); // return 'e'
console.log(iterator.next()); // return 'e'
console.log(iterator.next()); // return 't'
console.log(iterator.next()); // return 'C'
console.log(iterator.next()); // return 'o'
console.log(iterator.next()); // return 'd'
console.log(iterator.hasNext()); // return true
console.log(iterator.next()); // return 'e'
console.log(iterator.hasNext()); // return false
console.log(iterator.next()); // return ' '

iterator = new StringIterator('L10e2');
console.log(iterator.next()); // return 'L'
console.log(iterator.next()); // return 'L'
console.log(iterator.next()); // return 'L'
console.log(iterator.next()); // return 'L'
console.log(iterator.next()); // return 'L'
console.log(iterator.next()); // return 'L'
