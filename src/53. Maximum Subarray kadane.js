/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let currSum = nums[0];
  let maxSum = nums[0];
  for (let index = 1; index < nums.length; index++) {
    currSum = Math.max(nums[index], currSum + nums[index]);
    maxSum = Math.max(currSum, maxSum);
  }
  console.log(maxSum);
  return maxSum;
};

maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
// maxSubArray([5, 4, -1, 7, 8]);
// maxSubArray([-4, -3, -2, -1]);
