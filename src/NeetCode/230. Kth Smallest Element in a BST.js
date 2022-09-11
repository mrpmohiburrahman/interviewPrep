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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  let n = 0;
  let stack = [];
  let cur = root;
  while (root && stack) {
    while (cur) {
      stack.push(cur);
      cur = cur.left;
    }
    cur = stack.pop();
    n += 1;
    if (n === k) return cur.val;
    cur = cur.right;
  }
};

// Input: root = [3,1,4,null,2], k = 1
// Output: 1

// Input: root = [5,3,6,2,4,null,null,1], k = 3
// Output: 3

// Constraints:
//     The number of nodes in the tree is n.
//     1 <= k <= n <= 104
//     0 <= Node.val <= 104

// Follow up: If the BST is modified often (i.e., we can do insert and delete operations) and you need to find the kth smallest frequently, how would you optimize?
