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
 * @return {boolean}
 */
var isBalanced = function (root) {
  const dfs = (root) => {
    if (!root) return [true, 0];
    const [left, right] = [dfs(root.left), dfs(root.right)];
    const balanecd = left[0] && right[0] && Math.abs(left[1] - right[1]) <= 1;
    return [balanecd, 1 + Math.max(left[1], right[1])];
  };
  return dfs(root)[0];
};

// Input: root = [3,9,20,null,null,15,7]
// Output: true

// Input: root = [1,2,2,3,3,null,null,4,4]
// Output: false

// Example 3:

// Input: root = []
// Output: true

// Constraints:

//     The number of nodes in the tree is in the range [0, 5000].
//     -104 <= Node.val <= 104
