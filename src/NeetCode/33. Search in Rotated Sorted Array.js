/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (nums[middle] === target) return middle;

    //   left sorted
    if (nums[middle] >= nums[left]) {
      if (target > nums[middle] || target < nums[left]) {
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    }
    //   right sorted
    else {
      if (target < nums[middle] || target > nums[right]) {
        right = middle - 1;
      } else {
        left = middle + 1;
      }
    }
  }
  return -1;
};

console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4

console.log(search([(4, 5, 6, 7, 0, 1, 2)], 3));
// search([4, 5, 6, 7, 0, 1, 2], 3);
// Input: nums = , target = 3
// Output: -1

console.log(search([1], 0));
// search([1], 0);
// Input: nums = [1], target = 0
// Output: -1

// Constraints:

//     1 <= nums.length <= 5000
//     -104 <= nums[i] <= 104
//     All values of nums are unique.
//     nums is an ascending array that is possibly rotated.
//     -104 <= target <= 104
