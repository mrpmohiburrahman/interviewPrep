/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let right = head;
  let left = head;
  for (let i = 0; i < n; i++) right = right.next;
  if (!right) return head.next;
  while (right.next) {
    right = right.next;
    left = left.next;
  }
  left.next = left.next.next;
  return head;
};

// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]

// Input: head = [1], n = 1
// Output: []

// Input: head = [1,2], n = 1
// Output: [1]

// Constraints:

//     The number of nodes in the list is sz.
//     1 <= sz <= 30
//     0 <= Node.val <= 100
//     1 <= n <= sz
