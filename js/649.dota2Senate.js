/**
 * @param {string} senate
 * @return {string}
 */
// 1988ms
// too slow
var predictPartyVictory = function(senate) {
  senate = senate.split('');
  const n = senate.length;
  // console.log(senate);
  let removed = true;
  while (removed) {
    removed = false;
    for (let i = 0; i < n; i++) {
      const current = senate[i];
      if (current === 'R') {
        for (let j = 1; j < senate.length; j++) {
          if (senate[(i + j) % senate.length] === 'D') {
            senate[(i + j) % senate.length] = 'N';
            removed = true;
            // console.log(senate);
            break;
          }
        }
      } else if (current === 'D') {
        for (let j = 1; j < senate.length; j++) {
          if (senate[(i + j) % senate.length] === 'R') {
            senate[(i + j) % senate.length] = 'N';
            removed = true;
            // console.log(senate);
            break;
          }
        }
      }
    }
  }

  for (let i = 0; i < n; i++) {
    if (senate[i] === 'R') return 'Radiant';
    if (senate[i] === 'D') return 'Dire';
  }
};

// best sol from web
// 68ms
var predictPartyVictory = function(senate) {
  const len = senate.length,
    dire = [],
    radiant = [];
  for (let i = 0; i < len; i++) {
    if (senate[i] === 'D') {
      dire.push(i);
    } else {
      radiant.push(i);
    }
  }
  while (dire.length > 0 && radiant.length > 0) {
    let direIndex = dire.shift(),
      radiantIndex = radiant.shift();
    if (direIndex < radiantIndex) {
      dire.push(direIndex + len);
    } else {
      radiant.push(radiantIndex + len);
    }
  }
  return dire.length === 0 ? 'Radiant' : 'Dire';
};

console.log(predictPartyVictory('RD'));
// Radiant

console.log(predictPartyVictory('RDRDD'));
// Radiant

console.log(predictPartyVictory('RDDR'));
// Radiant

console.log(predictPartyVictory('RDRD'));
// Radiant

console.log(predictPartyVictory('RDD'));
// Dire

console.log(predictPartyVictory('RDDRD'));
// Dire
