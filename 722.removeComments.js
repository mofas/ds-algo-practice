/**
 * @param {string[]} source
 * @return {string[]}
 */
var removeComments = function(source) {
  let imd = [];
  let ret = [];

  let blockMode = false;
  let newLine = '';
  for (let i = 0; i < source.length; i++) {
    const line = source[i];
    let lastCursor = 0;
    for (let j = 0; j < line.length; j++) {
      // console.log(line[j], '===== ', newLine, j);
      if (!blockMode && line[j] === '/' && line[j + 1] === '/') {
        newLine += line.substring(lastCursor, j);
        lastCursor = line.length;
        break;
      }
      if (!blockMode && line[j] === '/' && line[j + 1] === '*') {
        newLine += line.substring(lastCursor, j);
        j += 2;
        blockMode = true;
      }
      if (blockMode && line[j] === '*' && line[j + 1] === '/') {
        blockMode = false;
        j += 1;
        lastCursor = j + 1;
      }
    }

    if (!blockMode) {
      newLine += line.substring(lastCursor, line.length);
    }

    if (!blockMode && newLine.length > 0) {
      ret.push(newLine);
      newLine = '';
    }
  }
  return ret;
};

// console.log(
//   removeComments([
//     '/*Test program */',
//     'int main()',
//     '{ ',
//     '  // variable declaration ',
//     'int a, b, c;',
//     '/* This is a test',
//     '   multiline  ',
//     '   comment for ',
//     '   testing */',
//     'a = b + c;',
//     '}'
//   ])
// );
// // ['int main()', '{ ', '  ', 'int a, b, c;', 'a = b + c;', '}'];

// console.log(
//   removeComments([
//     'main() {',
//     '   int x = 1; // Its comments here',
//     '   x++;',
//     '   cout << x;',
//     '   //return x;',
//     '   x--;',
//     '}'
//   ])
// );
// // [
// //   'main() {',
// //   '   int x = 1; ',
// //   '   x++;',
// //   '   cout << x;',
// //   '   ',
// //   '   x--;',
// //   '}'
// // ];

// console.log(removeComments(['a/*comment', 'line', 'more_comment*/b']));
// // ['ab'];

// console.log(
//   removeComments([
//     'struct Node{',
//     '    /*/ declare members;/**/',
//     '    int size;',
//     '    /**/int val;',
//     '};'
//   ])
// );
// // ['struct Node{', '    ', '    int size;', '    int val;', '};'];

// console.log(
//   removeComments([
//     'void func(int k) {',
//     '// this function does nothing /*',
//     '   k = k*2/4;',
//     '   k = k/2;*/',
//     '}'
//   ])
// );
// // ['void func(int k) {', '   k = k*2/4;', '   k = k/2;*/', '}'];

// console.log(removeComments(['a/*/b//*c', 'blank', 'd//*e/*/f']));
// // ['af'];

// console.log(removeComments(['a/*/b//*c', 'blank', 'd/*/e*//f']));
// // ['ae*'];

