/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  let res = [];
  const dfs = (node) => {
    if (!node) {
      res.push("N");
      return;
    }
    res.push(String(node.val));
    dfs(node.left);
    dfs(node.right);
  };
  dfs(root);
  return res.join(",");
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  let vals = data.split(",");
  let i = 0;
  const dfs = () => {
    if (vals[i] === "N") {
      i++;
      return null;
    }
    let node = new TreeNode(parseInt(vals[i]));
    i++;
    node.left = dfs();
    node.right = dfs();
    return node;
  };
  return dfs();
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

//  Input: root = [1,2,3,null,null,4,5]
//  Output: [1,2,3,null,null,4,5]

//  Input: root = []
//  Output: []

//  Constraints:

//      The number of nodes in the tree is in the range [0, 104].
//      -1000 <= Node.val <= 1000
