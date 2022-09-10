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
var diameterOfBinaryTree = function (root) {
  let res = [0];
  const dfs = (root) => {
    if (!root) return -1;
    const left = dfs(root.left);
    const right = dfs(root.right);
    res[0] = Math.max(res[0], 2 + left + right);
    return 1 + Math.max(left, right);
  };
  dfs(root);
  return res[0];
};

// Input: root = [1,2,3,4,5]
// Output: 3
// Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].

// Example 2:

// Input: root = [1,2]
// Output: 1

// Constraints:

//     The number of nodes in the tree is in the range [1, 104].
//     -100 <= Node.val <= 100
