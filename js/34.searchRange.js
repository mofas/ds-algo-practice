/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  //
  const n = nums.length;
  let front = 0;
  let back = n - 1;
  if (n === 1) {
    if (nums[0] === target) {
      return [0, 0];
    }
    return [-1, -1];
  }

  let locate = null;

  while (front <= back) {
    const mid = front + Math.floor((back - front) / 2);
    if (nums[mid] < target) {
      front = mid + 1;
    } else if (nums[mid] > target) {
      back = mid - 1;
    } else {
      locate = true;
      break;
    }
  }

  if (!locate) {
    return [-1, -1];
  } else {
    let frontL = front;
    let backL = back;
    while (frontL < backL) {
      // console.log(frontL, backL);
      let mid1 = frontL + Math.floor((backL - frontL) / 2);
      let mid2 = mid1 + 1;
      if (nums[mid1] < target && nums[mid2] < target) {
        // console.log('aa');
        frontL = mid2;
      } else if (nums[mid1] < target && nums[mid2] === target) {
        // console.log('bb');
        backL = mid2;
        break;
      } else {
        // console.log('cc');
        backL = mid1;
      }
    }

    let frontR = front;
    let backR = back;
    while (frontR < backR) {
      // console.log('dd', frontR, backR);
      let mid1 = frontR + Math.floor((backR - frontR) / 2);
      let mid2 = mid1 + 1;
      if (nums[mid1] > target && nums[mid2] > target) {
        backR = mid1;
      } else if (nums[mid1] === target && nums[mid2] > target) {
        frontR = mid1;
        break;
      } else {
        frontR = mid2;
      }
    }
    return [backL, frontR];
  }
};

console.log(searchRange([1], 1));
// [0, 0]

console.log(searchRange([1, 2], 1));
// [0, 0]

console.log(searchRange([0, 0, 1, 1, 2, 3], 0));
// [0, 1]

console.log(searchRange([1, 2], 2));
// [1, 1]

console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
// [3, 4]

console.log(searchRange([0, 1, 1, 1, 1, 1, 1, 1, 3], 1));
// [1, 7]

console.log(searchRange([1, 2, 3, 3, 3, 3, 4, 5, 9], 3));
// [2, 5]

console.log(
  searchRange(
    [0, 0, 1, 1, 1, 2, 4, 4, 4, 4, 5, 5, 5, 6, 8, 8, 9, 9, 10, 10, 10],
    8
  )
);
// [14, 15]

console.log(searchRange([5, 7, 7, 8, 8, 10], 6));
// [-1, -1]
