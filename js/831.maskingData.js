/**
 * @param {string} S
 * @return {string}
 */
var maskPII = function(S) {
  if (S.indexOf('@') >= 0) {
    let ret = S.toLocaleLowerCase();
    const nameMatched = /^(\w+)+@([a-zA-Z0-9\.]+)+$/gi.exec(ret);
    const name = nameMatched[1];
    const address = nameMatched[2];
    const firstChar = name[0];
    const lastChar = name[name.length - 1];
    return `${firstChar}*****${lastChar}@${address}`;
  } else {
    let ret = S.replace(/\W+/gi, '');
    if (ret.length > 10) {
      const cc = ret.length - 10;
      ret = `+${'*'.repeat(cc)}-***-***-${ret.substring(ret.length - 4)}`;
    } else {
      ret = `***-***-${ret.substring(ret.length - 4)}`;
    }
    return ret;
  }
};

console.log(maskPII('LeetCode@LeetCode.com'));
// "l*****e@leetcode.com"

console.log(maskPII('AB@qq.com'));
// "a*****b@qq.com"

console.log(maskPII('1(234)567-890'));
// "***-***-7890"

console.log(maskPII('86-(10)12345678'));
// "+**-***-***-5678"

console.log(maskPII('"+(501321)-50-23431"'));
// "+***-***-***-3431"
