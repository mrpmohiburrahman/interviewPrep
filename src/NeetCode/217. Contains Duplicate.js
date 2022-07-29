/**
 * @param {number[]} nums
 * @return {boolean}
 */

// brute force
// time complexity: O(n^2)
// space complexity: O(1)
// var containsDuplicate = function (nums) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] === nums[j]) return true;
//     }
//   }
//   return false;
// };

// if the priority is time complexity
// technique: sorting, then comparing adjacent arrays
// time complexity: O(nlogn) // nlogn is for sorting function. skipping the n complexity for one pass for checking duplicates
// space complexity: O(1)
// var containsDuplicate = function (nums) {
//   nums.sort();
//   console.log(nums);
//   for (let index = 0; index < nums.length - 1; index++) {
//     if (nums[index] === nums[index + 1]) return true;
//   }
//   return false;
// };

// if we can use space a little bit
// technique: hashmap
// time complexity: O(n)
// space complexity: O(n)
// var containsDuplicate = function (nums) {
//   const numHash = new Set();
//   for (let index = 0; index < nums.length; index++) {
//     if (numHash.has(nums[index])) return true;
//     numHash.add(nums[index]);
//   }
//   return false;
// };

// one line solution
// making new unique array and comparing sizes
// technique: hashmap and Set
// time complexity: O(n)
// space complexity: O(n)
var containsDuplicate = function (nums) {
  return new Set(nums).size != nums.length;
  // return false;
};

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
