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
 * @return {number[]}
 */
var rightSideView = function (root) {
  let res = [];
  let q = [root];
  while (q.length) {
    let rightSide = null;
    let qLength = q.length;
    for (let index = 0; index < qLength; index++) {
      let node = q.shift();
      if (node) {
        rightSide = node;
        q.push(node.left);
        q.push(node.right);
      }
    }
    if (rightSide) res.push(rightSide.val);
  }
  return res;
};

// Input: root = [1,2,3,null,5,null,4]
// Output: [1,3,4]

// Input: root = [1,null,3]
// Output: [1,3]

// Input: root = []
// Output: []

// Constraints:

//     The number of nodes in the tree is in the range [0, 100].
//     -100 <= Node.val <= 100
