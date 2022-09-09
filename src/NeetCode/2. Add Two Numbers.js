/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let dummy = new ListNode(0);
  let current = dummy;

  let carry = 0;
  while (l1 || l2 || carry) {
    let v1 = l1?.val ? l1?.val : 0;
    let v2 = l2?.val ? l2?.val : 0;
    let val = v1 + v2 + carry;

    carry = Math.floor(val / 10);
    val = val % 10;

    current.next = new ListNode(val);
    current = current.next;

    l1 = l1?.next ? l1?.next : null;
    l2 = l2?.next ? l2?.next : null;
  }
  return dummy.next;
};

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

// Input: l1 = [0], l2 = [0]
// Output: [0]

// Input: (l1 = [9, 9, 9, 9, 9, 9, 9]), (l2 = [9, 9, 9, 9]);
// Output: [8, 9, 9, 9, 0, 0, 0, 1];

// Constraints:

//     The number of nodes in each linked list is in the range [1, 100].
//     0 <= Node.val <= 9
//     It is guaranteed that the list represents a number that does not have leading zeros.
