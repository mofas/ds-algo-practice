/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var complexNumberMultiply = function(a, b) {
  const aNum = /^(-?\d+)[+](-?\d+)i/gi.exec(a);
  const bNum = /^(-?\d+)[+](-?\d+)i/gi.exec(b);

  const aReal = Number(aNum[1]);
  const aImg = Number(aNum[2]);
  const bReal = Number(bNum[1]);
  const bImg = Number(bNum[2]);

  const real = aReal * bReal - aImg * bImg;
  const image = aReal * bImg + bReal * aImg;

  return `${real}+${image}i`;
};

console.log(complexNumberMultiply('1+1i', '1+1i')); // '0+2i'

console.log(complexNumberMultiply('1+-1i', '1+-1i')); // '0+-2i'
