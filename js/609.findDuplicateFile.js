/**
 * @param {string[]} paths
 * @return {string[][]}
 */
var findDuplicate = function(paths) {
  //key is content
  let map = {};
  let ret = [];
  paths.forEach(d => {
    const arr = d.split(' ');
    const dir = arr[0];
    for (let i = 1; i < arr.length; i++) {
      const groups = /^(\w+\.\w+)+[(](\w+)[)]$/gi.exec(arr[i]);
      const fileName = groups[1];
      const hash = groups[2];
      map[hash] = map[hash] || [];
      map[hash].push(`${dir}/${fileName}`);
    }
  });

  Object.keys(map).map(key => {
    if (map[key].length > 1) ret.push(map[key]);
  });

  return ret;
};

console.log(
  findDuplicate([
    'root/a 1.txt(abcd) 2.txt(efgh)',
    'root/c 3.txt(abcd)',
    'root/c/d 4.txt(efgh)',
    'root 4.txt(efgh)'
  ])
);
// [
//   ['root/a/2.txt', 'root/c/d/4.txt', 'root/4.txt'],
//   ['root/a/1.txt', 'root/c/3.txt']
// ];
