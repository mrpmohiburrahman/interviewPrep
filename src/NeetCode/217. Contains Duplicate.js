/**
 * @param {number[]} nums
 * @return {boolean}
 */

// brute force
// time complexity: O(n^2)
// space complexity: O(1)
var containsDuplicate = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) return true;
    }
  }
  return false;
};

// var containsDuplicate = function (nums) {
//   nums.sort();
//   console.log(nums);
//   for (let index = 0; index < nums.length - 1; index++) {
//     if (nums[index] === nums[index + 1]) return true;
//   }
//   return false;
// };

console.log(containsDuplicate([1, 2, 3, 1]));

// Input: nums = [1,2,3,1]
// Output: true

console.log(containsDuplicate([1, 2, 3, 4]));
// containsDuplicate([1,2,3,4])
// Input: nums = [1,2,3,4]
// Output: false

console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
// containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]);
// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true
