/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
  const arr1 = version1.split('.');
  const arr2 = version2.split('.');
  const maxLen = Math.max(arr1.length, arr2.length);

  for (let i = 0; i < maxLen; i++) {
    const n1 = Number(arr1[i]) || 0;
    const n2 = Number(arr2[i]) || 0;
    if (n1 > n2) return 1;
    else if (n1 < n2) return -1;
  }

  return 0;
};

console.log(compareVersion('0.1', '1.1'));
// -1;

console.log(compareVersion('1.0.1', '1'));
// 1;

console.log(compareVersion('7.5.2.4', '7.5.3'));
// -1;
