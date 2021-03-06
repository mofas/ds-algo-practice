/**
 * @param {number} num
 * @return {string[]}
 */

// 56 ms
var readBinaryWatch = function(num) {
  // the first step, we need to generate 10 bit array.
  if (num === 0) return ['0:00'];

  const helper = (current, remain, arr) => {
    if (current === 0 && remain === 0) return arr;
    if (remain === 0) {
      return helper(current - 1, 0, arr.map(d => d + '0'));
    } else if (current === remain) {
      return arr.map(d => d + '1'.repeat(remain));
    } else if (current > remain) {
      let ret1 = helper(current - 1, remain - 1, arr.map(d => d + '1'));
      let ret2 = helper(current - 1, remain, arr.map(d => d + '0'));
      return ret1.concat(ret2);
    }
    return [];
  };

  const convertToTime = bits => {
    let hrs = 0;
    let mins = 0;
    for (let i = 0; i < 4; i++) {
      hrs *= 2;
      if (bits[i] === '1') hrs += 1;
    }
    for (let i = 4; i < 10; i++) {
      mins *= 2;
      if (bits[i] === '1') mins += 1;
    }
    if (hrs < 12 && mins < 60) {
      return hrs + ':' + ('0' + mins).slice(-2);
    }
    return '';
  };

  const bitsList = helper(10, num, [[]]);
  // console.log(bitsList);
  return bitsList.map(convertToTime).filter(d => d !== '');
};

// best sol from web
// 52 ms
var readBinaryWatch = function(num) {
  var res = [];
  for (var h = 0; h < 12; h++) {
    for (var m = 0; m < 60; m++) {
      if (countBit1(h) + countBit1(m) === num) {
        //if(m<10) m=0+''+m;
        res.push(h + ':' + (m < 10 ? 0 + '' + m : '' + m));
      }
    }
  }
  return res;
};

var countBit1 = function(num) {
  var count = 0;
  while (num > 0) {
    if (num & 1) count++;
    //count += num & 1;
    num = num >> 1;
  }
  return count;
};

console.log(readBinaryWatch(10));
// []

console.log(readBinaryWatch(1));
// [
//   '1:00',
//   '2:00',
//   '4:00',
//   '8:00',
//   '0:01',
//   '0:02',
//   '0:04',
//   '0:08',
//   '0:16',
//   '0:32'
// ];

console.log(readBinaryWatch(2));

// console.log(readBinaryWatch(6));
// // [
// //   '1:31',
// //   '1:47',
// //   '1:55',
// //   '1:59',
// //   '2:31',
// //   '2:47',
// //   '2:55',
// //   '2:59',
// //   '3:15',
// //   '3:23',
// //   '3:27',
// //   '3:29',
// //   '3:30',
// //   '3:39',
// //   '3:43',
// //   '3:45',
// //   '3:46',
// //   '3:51',
// //   '3:53',
// //   '3:54',
// //   '3:57',
// //   '3:58',
// //   '4:31',
// //   '4:47',
// //   '4:55',
// //   '4:59',
// //   '5:15',
// //   '5:23',
// //   '5:27',
// //   '5:29',
// //   '5:30',
// //   '5:39',
// //   '5:43',
// //   '5:45',
// //   '5:46',
// //   '5:51',
// //   '5:53',
// //   '5:54',
// //   '5:57',
// //   '5:58',
// //   '6:15',
// //   '6:23',
// //   '6:27',
// //   '6:29',
// //   '6:30',
// //   '6:39',
// //   '6:43',
// //   '6:45',
// //   '6:46',
// //   '6:51',
// //   '6:53',
// //   '6:54',
// //   '6:57',
// //   '6:58',
// //   '7:07',
// //   '7:11',
// //   '7:13',
// //   '7:14',
// //   '7:19',
// //   '7:21',
// //   '7:22',
// //   '7:25',
// //   '7:26',
// //   '7:28',
// //   '7:35',
// //   '7:37',
// //   '7:38',
// //   '7:41',
// //   '7:42',
// //   '7:44',
// //   '7:49',
// //   '7:50',
// //   '7:52',
// //   '7:56',
// //   '8:31',
// //   '8:47',
// //   '8:55',
// //   '8:59',
// //   '9:15',
// //   '9:23',
// //   '9:27',
// //   '9:29',
// //   '9:30',
// //   '9:39',
// //   '9:43',
// //   '9:45',
// //   '9:46',
// //   '9:51',
// //   '9:53',
// //   '9:54',
// //   '9:57',
// //   '9:58',
// //   '10:15',
// //   '10:23',
// //   '10:27',
// //   '10:29',
// //   '10:30',
// //   '10:39',
// //   '10:43',
// //   '10:45',
// //   '10:46',
// //   '10:51',
// //   '10:53',
// //   '10:54',
// //   '10:57',
// //   '10:58',
// //   '11:07',
// //   '11:11',
// //   '11:13',
// //   '11:14',
// //   '11:19',
// //   '11:21',
// //   '11:22',
// //   '11:25',
// //   '11:26',
// //   '11:28',
// //   '11:35',
// //   '11:37',
// //   '11:38',
// //   '11:41',
// //   '11:42',
// //   '11:44',
// //   '11:49',
// //   '11:50',
// //   '11:52',
// //   '11:56'
// // ];
