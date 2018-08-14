/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
  let pocket = {
    5: 0,
    10: 0
  };

  for (let i = 0; i < bills.length; i++) {
    const bill = bills[i];
    if (bill === 5) pocket[5]++;
    if (bill === 10) {
      if (pocket[5] > 0) {
        pocket[5]--;
        pocket[10]++;
      } else return false;
    }
    if (bill === 20) {
      if (pocket[10] > 0 && pocket[5] > 0) {
        pocket[10]--;
        pocket[5]--;
      } else if (pocket[5] > 2) {
        pocket[5] -= 3;
      } else return false;
    }
    // console.log(pocket);
  }
  return true;
};

console.log(lemonadeChange([5, 5, 5, 10, 20]));
// true

console.log(lemonadeChange([5, 5, 10]));
// true

console.log(lemonadeChange([10, 10]));
// false

console.log(lemonadeChange([5, 5, 10, 10, 20]));
// false
