const findAllSubset = set => {
  if (set.length === 0) {
    return [[]];
  } else {
    let ret = [];
    for (let i = 0; i < set.length; i++) {
      const d = set[i];
      const rest = set.filter(dd => dd !== d);
      const res = findAllSubset(rest);
      return ret.concat(res.map(dd => dd.concat(d))).concat(res);
    }
  }
};

console.log(JSON.stringify(findAllSubset([1, 2, 3])));
