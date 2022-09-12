/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  if (!preorder.length || !inorder.length) return null;
  let root = new TreeNode(preorder[0]);
  let mid = inorder.indexOf(preorder[0]);
  root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid));
  root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1));
  return root;
};

// Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
// Output: [3,9,20,null,null,15,7]

// Input: preorder = [-1], inorder = [-1]
// Output: [-1]

// Constraints:

//     1 <= preorder.length <= 3000
//     inorder.length == preorder.length
//     -3000 <= preorder[i], inorder[i] <= 3000
//     preorder and inorder consist of unique values.
//     Each value of inorder also appears in preorder.
//     preorder is guaranteed to be the preorder traversal of the tree.
//     inorder is guaranteed to be the inorder traversal of the tree.
