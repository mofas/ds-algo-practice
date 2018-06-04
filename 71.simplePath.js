/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  const pathArr = path.split('/');
  // console.log(pathArr);
  let ret = [];
  for (let i = 0; i < pathArr.length; i++) {
    const d = pathArr[i];
    if (d === '..') ret.pop();
    else if (d === '.' || d === '') continue;
    else if (d !== '') ret.push(d);
  }

  // console.log('ret!!', ret);

  return '/' + ret.join('/');
};

console.log(simplifyPath('/../../home/'));
// /home

console.log(simplifyPath('/home/'));
// /home

console.log(simplifyPath('/a/./b/../../c/'));
// /c
