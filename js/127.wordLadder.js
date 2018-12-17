/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */

// 1804 ms
var ladderLength = function(beginWord, endWord, wordList) {
  // buildEdge
  const edgesMap = {};

  wordList.push(beginWord);

  const n = wordList.length;
  const wordLen = beginWord.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      let diff = 0;
      for (let k = 0; k < wordLen; k++) {
        if (wordList[i][k] !== wordList[j][k]) diff++;
      }
      if (diff === 1) {
        edgesMap[wordList[i]] = edgesMap[wordList[i]] || [];
        edgesMap[wordList[j]] = edgesMap[wordList[j]] || [];
        edgesMap[wordList[i]].push(wordList[j]);
        edgesMap[wordList[j]].push(wordList[i]);
      }
    }
  }

  // console.log(edgesMap);
  // DFS
  const seen = new Set([beginWord]);
  const queue = [[beginWord, 1]];
  let min = Infinity;
  while (queue.length > 0) {
    const [current, count] = queue.shift();
    const ne = edgesMap[current] || [];
    // console.log(current, ne);
    for (let i = 0; i < ne.length; i++) {
      if (current === endWord) {
        if (count < min) min = count;
      } else {
        if (!seen.has(ne[i])) {
          queue.push([ne[i], count + 1]);
          seen.add(ne[i]);
        }
      }
    }
    // console.log(queue);
  }

  return min === Infinity ? 0 : min;
};

// best sol from web
// 88 ms
var ladderLength = function(beginWord, endWord, wordList) {
  wordList = new Set(wordList);
  if (wordList.size === 0 || !wordList.has(endWord)) {
    return 0;
  }

  wordList.delete(endWord);

  let beginSet = new Set([beginWord]),
    endSet = new Set([endWord]),
    visited = new Set();

  let len = 1,
    strLen = beginWord.length;

  while (beginSet.size > 0 && endSet.size > 0) {
    console.log(beginSet, endSet);
    if (beginSet.size > endSet.size) {
      let tmp = beginSet;
      beginSet = endSet;
      endSet = tmp;
    }

    let temp = new Set();
    for (let word of beginSet.keys()) {
      for (let i = 0; i < word.length; i++) {
        let former = i == 0 ? '' : word.slice(0, i);
        let after = word.slice(i + 1);

        for (let j = 0; j < 26; j++) {
          let letter = String.fromCharCode(97 + j);
          let newWord = former + letter + after;

          if (endSet.has(newWord)) {
            return len + 1;
          }

          if (!visited.has(newWord) && wordList.has(newWord)) {
            temp.add(newWord);
            visited.add(newWord);
          }
        }
      }
    }
    beginSet = temp;
    len++;
  }
  return 0;
};

// 1780 ms
// I try to use two side set to improve performance
// however it is still slow.
// the main performance gain actually from not build the edgesMap!!!
var ladderLength = function(beginWord, endWord, wordList) {
  // buildEdge
  const edgesMap = {};

  wordList.push(beginWord);

  const n = wordList.length;
  const wordLen = beginWord.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      let diff = 0;
      for (let k = 0; k < wordLen; k++) {
        if (wordList[i][k] !== wordList[j][k]) diff++;
      }
      if (diff === 1) {
        edgesMap[wordList[i]] = edgesMap[wordList[i]] || [];
        edgesMap[wordList[j]] = edgesMap[wordList[j]] || [];
        edgesMap[wordList[i]].push(wordList[j]);
        edgesMap[wordList[j]].push(wordList[i]);
      }
    }
  }

  // console.log(edgesMap);
  // 2 side BFS
  let ret = 1;
  const seen = new Set();
  let beginSet = new Set([beginWord]);
  let endSet = new Set([endWord]);

  while (beginSet.size > 0 && endSet.size > 0) {
    // console.log(beginSet, endSet);
    if (beginSet.size > endSet.size) {
      let tmp = beginSet;
      beginSet = endSet;
      endSet = tmp;
    }

    let temp = new Set();
    for (let word of beginSet.keys()) {
      // console.log('loop', word, edgesMap[word]);

      const ne = edgesMap[word] || [];
      for (let i = 0; i < ne.length; i++) {
        if (!seen.has(ne[i])) {
          temp.add(ne[i]);
          seen.add(ne[i]);
        }
        if (endSet.has(ne[i])) return ret + 1;
      }
    }
    beginSet = temp;
    ret++;
    // console.log('end of loop', seen, beginSet, endSet);
  }

  return 0;
};

