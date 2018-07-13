/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
  const n = secret.length;
  let bulls = 0;
  let cows = 0;

  const hashSecret = {};
  const hashGuess = {};
  for (let i = 0; i < n; i++) {
    if (secret[i] === guess[i]) bulls++;
    if (hashSecret[secret[i]]) hashSecret[secret[i]]++;
    else hashSecret[secret[i]] = 1;
    if (hashGuess[guess[i]]) hashGuess[guess[i]]++;
    else hashGuess[guess[i]] = 1;
  }
  // console.log(hashSecret, hashGuess);

  Object.keys(hashSecret).forEach(key => {
    if (hashGuess[key]) {
      cows += Math.min(hashSecret[key], hashGuess[key]);
    }
  });

  cows -= bulls;

  return `${bulls}A${cows}B`;
};

console.log(getHint('1807', '7810'));
// '1A3B'

console.log(getHint('1123', '0111'));
// '1A1B'

console.log(getHint('1', '0'));
// '0A0B'
