/**
 * @param {number[]} price
 * @param {number[][]} special
 * @param {number[]} needs
 * @return {number}
 */

const canUseSpecial = (needs, sp) => {
  let ret = [];
  // console.log('canUseSpecial', needs, sp);
  for (let i = 0; i < needs.length; i++) {
    if (needs[i] >= sp[i]) {
      ret[i] = needs[i] - sp[i];
    } else {
      return false;
    }
  }
  return ret;
};

var shoppingOffers = function(price, special, needs) {
  let min = Infinity;

  const helper = (needs, spFrom, spent) => {
    // console.log(needs, spFrom, spent);
    // directly buy
    let extraPrice = 0;
    for (let i = 0; i < needs.length; i++) {
      extraPrice += needs[i] * price[i];
    }
    if (extraPrice + spent < min) min = extraPrice + spent;
    if (extraPrice > 0) {
      for (let i = spFrom; i < special.length; i++) {
        let next = canUseSpecial(needs, special[i]);
        // console.log('next', i, next);
        if (next) {
          helper(next, i, spent + special[i][special[i].length - 1]);
        }
      }
    }
  };

  helper(needs, 0, 0);
  return min;
};

console.log(shoppingOffers([2, 5], [[3, 0, 5], [1, 2, 10]], [3, 2]));
// 14

console.log(shoppingOffers([2, 3, 4], [[1, 1, 0, 4], [2, 2, 1, 9]], [1, 2, 1]));
// 11
