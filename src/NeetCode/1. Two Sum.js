/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let hashMap = {};
  for (let index = 0; index < nums.length; index++) {
    let diff = target - nums[index];
    //  if (diff in hashMap) {
    if (hashMap[diff] !== undefined) {
      return [hashMap[diff], index];
    }
    hashMap[nums[index]] = index;
  }
  console.log(JSON.stringify(hashMap));
};

// console.log(twoSum([2, 7, 11, 15], 9));

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

console.log(twoSum([3, 2, 4], 6));

// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// twoSum([3, 3], 6);
// Input: nums = [3,3], target = 6
// Output: [0,1]

// Constraints:
//     2 <= nums.length <= 104
//     -109 <= nums[i] <= 109
//     -109 <= target <= 109
//     Only one valid answer exists.
// Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?
