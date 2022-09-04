/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  let res = nums[left];
  while (left <= right) {
    if (nums[left] < nums[right]) {
      res = Math.min(res, nums[left]);
    }
    let middle = Math.floor((left + right) / 2);
    res = Math.min(res, nums[middle]);
    if (nums[middle] >= nums[left]) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  //   console.log(`res === ${res}`);
  return res;
};

findMin([3, 4, 5, 1, 2]);
// Input: nums = [3,4,5,1,2]
// Output: 1
// Explanation: The original array was [1,2,3,4,5] rotated 3 times.

findMin([4, 5, 6, 7, 0, 1, 2]);
// Input: nums = [4,5,6,7,0,1,2]
// Output: 0
// Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.

findMin([11, 13, 15, 17]);
// Input: nums = [11,13,15,17]
// Output: 11
// Explanation: The original array was [11,13,15,17] and it was rotated 4 times.

// Constraints:

//     n == nums.length
//     1 <= n <= 5000
//     -5000 <= nums[i] <= 5000
//     All the integers of nums are unique.
//     nums is sorted and rotated between 1 and n times.
