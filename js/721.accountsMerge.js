/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */

// 316 ms
var accountsMerge = function(accounts) {
  const emailToName = {};
  const emailToEmail = {};
  const emailSet = new Set();
  let id = 0;
  accounts.forEach(info => {
    const [name, ...emails] = info;
    emails.forEach(e1 => {
      emailToName[e1] = name;
      emailSet.add(e1);
      emails.forEach(e2 => {
        if (e1 !== e2) {
          emailToEmail[e1] = emailToEmail[e1] || new Set();
          emailToEmail[e1].add(e2);
        }
      });
    });
  });

  let ret = [];
  const seen = new Set();

  // console.log(emailToName, emailSet, emailToEmail);
  // console.log(emailToEmail);
  const dfs = (email, list) => {
    if (seen.has(email)) return;
    list.push(email);
    seen.add(email);
    let nextList = emailToEmail[email] || new Set();
    for (const rEmail of nextList) {
      dfs(rEmail, list);
    }
  };

  for (let email of emailSet) {
    if (!seen.has(email)) {
      const name = emailToName[email];
      let emailList = [];
      dfs(email, emailList);
      emailList.sort();
      emailList.unshift(name);
      ret.push(emailList);
      seen.add(email);
    }
  }

  return ret;
};

// best sol from web
// 148ms
var accountsMerge = function(accounts) {
  let father = Array(10001);

  for (let i = 0; i < father.length; i++) {
    father[i] = i;
  }

  const find = id => {
    if (father[id] != id) father[id] = find(father[id]);
    return father[id];
  };

  const union = (id1, id2) => (father[find(id1)] = find(id2));

  let emailToName = new Map();
  let emailToId = new Map();
  let id = 0;

  for (let i = 0; i < accounts.length; i++) {
    let account = accounts[i];
    let name = account[0];
    for (let j = 1; j < account.length; j++) {
      let email = account[j];
      if (!emailToId.has(email)) {
        emailToId.set(email, id);
        id++;
      }
      if (!emailToName.has(email)) emailToName.set(email, name);
      union(emailToId.get(account[1]), emailToId.get(email));
    }
  }

  let resMap = new Map();
  let ans = [];
  emailToName.forEach((val, key) => {
    let index = find(emailToId.get(key));
    if (!resMap.has(index)) {
      resMap.set(index, [key]);
    } else {
      resMap.get(index).push(key);
    }
  });

  resMap.forEach((val, key) => {
    val.sort();
    val.unshift(emailToName.get(val[0]));
    ans.push(val);
  });

  return ans;
};

console.log(
  accountsMerge([
    ['John', 'johnsmith@mail.com', 'john00@mail.com'],
    ['John', 'johnnybravo@mail.com'],
    ['John', 'johnsmith@mail.com', 'john_newyork@mail.com'],
    ['Mary', 'mary@mail.com']
  ])
);
// [
//   ['John', 'john00@mail.com', 'john_newyork@mail.com', 'johnsmith@mail.com'],
//   ['John', 'johnnybravo@mail.com'],
//   ['Mary', 'mary@mail.com']
// ];
