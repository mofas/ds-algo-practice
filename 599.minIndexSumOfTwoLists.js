/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
  let ret = [];
  let min = Infinity;
  let hash = {};
  list1.forEach((d, i) => {
    hash[d] = i;
  });

  list2.forEach((d, i) => {
    if (hash[d] != null) {
      if (i + hash[d] < min) {
        ret = [d];
        min = i + hash[d];
      } else if (i + hash[d] === min) {
        ret.push(d);
      }
    }
  });

  return ret;
};

// performance and concise sol
// using map is actually faster!

// var findRestaurant = function(list1, list2) {
//   var map1 = new Map();
//   var result = [];
//   var sum = list1.length + list2.length;

//   for (var i = 0; i < list1.length; i++) {
//     map1.set(list1[i], i);
//   }

//   for (var i = 0; i < list2.length; i++) {
//     var checker = i + map1.get(list2[i]);

//     if (map1.has(list2[i]) && checker <= sum) {
//       if (checker < sum) result.pop();
//       result.push(list2[i]);
//       sum = checker;
//     }
//   }
//   return result;
// };

console.log(
  findRestaurant(
    ['Shogun', 'Tapioca Express', 'Burger King', 'KFC'],
    [
      'Piatti',
      'The Grill at Torrey Pines',
      'Hungry Hunter Steakhouse',
      'Shogun'
    ]
  )
);
// ['Shogun']

console.log(
  findRestaurant(
    ['Shogun', 'Tapioca Express', 'Burger King', 'KFC'],
    ['KFC', 'Shogun', 'Burger King']
  )
);

// ['Shogun']
