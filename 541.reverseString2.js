/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
  const n = s.length;
  let ret = '';
  let i = 0;

  if (k > n) {
    return s
      .split('')
      .reverse()
      .join('');
  }

  while (i + k <= n) {
    ret +=
      s
        .substring(i, i + k)
        .split('')
        .reverse()
        .join('') + s.substring(i + k, i + 2 * k);
    // +'|';
    i += 2 * k;
  }

  if (n - i < 2 * k && n - i >= k) {
    ret +=
      s
        .substring(i, i + k)
        .split('')
        .reverse()
        .join('') + s.substring(i + k);
  } else if (n - i < k) {
    ret += s
      .substring(i)
      .split('')
      .reverse()
      .join('');
  }

  return ret;
};

console.log(reverseStr('abcdefghijkl', 4)); //dcbaefghlkji
console.log(reverseStr('abcdefg', 4)); //dcbaefg
console.log(reverseStr('abcdefg', 2)); //bacdfeg
console.log(reverseStr('abcdefghi', 2)); //bacdfeghi

console.log(reverseStr('abcdefg', 11)); //gfedcba
console.log(
  reverseStr(
    'krmyfshbspcgtesxnnljhfursyissjnsocgdhgfxubewllxzqhpasguvlrxtkgatzfybprfmmfithphckksnvjkcvnsqgsgosfxc',
    20
  )
); // 'jlnnxsetgcpsbhsfymrkhfursyissjnsocgdhgfxtxrlvugsaphqzxllwebukgatzfybprfmmfithphccxfsogsgqsnvckjvnskk'

console.log(
  reverseStr(
    'hyzqyljrnigxvdtneasepfahmtyhlohwxmkqcdfehybknvdmfrfvtbsovjbdhevlfxpdaovjgunjqlimjkfnqcqnajmebeddqsgl',
    39
  )
); // 'fdcqkmxwholhytmhafpesaentdvxginrjlyqzyhehybknvdmfrfvtbsovjbdhevlfxpdaovjgunjqllgsqddebemjanqcqnfkjmi'
