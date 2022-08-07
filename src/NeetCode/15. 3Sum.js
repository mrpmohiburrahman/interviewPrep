/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var threeSum = function (nums) {
  nums.sort((a, b) => (a < b ? -1 : 1));
  const result = [];
  for (let index = 0; index < nums.length; index++) {
    let a = nums[index];
    let low = index + 1;
    let high = nums.length - 1;
    let sum = 0;
    while (low < high) {
      sum = a + nums[low] + nums[high];
      if (sum === 0) {
        result.push([a, nums[low], nums[high]]);
        while (nums[low] === nums[low + 1]) low++;
        while (nums[high] === nums[high - 1]) high--;
        low++;
        high--;
      } else if (sum < 0) low++;
      else high--;
    }
    while (nums[index] === nums[index + 1]) index++;
  }
  return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation:
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.

console.log(threeSum([0, 1, 1]));
// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.

console.log(threeSum([0, 0, 0]));
// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.
