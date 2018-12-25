/**
 * @param {string[]} ops
 * @return {number}
 */
// 56ms
var calPoints = function(ops) {
  const len = ops.length;
  let ret = 0;

  const validNum = [];

  for (let i = 0; i < len; i++) {
    const op = ops[i];
    if (op === 'C') {
      validNum.pop();
    } else if (op === 'D') {
      validNum.push(2 * validNum[validNum.length - 1]);
    } else if (op === '+') {
      validNum.push(
        validNum[validNum.length - 1] + validNum[validNum.length - 2]
      );
    } else {
      validNum.push(Number(op));
    }
  }
  // console.log(validNum);
  return validNum.reduce((x, acc) => x + acc, 0);
};

console.log(calPoints(['5', '2', 'C', 'D', '+']));
// 30

console.log(calPoints(['5', '-2', '4', 'C', 'D', '9', '+', '+']));
// 27
