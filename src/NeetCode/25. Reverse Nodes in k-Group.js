/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const getKth = (curr, k) => {
  while (curr && k > 0) {
    curr = curr.next;
    k--;
  }
  return curr;
};
var reverseKGroup = function (head, k) {
  let dummy = new ListNode(0, head);
  let groupPrev = dummy;
  while (true) {
    let kth = getKth(groupPrev, k);
    if (!kth) break;
    groupNext = kth.next;

    // reverse the group
    let prev = kth.next;
    let curr = groupPrev.next;
    while (curr !== groupNext) {
      let temp = curr.next;
      curr.next = prev;
      prev = curr;
      curr = temp;
    }
    temp = groupPrev.next;
    groupPrev.next = kth;
    groupPrev = temp;
  }
  return dummy.next;
};
// Input: head = [1,2,3,4,5], k = 2
// Output: [2,1,4,3,5]

// Example 2:

// Input: head = [1,2,3,4,5], k = 3
// Output: [3,2,1,4,5]

// Constraints:

//     The number of nodes in the list is n.
//     1 <= k <= n <= 5000
//     0 <= Node.val <= 1000

// Follow-up: Can you solve the problem in O(1) extra memory space?
