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
var isValidBST = function (root) {
  const isValid = (node, left, right) => {
    if (!node) return true;
    if (!(node.val > left && node.val < right)) return false;
    return (
      isValid(node.left, left, node.val) && isValid(node.right, node.val, right)
    );
  };
  return isValid(root, -Infinity, Infinity);
};

// Input: root = [2,1,3]
// Output: true

// Input: root = [5,1,4,null,null,3,6]
// Output: false
// Explanation: The root node's value is 5 but its right child's value is 4.

// Constraints:

//     The number of nodes in the tree is in the range [1, 104].
//     -231 <= Node.val <= 231 - 1
