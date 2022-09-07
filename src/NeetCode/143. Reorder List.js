/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  let [slow, fast] = [head, head.next];
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  let second = slow.next;
  slow.next = null;
  let prev = null;

  while (second) {
    let temp = second.next;
    second.next = prev;
    prev = second;
    second = temp;
  }
  let [firstBlock, secondBlock] = [head, prev];
  while (secondBlock) {
    let [temp1, temp2] = [firstBlock.next, secondBlock.next];
    firstBlock.next = secondBlock;
    secondBlock.next = temp1;
    firstBlock = temp1;
    secondBlock = temp2;
  }
};

// Input: head = [1, 2, 3, 4];
// Output: [1, 4, 2, 3];

// Input: head = [1, 2, 3, 4, 5];
// Output: [1, 5, 2, 4, 3];

// Constraints:

//     The number of nodes in the list is in the range [1, 5 * 104].
//     1 <= Node.val <= 1000
