/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// first version, don't understand why it is slow
// I guess it slow because of sort.push
var nextPermutation = function(nums) {
  const n = nums.length;

  let max = nums[n - 1];
  const sort = [];
  for (let i = n - 1; i >= 0; i--) {
    sort.push(nums[i]);

    if (nums[i] >= max) {
      max = nums[i];
    } else if (nums[i] < max) {
      for (let j = 0; j < sort.length; j++) {
        if (sort[j] > nums[i]) {
          nums[i] = sort[j];
          sort.splice(j, 1);
          break;
        }
      }
      sort.sort((a, b) => a - b);
      for (let j = 0; j < sort.length; j++) {
        nums[i + j + 1] = sort[j];
      }
      break;
    }
  }

  if (sort.length === n) {
    nums.sort((a, b) => a - b);
  }
  console.log(nums);
};

// concise and good sol from web
// var nextPermutation = function(nums) {
//   var point, st= [], tobeSwapped, swap, temp, sub;
//   for(var i=nums.length-1; i>=1; i--) {
//       if(nums[i] > nums[i-1]) {
//           point = i-1;
//           break;
//       }
//   }
//   if(point === undefined) {
//       nums.sort((a, b) => a-b);
//       return;
//   }

//   swap = nums[point];
//   for(var i=nums.length-1; i>=0; i--) {
//       if(nums[i] > swap && !tobeSwapped) {
//           tobeSwapped = i;
//           break;
//       }
//   }
//   temp = nums[point];
//   nums[point] = nums[tobeSwapped];
//   nums[tobeSwapped] = temp;

//   sub = nums.slice(point+1, nums.length).sort((a, b) => a-b);
//   var i= nums.length-1;
//   while(i > point) {
//       nums.pop();
//       i--;
//   }
//   while(sub.length > 0) {
//       nums.push(sub.shift());
//   }
//   return;
// };

// second try: offical solution
var nextPermutation = function(nums) {
  const n = nums.length;

  const swap = (i, j) => {
    const tmp = nums[i];
    nums[i] = nums[j];
    nums[j] = tmp;
  };

  const reverse = i => {
    let from = i;
    let end = n - 1;
    while (from < end) {
      swap(from, end);
      from += 1;
      end -= 1;
    }
  };

  let i = n - 2;
  while ((i >= 0) & (nums[i + 1] <= nums[i])) {
    i--;
  }
  if (i >= 0) {
    let j = n - 1;
    while (j > i && nums[j] <= nums[i]) {
      j--;
    }
    swap(i, j);
  }

  reverse(i + 1);
};

nextPermutation([1, 2, 3]); //[1,3,2]

nextPermutation([1, 3, 2]); //[2,1,3]

nextPermutation([2, 1, 3]); //[2,3,1]

nextPermutation([2, 3, 1]); //[3,1,2]

nextPermutation([3, 1, 2]); //[3,2,1]

nextPermutation([3, 2, 1]); //[1,2,3]

nextPermutation([5, 3, 2, 4, 1]); // [5,3,4,1,2]

nextPermutation([4, 5, 9, 9, 6, 1]); // [4,6,1,5,9,9]
