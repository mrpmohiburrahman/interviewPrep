/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
const merge = (l1, l2) => {
  let tempNode = new ListNode(0);
  let current = tempNode;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }
    current = current.next;
  }
  if (l1) current.next = l1;
  if (l2) current.next = l2;

  return tempNode.next;
};

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  let root = lists[0];
  for (let index = 1; index < lists.length; index++) {
    root = merge(root, lists[index]);
  }
  return root || null;
};

// Input: lists = [[1,4,5],[1,3,4],[2,6]]
// Output: [1,1,2,3,4,4,5,6]
// Explanation: The linked-lists are:
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// merging them into one sorted list:
// 1->1->2->3->4->4->5->6

// Example 2:

// Input: lists = []
// Output: []

// Example 3:

// Input: lists = [[]]
// Output: []

// Constraints:

//     k == lists.length
//     0 <= k <= 104
//     0 <= lists[i].length <= 500
//     -104 <= lists[i][j] <= 104
//     lists[i] is sorted in ascending order.
//     The sum of lists[i].length will not exceed 10^4.
