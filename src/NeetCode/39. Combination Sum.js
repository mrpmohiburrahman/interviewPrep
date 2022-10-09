/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const res = [];
  const dfs = (i, cur, total) => {
    if (total === target) {
      res.push([...cur]);
      return;
    }
    if (i >= candidates.length || total > target) return;

    cur.push(candidates[i]);
    dfs(i, cur, total + candidates[i]);

    cur.pop();
    dfs(i + 1, cur, total);
  };
  dfs(0, [], 0);
  return res;
};

// Example 1:

console.log(combinationSum([2, 3, 6, 7], 7));
// Input: candidates = [2,3,6,7], target = 7
// Output: [[2,2,3],[7]]
// Explanation:
// 2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
// 7 is a candidate, and 7 = 7.
// These are the only two combinations.

// Example 2:

// Input: candidates = [2,3,5], target = 8
// Output: [[2,2,2,2],[2,3,3],[3,5]]

// Example 3:

// Input: candidates = [2], target = 1
// Output: []

// Constraints:

//     1 <= candidates.length <= 30
//     2 <= candidates[i] <= 40
//     All elements of candidates are distinct.
//     1 <= target <= 500
