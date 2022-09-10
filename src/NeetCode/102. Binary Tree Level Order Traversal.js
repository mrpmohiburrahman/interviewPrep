/**
 * Definition for a binary tree subtree.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];
  let res = [];
  let q = [root];
  while (q.length) {
    let temp = [];
    let qLength = q.length;
    for (let index = 0; index < qLength; index++) {
      let subtree = q.shift();

      temp.push(subtree.val);
      if (subtree.left !== null) q.push(subtree.left);
      if (subtree.right !== null) q.push(subtree.right);
    }
    res.push(temp);
  }
  return res;
};

// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[9,20],[15,7]]

// Example 2:

// Input: root = [1]
// Output: [[1]]

// Example 3:

// Input: root = []
// Output: []

// Constraints:

//     The number of nodes in the tree is in the range [0, 2000].
//     -1000 <= Node.val <= 1000
