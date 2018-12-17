/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */

// 616 ms 5x slower
const prevNum = numStr => {
  if (numStr === '0') {
    return '9';
  } else {
    return String((Number(numStr) - 1) % 10);
  }
};

const nextNum = numStr => {
  if (numStr === '9') {
    return '0';
  } else {
    return String((Number(numStr) + 1) % 10);
  }
};

var openLock = function(deadends, target) {
  const deSet = new Set();
  deadends.forEach(d => {
    deSet.add(d);
  });

  if (deSet.has(target) || deSet.has('0000')) return -1;

  let newT = null;
  let newStr = null;
  let current = null;
  let t = null;
  const map = new Map();
  map.set(target, 0);
  const helper = startPoint => {
    let queue = [startPoint];
    while (queue.length) {
      current = queue.shift();
      if (current === '0000') return map.get(current);
      t = current.split('');
      for (let i = 0; i < 4; i++) {
        newT = t.slice();
        newT[i] = prevNum(t[i]);
        newStr = newT.join('');
        if (!deSet.has(newStr)) {
          map.set(newStr, map.get(current) + 1);
          queue.push(newStr);
          deSet.add(newStr);
        }
      }
      for (let i = 0; i < 4; i++) {
        newT = t.slice();
        newT[i] = nextNum(t[i]);
        newStr = newT.join('');
        if (!deSet.has(newStr)) {
          map.set(newStr, map.get(current) + 1);
          queue.push(newStr);
          deSet.add(newStr);
        }
      }
    }
  };

  const ret = helper(target);

  return ret || -1;
};

// best sol from web
// it is 2-end BFS
// it maintain 2 sets
// clever!
// const turn = (seq, i, direction) => {
//   let s = Number(seq[i]);

//   if (s === 0 && direction === -1) {
//     s = 9;
//   } else if (s === 9 && direction === 1) {
//     s = 0;
//   } else {
//     s += direction;
//   }

//   return seq.substring(0, i) + s + seq.substring(i + 1);
// };

// const openLock = (deadends, target) => {
//   let deads = new Set();

//   deadends.forEach(d => deads.add(d));

//   if (deads.has('0000')) return -1;

//   let begin = new Set(['0000']);
//   let end = new Set([target]);
//   let res = 0;

//   while (begin.size && end.size) {
//     let temp = new Set();

//     for (let seq of begin) {
//       if (end.has(seq)) return res;
//       if (deads.has(seq)) continue;
//       deads.add(seq);
//       for (let i = 0; i < 4; i++) {
//         let combo1 = turn(seq, i, 1);
//         let combo2 = turn(seq, i, -1);
//         if (!deads.has(combo1)) temp.add(combo1);
//         if (!deads.has(combo2)) temp.add(combo2);
//       }
//     }
//     begin = end;
//     end = temp;
//     res++;
//   }
//   return -1;
// };

console.log(openLock(['0201', '0101', '0102', '1212', '2002'], '0202'));
// 6

console.log(openLock(['8888'], '0009'));
// 1

console.log(
  openLock(
    ['8887', '8889', '8878', '8898', '8788', '8988', '7888', '9888'],
    '8888'
  )
);
// -1

console.log(
  openLock(
    ['0001', '0010', '0100', '1000', '0009', '0090', '0900', '9000'],
    '8888'
  )
);
// -1

console.log(openLock(['0000'], '8888'));
// -1
