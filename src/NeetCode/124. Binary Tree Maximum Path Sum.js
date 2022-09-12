/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function (root) {
  let res = root.val;
  // Return without SPLIT: path starting from top to bottom
  const dfs = (root) => {
    if (!root) return 0;
    let leftMax = Math.max(dfs(root.left), 0);
    let rightMax = Math.max(dfs(root.right), 0);

    // with SPLIT: path starting from left to right
    res = Math.max(res, root.val + leftMax + rightMax);

    return root.val + Math.max(leftMax, rightMax);
  };
  dfs(root);
  return res;
};

// Input: root = [1, 2, 3]
// Output: 6
// Explanation: The optimal path is 2 -> 1 -> 3 with a path sum of 2 + 1 + 3 = 6.

// Input: root = [-10,9,20,null,null,15,7]
// Output: 42
// Explanation: The optimal path is 15 -> 20 -> 7 with a path sum of 15 + 20 + 7 = 42.

// Constraints:

//     The number of nodes in the tree is in the range [1, 3 * 104].
//     -1000 <= Node.val <= 1000
