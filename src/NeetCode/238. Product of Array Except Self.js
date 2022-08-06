/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  var output = [];
  var leftMult = 1;
  var rightMult = 1;
  for (var i = nums.length - 1; i >= 0; i--) {
    output[i] = rightMult;
    rightMult *= nums[i];
  }
  for (var j = 0; j < nums.length; j++) {
    output[j] *= leftMult;
    leftMult *= nums[j];
  }
  return output;
};

console.log(productExceptSelf([1, 2, 3, 4]));
// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

console.log(productExceptSelf([-1, 1, 0, -3, 3]));
// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]
