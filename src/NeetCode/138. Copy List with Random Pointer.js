/**
 * Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  let map = new Map();
  let old = head;
  while (old) {
    map.set(old, new Node(old.val, null, null));
    old = old.next;
  }

  for (const [oldptr, newptr] of map) {
    newptr.next = oldptr.next && map.get(oldptr.next);
    newptr.random = oldptr.random && map.get(oldptr.random);
  }
  return map.get(head);
};

// Input: head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
// Output: [[7,null],[13,0],[11,4],[10,2],[1,0]]

// Input: head = [[1,1],[2,1]]
// Output: [[1,1],[2,1]]

// Input: head = [[3,null],[3,0],[3,null]]
// Output: [[3,null],[3,0],[3,null]]
