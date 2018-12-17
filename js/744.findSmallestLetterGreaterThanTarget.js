/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */

// 60ms
var nextGreatestLetter = function(letters, target) {
  let from = 0;
  let to = letters.length - 1;
  let mid;
  while (from < to) {
    mid = Math.floor((from + to) / 2);
    if (target >= letters[mid - 1] && target < letters[mid]) {
      // console.log(from, to, mid, letters[mid]);
      return letters[mid];
    } else if (target < letters[mid]) {
      to = mid - 1;
    } else {
      from = mid + 1;
    }
  }
  // console.log('final', from, to);
  if (target < letters[to]) return letters[to];
  return letters[0];
};

console.log(nextGreatestLetter(['c', 'f', 'j'], 'a'));
// 'c'

console.log(nextGreatestLetter(['c', 'f', 'j'], 'j'));
// 'c'

console.log(nextGreatestLetter(['c', 'f', 'j'], 'k'));
// 'c'

console.log(nextGreatestLetter(['c', 'f', 'j'], 'c'));
// 'f'

console.log(nextGreatestLetter(['c', 'f', 'j'], 'd'));
// 'f'

console.log(nextGreatestLetter(['c', 'f', 'j'], 'g'));
// 'j'

console.log(
  nextGreatestLetter(['e', 'e', 'e', 'e', 'e', 'e', 'n', 'n', 'n', 'n'], 'e')
);
// 'n'
