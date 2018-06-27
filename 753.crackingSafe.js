/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */

// sol from website
// I fail this question
var crackSafe = function(n, k) {
  if (n === 0) return '';

  // find all combination
  // it may be useful in furture.

  // let comb = new Array(k).fill(0).map((_, i) => String(i));
  // let temp = [];

  // for (let i = 1; i < n; i++) {
  //   temp = [];
  //   for (let j = 0; j < k; j++) {
  //     comb.forEach(d => {
  //       temp.push(d + j);
  //     });
  //   }
  //   comb = temp;
  // }

  // let current = comb[0];
  // let prev = current.substring(current.length - 1);
  // let ret = current;
  // let acc = 1;
  // let visited = new Set([current]);
  // console.log(current, prev);

  // while (acc < comb.length) {
  //   for (let i = 0; i < k; i++) {
  //     current = prev + i;
  //     if (!visited.has(current)) {
  //       visited.add(current);

  //       ret += i;
  //       prev = current.substring(current.length - 1);

  //       acc++;
  //       console.log('trigger', ret, current);
  //       break;
  //     }
  //   }
  //   console.log('end loop', acc);
  // }
  // console.log(ret);

  let ret = '0'.repeat(n);
  let goal = Math.pow(k, n);

  const dfs = visited => {
    if (visited.size === goal) return true;
    let prev = ret.substring(ret.length - n + 1, ret.length);
    // console.log('dfs', prev, ret, visited, visited.size);
    for (let i = 0; i < k; i++) {
      let next = prev + i;
      if (!visited.has(next)) {
        visited.add(next);
        ret += i;
        if (dfs(visited)) {
          return true;
        } else {
          // console.log('fail', visited, ret);
          visited.delete(next);
          ret = ret.substring(0, ret.length - 1);
          // console.log('after fail', visited, ret);
        }
      }
    }
    return false;
  };

  dfs(new Set([ret]));

  return ret;
};

// the solition is called de bruijn sequence

console.log(crackSafe(1, 2));
// "01" or "10"

console.log(crackSafe(2, 2));
// "00110" or "01100" or "10011" or "11001"

console.log(crackSafe(1, 4));
// "3210"

console.log(crackSafe(2, 3));
// "0221120100"

console.log(crackSafe(2, 4));
// "03322312113020100"
