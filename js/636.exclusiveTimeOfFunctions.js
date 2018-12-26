/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
// 88ms
var exclusiveTime = function(n, logs) {
  // process data
  const timeStack = [];
  let otherStack = [];
  const ret = new Array(n).fill(0);
  let otherTime = 0;
  for (const log of logs) {
    const [fid, type, time] = log.split(':');
    if (type === 'start') {
      timeStack.push(Number(time));
      otherStack.push(otherTime);
      otherTime = 0;
    } else if (type === 'end') {
      const startTime = timeStack.pop();
      const elapsedTime = Number(time) - startTime + 1;
      const excTime = elapsedTime - otherTime;
      ret[fid] += excTime;
      otherTime += excTime + otherStack.pop();
    }
    // console.log(timeStack, otherStack, otherTime, ret);
  }
  return ret;
};

console.log(exclusiveTime(2, ['0:start:0', '1:start:2', '1:end:5', '0:end:6']));
// [3, 4]
console.log(
  exclusiveTime(1, [
    '0:start:0',
    '0:start:2',
    '0:end:5',
    '0:start:6',
    '0:end:6',
    '0:end:7'
  ])
);
// [8]

console.log(
  exclusiveTime(2, [
    '0:start:0',
    '0:start:2',
    '0:end:5',
    '1:start:6',
    '1:end:6',
    '0:end:7'
  ])
);
// [7 , 1]
