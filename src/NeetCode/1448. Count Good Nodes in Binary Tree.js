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
var goodNodes = function (root) {
  const dfs = (node, maxValue) => {
    if (!node) return 0;
    let res = node.val >= maxValue ? 1 : 0;
    maxValue = Math.max(maxValue, node.val);
    res += dfs(node.left, maxValue);
    res += dfs(node.right, maxValue);
    return res;
  };
  return dfs(root, root.val);
};

// Input: root = [3,1,4,3,null,1,5]
// Output: 4
// Explanation: Nodes in blue are good.
// Root Node (3) is always a good node.
// Node 4 -> (3,4) is the maximum value in the path starting from the root.
// Node 5 -> (3,4,5) is the maximum value in the path
// Node 3 -> (3,1,3) is the maximum value in the path.

// Input: root = [3,3,null,4,2]
// Output: 3
// Explanation: Node 2 -> (3, 3, 2) is not good, because "3" is higher than it.

// Input: root = [1]
// Output: 1
// Explanation: Root is considered as good.

// Constraints:

//     The number of nodes in the binary tree is in the range [1, 10^5].
//     Each node's value is between [-10^4, 10^4].
