/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let leftIndex = 0;
  let rightIndex = nums.length - 1;
  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (nums[middleIndex] === target) return middleIndex;
    else if (target < nums[middleIndex]) rightIndex = middleIndex - 1;
    else if (target > nums[middleIndex]) leftIndex = middleIndex + 1;
  }
  return -1;
};

console.log(search([-1, 0, 3, 5, 9, 12], 9));
// search([-1, 0, 3, 5, 9, 12], 9);
// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4

console.log(search([-1, 0, 3, 5, 9, 12], 2));
// search([-1, 0, 3, 5, 9, 12], 2);
// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1

// Constraints:
//     1 <= nums.length <= 104
//     -10^4 < nums[i], target < 10^4
//     All the integers in nums are unique.
//     nums is sorted in ascending order.
