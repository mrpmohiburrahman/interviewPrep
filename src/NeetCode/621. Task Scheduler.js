const { MaxPriorityQueue } = require("@datastructures-js/priority-queue");

/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
  const charMap = new Map();

  for (let char of tasks) {
    charMap.set(char, (charMap.get(char) || 0) + 1);
  }
  console.log(charMap);

  let maxHeap = new MaxPriorityQueue();
  for (const values of charMap.values()) {
    // console.log(`[values] === ${values}`);
    maxHeap.enqueue(values);
  }
  // console.log(`[maxHeap.toArray()] === ${JSON.stringify(maxHeap.toArray())}`);

  let time = 0;
  const q = [];

  while (maxHeap.isEmpty() === false || q.length !== 0) {
    time += 1;
    if (maxHeap.isEmpty() === false) {
      let cnt = maxHeap.dequeue() - 1; // for leetcode we need to use maxHeap.dequeue().element
      if (cnt !== 0) {
        q.push([cnt, time + n]);
      }
    }
    if (q.length !== 0 && q[0][1] === time) {
      const firstElement = q.shift();
      console.log(`[firstElement] === ${firstElement[0]}`);
      maxHeap.enqueue(firstElement[0]);
      // break;
    }
  }
  console.log(`time === ${time}`);
  return time;
};
leastInterval(["A", "A", "A", "B", "B", "B"], 2);
// Input: tasks = ["A","A","A","B","B","B"], n = 2
// Output: 8
// Explanation:
// A -> B -> idle -> A -> B -> idle -> A -> B
// There is at least 2 units of time between any two same tasks.

// leastInterval(["A", "A", "A", "B", "B", "B"], 0);
// Input: tasks = ["A","A","A","B","B","B"], n = 0
// Output: 6
// Explanation: On this case any permutation of size 6 would work since n = 0.
// ["A","A","A","B","B","B"]
// ["A","B","A","B","A","B"]
// ["B","B","B","A","A","A"]
// ...
// And so on.

// leastInterval(["A", "A", "A", "A", "A", "A", "B", "C", "D", "E", "F", "G"], 2);
// Input: tasks = ["A","A","A","A","A","A","B","C","D","E","F","G"], n = 2
// Output: 16
// Explanation:
// One possible solution is
// A -> B -> C -> A -> D -> E -> A -> F -> G -> A -> idle -> idle -> A -> idle -> idle -> A

// Constraints:

//     1 <= task.length <= 104
//     tasks[i] is upper-case English letter.
//     The integer n is in the range [0, 100].
