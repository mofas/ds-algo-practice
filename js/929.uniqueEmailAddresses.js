/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
  let ret = new Set();
  for (const email of emails) {
    let [name, domain] = email.split('@');
    name = name.replace(/\./g, '').split('+')[0];
    const normalizeEmail = name + '@' + domain;
    // console.log(normalizeEmail);
    ret.add(normalizeEmail);
  }

  return ret.size;
};

console.log(
  numUniqueEmails([
    'test.email+alex@leetcode.com',
    'test.e.mail+bob.cathy@leetcode.com',
    'testemail+david@lee.tcode.com'
  ])
);
// 2
