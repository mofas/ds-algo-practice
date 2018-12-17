/**
 * @param {string} S
 * @return {string}
 */
var toGoatLatin = function(S) {
  return S.split(' ')
    .map((d, i) => {
      const firstChar = d[0];
      const append = 'ma' + new Array(i + 1).fill('a').join('');
      const lowerFirstChar = firstChar.toLocaleLowerCase();
      if (
        lowerFirstChar === 'a' ||
        lowerFirstChar === 'e' ||
        lowerFirstChar === 'i' ||
        lowerFirstChar === 'o' ||
        lowerFirstChar === 'u'
      ) {
        return d + append;
      } else {
        const word = d.substring(1) + firstChar;

        return word + append;
      }
    })
    .join(' ');
};

console.log(toGoatLatin('I speak Goat Latin'));
// Imaa peaksmaaa oatGmaaaa atinLmaaaaa

console.log(toGoatLatin('The quick brown fox jumped over the lazy dog'));
// heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa
