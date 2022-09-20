/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  let maxHeap = new MaxPriorityQueue();
  stones.forEach((item) => {
    maxHeap.enqueue(item);
  });
  while (maxHeap.size() > 1) {
    let first = maxHeap.dequeue().element;
    let second = maxHeap.dequeue().element;
    if (first > second) {
      maxHeap.enqueue(first - second);
    }
  }
  return !maxHeap.isEmpty() ? maxHeap.front().element : 0;
};
