var generate = function(numRows) {
  const rows = [];

  for (let i = 0; i <= numRows - 1; i++) {
    if (i === 0) {
      rows.push([1]);
    } else if (i === 1) {
      rows.push([1, 1]);
    } else {
      const prev = rows[i - 1];
      const row = [1];
      for (let j = 0; j < prev.length - 1; j++) {
        row.push(prev[j] + prev[j + 1]);
      }
      row.push(1);
      rows.push(row);
    }
  }
  return rows;
};

console.log(generate(5));