console.log(
  removeComments([
    '/*/dadb/*/aec*////*//*ee*//*//b*////*badbda//*bbacdbbd*//ceb//*cdd//**//de*////*',
    'ec//*//*eebd/*/*//*////*ea/*/bc*//cbdacbeadcac/*/cee*//bcdcdde*//adabeaccdd//*',
    'ddadbede//*//*/*/ac/*/ea//*bbeb/*/ea//*a//*//*cdbeb*//ab/*/abde/*//*/d//**////*',
    'e/*/eabeea/*///*c*////*dc*//bcadcde/*/acbe//*d/*/*//ae//*dc//*cc//*//*eaebb*//',
    'eed*//cd//**///*/*//e//*bbcbbaedb*//aabb//*badb*//d/*/e*//ade//*bacbc*//ea//*a',
    '/*/bcbc//*ebdb/*/bab/*/a/*//*/d/*///*de/*///*d*//dc*///*/cd//*ccd//*a//*caacad',
    '/*/cadaacca/*/c/*/c*//bb*////*//*e//*/*//*//*//*/ebd*//abd/*/ce*//e/*/aaa//*//*',
    'cbae*//cc*///*/e/*//*/d*//bdeeee//*b*//de*//aceca*//dddd*///*///*deba*//abbdd/*/',
    'dcabe/*/a/*/bdc//*cec*//ebabc//**//*//cc//*b*//*////*abdea*///*/c*//bc//*/*/ae',
    'badcc//**//*///*/dd//*d*//*//*////*d*//eabb/*/de/*//*/*//a/*/c/*/c//*dad/*/*//',
    'dd*////*//*//*/*/*//e/*/ec*//cac*//d//*aadc/*/ae/*/ebc//*//**//*///*/bbd*//ee/*/',
    'eb/*///*cd*//dcdbaaadd//*ced/*/dcabe//*//*a/*//*///*ea*///*//*/*//b/*//*/dd/*/',
    'ba*//e*//cd//*/*/dd/*/*//dd//**//aab//**//*//*//d/*//*/*//*//*//cddecbbb//*ee*//',
    'ab//*d*//d/*/dbdcadb//*badbedb//*ac//*bd*///*//*///*/*//*/d*//d*//c/*/a//*cb//*',
    '*//e//*ad//*cdabb*///*/d/*/bcbad//*ba/*///*d/*//*/ab//*/*//*/*//*//cb//**//cac',
    '*//bedcba/*/ee/*/ecc/*/e//**//b/*/bebcbac/*//*/bcaa//*adacdcdb*///*/ecb*//e//*',
    'aeabd/*/aeead/*/ccccd//*dc*////*edc*//e/*/*//c//**//b//*aceaa/*/ccbabed*//dbba',
    'c/*/a*//aa//**//b*//beecc//*aea/*///**//c//*//*bcbb/*/e/*/*//*////*//*b/*/bdbe',
    'de/*/c*//aedb*//b*//*//*//bdad*//bece/*/ce/*/*//cacbea/*/ee/*//*/c//*ab//*/*/*//',
    '//**//cec//*ae/*/baeb//*be//*ddcbdc*//ae//*dc*//*//cbb*//cadabe*//cca//*/*/c*//',
    '//*a*//d/*/c/*/da*//ac*////**//cbb*//eccdba/*/cdec//*eb/*/ebec//*aac/*/cdcd//*',
    '*//cd*//dde//**//a/*/ea//*//*eb/*/c//*/*/babac/*/b/*/caede*///*/eabcdd*//*///*/',
    '//*d/*/*//aad//**//bcad/*///*a/*/d//*//*cebdcbedcdadebdab/*/b*//bbcabcddbab*//',
    '*///*//*/*//*//cccb/*/*//bee/*/ace*//da//*bdb//*db*//ccdab*////*/*/*//adb//*da',
    '//*aeb*//badc*//daaa*//e/*/*//aaead*//eb//*/*///*//*ae//**//c//*/*/abbdccccbe//*',
    '/*/b//*//*e//*b*//d/*/aea*//*//ae/*/c//*c*////*bdeb*//bb*//cbc/*//*/cbebabcccb',
    'e/*/daeaebc*//edceacc/*///**//e/*/ec/*/a*//bcab*///*/bbdc/*/abcdbe//**//da//*c',
    'ca//*c//*ba//*decbc*//cccdda/*/*//bcaead/*/*///*///*d/*/dda*//acdd/*///**//c//*',
    'ec//*/*/a//*bcb//*c/*/d//*e//*//*ce/*///*aeb//*b*//eb/*/edeeec//**//bdddc/*/c//*',
    'ebdce//*dedaaeda/*/*//aaea//*//*//*//**//d//*//*/*/*///*/c/*/dcadec//*/*/e*//a'
  ])
);

// [
//   'aec*',
//   'ec',
//   'ddadbede',
//   'e',
//   'eed*',
//   'bab',
//   'c/bb*',
//   'cbae*',
//   'dcabebdc',
//   'badcc',
//   'dd*',
//   'eb/dcdbaaadd',
//   'ba*',
//   'ab',
//   '*',
//   '*',
//   'aeabdccccd',
//   'c/aa',
//   'de/aedb*',
//   '*',
//   '*',
//   '/dc',
//   'e/edceacc/ea*',
//   'ca',
//   'ec',
//   'ebdce',
// ];
