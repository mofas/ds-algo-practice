/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
  let hash = {};
  cpdomains.forEach(d => {
    const [times, domain] = d.split(' ');
    let domains = domain.split('.');
    let subDom = domains[domains.length - 1];
    hash[subDom] = hash[subDom] || 0;
    hash[subDom] += Number(times);
    for (let i = domains.length - 2; i >= 0; i--) {
      subDom = domains[i] + '.' + subDom;
      hash[subDom] = hash[subDom] || 0;
      hash[subDom] += Number(times);
    }
  });
  let ret = [];
  Object.keys(hash).forEach(key => {
    ret.push(hash[key] + ' ' + key);
  });
  return ret;
};

// elegant and good sol from web
// var subdomainVisits = function(cpdomains) {
//   let tmp = cpdomains.map(item => item.split(/(?= )/)).reduce((res, item) => {
//     for (let i = 0, t; i > -1; i = item[1].indexOf('.', i + 1)) {
//       t = item[1].substr(i + 1);
//       n = Number(item[0]);
//       if (res[t]) {
//         res[t] += n;
//       } else {
//         res[t] = n;
//       }
//     }

//     return res;
//   }, {});
//   return Object.keys(tmp).map(key => tmp[key] + ' ' + key);
// };

console.log(subdomainVisits(['9001 discuss.leetcode.com']));
// ['9001 discuss.leetcode.com', '9001 leetcode.com', '9001 com'];

console.log(
  subdomainVisits([
    '900 google.mail.com',
    '50 yahoo.com',
    '1 intel.mail.com',
    '5 wiki.org'
  ])
);
// [
//   '901 mail.com',
//   '50 yahoo.com',
//   '900 google.mail.com',
//   '5 wiki.org',
//   '5 org',
//   '1 intel.mail.com',
//   '951 com'
// ];
