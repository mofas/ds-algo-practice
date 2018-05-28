/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
  const n = chars.length;
  if (n === 0) return 0;

  let cursor = 1;
  let count = 1;
  let prev = chars[0];
  let newLen = 1;

  for (let i = 1; i < n; i++) {
    const ch = chars[i];
    // console.log(prev, ch, cursor);
    if (ch !== prev) {
      if (count > 1) {
        const charsLen = String(count).split('');
        charsLen.forEach(d => {
          chars[cursor++] = d;
          newLen++;
        });
        newLen++;
      } else {
        newLen++;
      }
      chars[cursor] = ch;
      cursor++;
      prev = ch;
      count = 1;
    } else {
      count++;
    }
  }

  if (count > 1) {
    const charsLen = String(count).split('');
    charsLen.forEach(d => {
      chars[cursor++] = d;
      newLen++;
    });
  }

  console.log(chars);
  return newLen;
};

console.log(compress(['a', 'a', 'b', 'b', 'c', 'c', 'c']));
// ['a', '2', 'b', '2', 'c', '3'];

console.log(compress(['a']));
// ['a'];

console.log(
  compress(['a', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'])
);
// ['a', 'b', '1', '2'];

console.log(compress(['a', 'b', 'c']));
// ['a', 'b', 'c'];

console.log(compress(['a', 'b', 'c', 'c', 'c', 'b', 'a']));
// ['a', 'b', 'c'];
