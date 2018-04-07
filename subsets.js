const findAllSubset = set => {
  if (set.length === 0) {
    return [[]];
  } else {
    const [first, ...rest] = set;
    const res = findAllSubset(rest);
    return res.map(d => d.concat(first)).concat(res);
  }
};

console.log(JSON.stringify(findAllSubset([1, 2, 3])));
