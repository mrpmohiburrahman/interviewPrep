/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let result = [];
  let subset = [];

  const dfs = (i) => {
    if (i >= nums.length) {
      console.log(`subset === ${JSON.stringify(subset)}`);
      console.log(`result before === ${JSON.stringify(result)}`);
      result.push([...subset]);
      console.log(`result after === ${JSON.stringify(result)}`);
      return;
    }
    subset.push(nums[i]);
    dfs(i + 1);

    subset.pop();
    dfs(i + 1);
  };
  dfs(0);
  return result;
};

console.log(subsets([1, 2, 3]));

//  Example 1:
// Input: nums = [1,2,3]
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

// Example 2:

// Input: nums = [0]
// Output: [[],[0]]

// Constraints:

//     1 <= nums.length <= 10
//     -10 <= nums[i] <= 10
//     All the numbers of nums are unique.
