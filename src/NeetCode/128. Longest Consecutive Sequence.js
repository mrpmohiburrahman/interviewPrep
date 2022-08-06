/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if (nums.length === 0) return 0;
  const set = new Set(nums);
  let max = 0;

  for (const num of set) {
    if (set.has(num - 1)) continue;
    let currNum = num;
    let currMax = 1;
    while (set.has(currNum + 1)) {
      currNum++;
      currMax++;
    }
    max = Math.max(max, currMax);
  }
  return max;
};

console.log(longestConsecutive([9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6]));
// Input: nums = [9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6]
// Output: 7

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9