console.log(
  ladderLength('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog'])
);
// 5

console.log(ladderLength('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log']));
// 0

console.log(
  ladderLength('cet', 'ism', [
    'kid',
    'tag',
    'pup',
    'ail',
    'tun',
    'woo',
    'erg',
    'luz',
    'brr',
    'gay',
    'sip',
    'kay',
    'per',
    'val',
    'mes',
    'ohs',
    'now',
    'boa',
    'cet',
    'pal',
    'bar',
    'die',
    'war',
    'hay',
    'eco',
    'pub',
    'lob',
    'rue',
    'fry',
    'lit',
    'rex',
    'jan',
    'cot',
    'bid',
    'ali',
    'pay',
    'col',
    'gum',
    'ger',
    'row',
    'won',
    'dan',
    'rum',
    'fad',
    'tut',
    'sag',
    'yip',
    'sui',
    'ark',
    'has',
    'zip',
    'fez',
    'own',
    'ump',
    'dis',
    'ads',
    'max',
    'jaw',
    'out',
    'btu',
    'ana',
    'gap',
    'cry',
    'led',
    'abe',
    'box',
    'ore',
    'pig',
    'fie',
    'toy',
    'fat',
    'cal',
    'lie',
    'noh',
    'sew',
    'ono',
    'tam',
    'flu',
    'mgm',
    'ply',
    'awe',
    'pry',
    'tit',
    'tie',
    'yet',
    'too',
    'tax',
    'jim',
    'san',
    'pan',
    'map',
    'ski',
    'ova',
    'wed',
    'non',
    'wac',
    'nut',
    'why',
    'bye',
    'lye',
    'oct',
    'old',
    'fin',
    'feb',
    'chi',
    'sap',
    'owl',
    'log',
    'tod',
    'dot',
    'bow',
    'fob',
    'for',
    'joe',
    'ivy',
    'fan',
    'age',
    'fax',
    'hip',
    'jib',
    'mel',
    'hus',
    'sob',
    'ifs',
    'tab',
    'ara',
    'dab',
    'jag',
    'jar',
    'arm',
    'lot',
    'tom',
    'sax',
    'tex',
    'yum',
    'pei',
    'wen',
    'wry',
    'ire',
    'irk',
    'far',
    'mew',
    'wit',
    'doe',
    'gas',
    'rte',
    'ian',
    'pot',
    'ask',
    'wag',
    'hag',
    'amy',
    'nag',
    'ron',
    'soy',
    'gin',
    'don',
    'tug',
    'fay',
    'vic',
    'boo',
    'nam',
    'ave',
    'buy',
    'sop',
    'but',
    'orb',
    'fen',
    'paw',
    'his',
    'sub',
    'bob',
    'yea',
    'oft',
    'inn',
    'rod',
    'yam',
    'pew',
    'web',
    'hod',
    'hun',
    'gyp',
    'wei',
    'wis',
    'rob',
    'gad',
    'pie',
    'mon',
    'dog',
    'bib',
    'rub',
    'ere',
    'dig',
    'era',
    'cat',
    'fox',
    'bee',
    'mod',
    'day',
    'apr',
    'vie',
    'nev',
    'jam',
    'pam',
    'new',
    'aye',
    'ani',
    'and',
    'ibm',
    'yap',
    'can',
    'pyx',
    'tar',
    'kin',
    'fog',
    'hum',
    'pip',
    'cup',
    'dye',
    'lyx',
    'jog',
    'nun',
    'par',
    'wan',
    'fey',
    'bus',
    'oak',
    'bad',
    'ats',
    'set',
    'qom',
    'vat',
    'eat',
    'pus',
    'rev',
    'axe',
    'ion',
    'six',
    'ila',
    'lao',
    'mom',
    'mas',
    'pro',
    'few',
    'opt',
    'poe',
    'art',
    'ash',
    'oar',
    'cap',
    'lop',
    'may',
    'shy',
    'rid',
    'bat',
    'sum',
    'rim',
    'fee',
    'bmw',
    'sky',
    'maj',
    'hue',
    'thy',
    'ava',
    'rap',
    'den',
    'fla',
    'auk',
    'cox',
    'ibo',
    'hey',
    'saw',
    'vim',
    'sec',
    'ltd',
    'you',
    'its',
    'tat',
    'dew',
    'eva',
    'tog',
    'ram',
    'let',
    'see',
    'zit',
    'maw',
    'nix',
    'ate',
    'gig',
    'rep',
    'owe',
    'ind',
    'hog',
    'eve',
    'sam',
    'zoo',
    'any',
    'dow',
    'cod',
    'bed',
    'vet',
    'ham',
    'sis',
    'hex',
    'via',
    'fir',
    'nod',
    'mao',
    'aug',
    'mum',
    'hoe',
    'bah',
    'hal',
    'keg',
    'hew',
    'zed',
    'tow',
    'gog',
    'ass',
    'dem',
    'who',
    'bet',
    'gos',
    'son',
    'ear',
    'spy',
    'kit',
    'boy',
    'due',
    'sen',
    'oaf',
    'mix',
    'hep',
    'fur',
    'ada',
    'bin',
    'nil',
    'mia',
    'ewe',
    'hit',
    'fix',
    'sad',
    'rib',
    'eye',
    'hop',
    'haw',
    'wax',
    'mid',
    'tad',
    'ken',
    'wad',
    'rye',
    'pap',
    'bog',
    'gut',
    'ito',
    'woe',
    'our',
    'ado',
    'sin',
    'mad',
    'ray',
    'hon',
    'roy',
    'dip',
    'hen',
    'iva',
    'lug',
    'asp',
    'hui',
    'yak',
    'bay',
    'poi',
    'yep',
    'bun',
    'try',
    'lad',
    'elm',
    'nat',
    'wyo',
    'gym',
    'dug',
    'toe',
    'dee',
    'wig',
    'sly',
    'rip',
    'geo',
    'cog',
    'pas',
    'zen',
    'odd',
    'nan',
    'lay',
    'pod',
    'fit',
    'hem',
    'joy',
    'bum',
    'rio',
    'yon',
    'dec',
    'leg',
    'put',
    'sue',
    'dim',
    'pet',
    'yaw',
    'nub',
    'bit',
    'bur',
    'sid',
    'sun',
    'oil',
    'red',
    'doc',
    'moe',
    'caw',
    'eel',
    'dix',
    'cub',
    'end',
    'gem',
    'off',
    'yew',
    'hug',
    'pop',
    'tub',
    'sgt',
    'lid',
    'pun',
    'ton',
    'sol',
    'din',
    'yup',
    'jab',
    'pea',
    'bug',
    'gag',
    'mil',
    'jig',
    'hub',
    'low',
    'did',
    'tin',
    'get',
    'gte',
    'sox',
    'lei',
    'mig',
    'fig',
    'lon',
    'use',
    'ban',
    'flo',
    'nov',
    'jut',
    'bag',
    'mir',
    'sty',
    'lap',
    'two',
    'ins',
    'con',
    'ant',
    'net',
    'tux',
    'ode',
    'stu',
    'mug',
    'cad',
    'nap',
    'gun',
    'fop',
    'tot',
    'sow',
    'sal',
    'sic',
    'ted',
    'wot',
    'del',
    'imp',
    'cob',
    'way',
    'ann',
    'tan',
    'mci',
    'job',
    'wet',
    'ism',
    'err',
    'him',
    'all',
    'pad',
    'hah',
    'hie',
    'aim',
    'ike',
    'jed',
    'ego',
    'mac',
    'baa',
    'min',
    'com',
    'ill',
    'was',
    'cab',
    'ago',
    'ina',
    'big',
    'ilk',
    'gal',
    'tap',
    'duh',
    'ola',
    'ran',
    'lab',
    'top',
    'gob',
    'hot',
    'ora',
    'tia',
    'kip',
    'han',
    'met',
    'hut',
    'she',
    'sac',
    'fed',
    'goo',
    'tee',
    'ell',
    'not',
    'act',
    'gil',
    'rut',
    'ala',
    'ape',
    'rig',
    'cid',
    'god',
    'duo',
    'lin',
    'aid',
    'gel',
    'awl',
    'lag',
    'elf',
    'liz',
    'ref',
    'aha',
    'fib',
    'oho',
    'tho',
    'her',
    'nor',
    'ace',
    'adz',
    'fun',
    'ned',
    'coo',
    'win',
    'tao',
    'coy',
    'van',
    'man',
    'pit',
    'guy',
    'foe',
    'hid',
    'mai',
    'sup',
    'jay',
    'hob',
    'mow',
    'jot',
    'are',
    'pol',
    'arc',
    'lax',
    'aft',
    'alb',
    'len',
    'air',
    'pug',
    'pox',
    'vow',
    'got',
    'meg',
    'zoe',
    'amp',
    'ale',
    'bud',
    'gee',
    'pin',
    'dun',
    'pat',
    'ten',
    'mob'
  ])
);
// 11
