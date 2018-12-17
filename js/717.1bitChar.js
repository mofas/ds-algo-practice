// I use dynamic programming which can solve more general case.
// However, in this problem, it's performance is so bad.

const isValid = bits => {
  const len = bits.length;
  if (len === 0) {
    return true;
  } else if (bits[len - 1] === 0) {
    return isValid(bits.slice(0, len - 1)) || isValid(bits.slice(0, len - 2));
  } else if (len > 1 && bits[len - 1] === 1 && bits[len - 2] === 1) {
    return isValid(bits.slice(0, len - 2));
  }

  return false;
};

var isOneBitCharacter = function(bits) {
  const len = bits.length;
  if (bits[len - 1] !== 0) {
    return false;
  }
  return isValid(bits.slice(0, len - 1));
};

console.log(isOneBitCharacter([1, 0, 0])); // true

console.log(isOneBitCharacter([1, 1, 1, 0])); // false

console.log(isOneBitCharacter([1, 1, 1, 1, 0])); // true

console.log(isOneBitCharacter([1, 1, 1, 1])); // false

console.log(isOneBitCharacter([0, 0, 0])); // true

console.log(isOneBitCharacter([0, 1, 0])); // false
