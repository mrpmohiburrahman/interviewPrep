// TODO: solve this using quick select


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  nums.sort((a, b) => b - a);
  return nums[k - 1];
};

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));

// Input: nums = [3,2,1,5,6,4], k = 2
// Output: 5

console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4));
// Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
// Output: 4

// Constraints:

//     1 <= k <= nums.length <= 105
//     -104 <= nums[i] <= 104
