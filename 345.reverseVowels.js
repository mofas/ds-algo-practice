/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  let vowels = [];
  let vowelsIdx = [];
  let arr = s.split('');
  arr.forEach((d, i) => {
    const ld = d.toLocaleLowerCase();
    if (ld === 'a' || ld === 'e' || ld === 'i' || ld === 'o' || ld === 'u') {
      vowels.push(d);
      vowelsIdx.push(i);
    }
  });

  const n = vowelsIdx.length;
  for (let i = n - 1; i >= 0; i--) {
    arr[vowelsIdx[i]] = vowels[n - i - 1];
  }

  return arr.join('');
};

// best sol from web

// var reverseVowels = function(s) {
//   if (s === null || s.length === 0) {
//     return s;
//   }
//   var chars = s.split('');
//   var low = 0;
//   var high = s.length - 1;
//   var vowels = 'aeiouAEIOU';
//   var tmp;
//   while (low < high) {
//     while (low < high && vowels.indexOf(chars[low]) === -1) {
//       low++;
//     }

//     while (low < high && vowels.indexOf(chars[high]) === -1) {
//       high--;
//     }

//     tmp = chars[high];
//     chars[high] = chars[low];
//     chars[low] = tmp;
//     low++;
//     high--;
//   }

//   return chars.join('');
// };

console.log(reverseVowels('hello')); //holle

console.log(reverseVowels('leetcode')); //leotcede

console.log(reverseVowels('aA')); //Aa
